---
title: Python Scripting
sidebar_position: 2
sidebar_label: Python scripting
slug: './python'
---

Python scripting allows you to extend your configuration models with custom logic, external API integrations, and dynamic behavior. Scripts are executed server-side in a sandboxed Python environment and can be used across four different contexts: value expressions, model scripts, text expressions, and dynamic groups.

## How it works

Every Python script must define an `invoke` function that accepts a single `args` parameter. This function is called by the runtime, and `args` is a dictionary containing the variables you've configured in the expression editor.

```python
def invoke(args):
    return args['Width']['value'] * args['Height']['value']
```

The `args` dictionary keys correspond to the **tags** you assign to variables in the expression editor. Each variable is a dictionary containing properties like `value`, `selected`, and any custom feature properties.

## Script structure

### The `invoke` function

Every script must define an `invoke` function. This is the entry point that receives the configured variables and returns a result.

```python
def invoke(args):
    # args is a dictionary of variables
    # Return a value appropriate for the expression type
    return result
```

The return type depends on where the script is used:

| Expression type | Expected return type |
| --- | --- |
| Value expression | `float` or `int` (numeric) |
| Text expression | `str` (string) |
| Dynamic group | `list` of dictionaries |
| Model script | Any (return value is ignored) |

### Accessing variables

Variables are passed as dictionaries with the following properties:

```python
def invoke(args):
    feature = args['MyFeature']

    feature['value']       # Numeric value (decimal)
    feature['selected']    # Boolean - whether the feature is selected
    feature['textValue']   # Text value (string or None)
    feature['id']          # Node ID (GUID string)
    feature['featureId']   # Feature ID (GUID string)
    feature['code']        # Article code
    feature['name']        # Feature name
```

Custom feature properties are also included by name:

```python
def invoke(args):
    feature = args['MyFeature']
    weight = feature['Weight']      # Numeric property
    color = feature['ColorName']    # Text property
```

### Child variables

When a variable is configured with **Children** enabled, it becomes a list of dictionaries instead of a single dictionary:

```python
def invoke(args):
    children = args['Options']  # List of child feature dictionaries

    total = 0
    for child in children:
        if child['selected']:
            total += child['value']
    return total
```

### Multilevel children

When **Multilevel** is enabled (model scripts only), child variables include a `_children` property for recursive traversal:

```python
def invoke(args):
    def sum_tree(node):
        total = node['value']
        for child in node.get('_children', []):
            total += sum_tree(child)
        return total

    return sum_tree(args['Root'])
```

## Value expressions

Value expressions compute a numeric value for a feature based on other features in the model. The script must return a number.

```python
def invoke(args):
    width = args['Width']['value']
    height = args['Height']['value']
    return width * height
```

The returned value is used as the derived value for the feature the expression is attached to. Value expressions are evaluated during the solving process whenever referenced variables change.

### Pure functions

Value expressions can be marked as **pure functions** in the expression editor. A pure function always returns the same result for the same inputs, which allows the system to cache results and improve performance. Mark your expression as pure if it doesn't depend on external state (no API calls, no randomness).

## Model scripts

Model scripts run during the solving process and can modify feature values, text values, and image values using the `assign_property` function. Unlike value expressions, model scripts don't return a meaningful value - they operate through side effects.

```python
def invoke(args):
    quantity = args['Quantity']['value']
    price_per_unit = args['PricePerUnit']['value']

    total = quantity * price_per_unit

    assign_property(args['TotalPrice'], 'value', total)
    assign_property(args['Summary'], 'textValue', f'Total: €{total:.2f}')
```

### The `assign_property` function

`assign_property` is a built-in function available in all Python scripts. It issues a command to update a feature's property.

```python
assign_property(variable, property_name, value)
```

| Parameter | Type | Description |
| --- | --- | --- |
| `variable` | `dict` | A variable from `args` (must contain an `id` field) |
| `property_name` | `str` | The property to set |
| `value` | any | The value to assign |

**Built-in property names:**

| Property | Description |
| --- | --- |
| `value` | Sets the numeric value of the feature |
| `textValue` | Sets the text value of the feature |
| `imageValue` | Sets the image URL of the feature |

You can also assign custom properties by name. These become available to other expressions that reference the feature:

```python
def invoke(args):
    data = fetch_external_data()
    assign_property(args['Feature'], 'ExternalWeight', data['weight'])
    assign_property(args['Feature'], 'ExternalPrice', data['price'])
```

### Logging

Use `print()` to send log messages to the configurator. Messages printed to stdout appear as info-level logs, and messages printed to stderr appear as error-level logs.

```python
import sys

def invoke(args):
    print('Processing configuration...')           # Info level
    print('Something went wrong', file=sys.stderr) # Error level
```

## Text expressions

Text expressions generate dynamic text for features. The script must return a string.

```python
def invoke(args):
    color = args['Color']['name']
    size = args['Size']['value']
    return f'{color} - Size {size}'
```

Text expressions are evaluated after the solver completes, in dependency order. If one text expression references a variable whose text value is set by another text expression, the referenced expression is evaluated first.

### Find and replace expressions

In addition to Python, text expressions support a simpler **find and replace** syntax using `@{expression}` placeholders:

```
The selected color is @{Color} with size @{Size.Value * 2}
```

This syntax uses dynamic LINQ expressions and is useful for simple text formatting without writing a full Python script.

## Dynamic groups

Dynamic groups use Python scripts to generate features dynamically, often based on external data sources. The script must return a list of dictionaries, where each dictionary represents a feature to create.

```python
import requests

def invoke(args):
    response = requests.get('https://api.example.com/products')
    products = response.json()

    return [
        {
            'id': product['sku'],
            'name': product['name'],
            'price': product['price'],
            'description': product['description']
        }
        for product in products
    ]
```

### Return format

Each dictionary in the returned list must include:

| Field | Required | Type | Description |
| --- | --- | --- | --- |
| `id` | Yes | `str` | Unique identifier for the feature |
| `name` | Yes | `str` | Display name of the feature |
| *(other fields)* | No | varies | Become feature properties |

Property types are inferred from the value type:

| Value type | Feature property type |
| --- | --- |
| `str` | Text property |
| `int` or `float` | Input (numeric) property |
| `dict` with `id` field | Associated feature property |

### Accessing configuration state

Dynamic group scripts receive the same variable format as other scripts, plus a `CONFIGURATION_ID` constant:

```python
def invoke(args):
    config_id = args['CONFIGURATION_ID']
    selected_category = args['Category']

    if selected_category['selected']:
        return fetch_products(selected_category['code'])
    return []
```

## Environment variables

Scripts can access environment variables (secrets) that are configured in the Elfsquad Management System. These are useful for storing API keys and other sensitive data.

Environment variables are injected into `os.environ` before script execution:

```python
import os
import requests

def invoke(args):
    api_key = os.environ.get('API_KEY')
    response = requests.get(
        'https://api.example.com/data',
        headers={'Authorization': f'Bearer {api_key}'}
    )
    return response.json()
```

## Available libraries

The Python runtime includes the following libraries in addition to the Python standard library:

| Library | Description |
| --- | --- |
| `requests` | HTTP client for making API calls |
| `numpy` | Numerical computing |
| `scipy` | Scientific computing |
| `pandas` | Data analysis and manipulation |
| `pulp` | Linear and integer programming |
| `matplotlib` | Data visualization |

You can import any of these in your scripts:

```python
import numpy as np
import pandas as pd

def invoke(args):
    values = [child['value'] for child in args['Items'] if child['selected']]
    return float(np.mean(values)) if values else 0.0
```

## Examples

### Fetching prices from an external API

```python
import os
import requests

def invoke(args):
    api_url = os.environ.get('PRICING_API_URL')
    product_code = args['Product']['code']

    response = requests.get(f'{api_url}/prices/{product_code}')
    data = response.json()

    assign_property(args['Product'], 'value', data['price'])
    assign_property(args['Product'], 'textValue', data['currency'])
```

### Calculating a weighted total

```python
def invoke(args):
    total = 0
    for option in args['Options']:
        if option['selected']:
            total += option['value'] * option['Weight']
    return total
```

### Generating options from a database

```python
import os
import requests

def invoke(args):
    api_key = os.environ.get('DB_API_KEY')
    category = args['Category']['code']

    response = requests.get(
        f'https://api.example.com/items?category={category}',
        headers={'X-Api-Key': api_key}
    )

    return [
        {
            'id': item['id'],
            'name': item['name'],
            'price': item['unit_price'],
            'lead_time': item['lead_time_days']
        }
        for item in response.json()
    ]
```

### Conditional text generation

```python
def invoke(args):
    parts = []
    for option in args['SelectedOptions']:
        if option['selected']:
            parts.append(f"{option['name']} (x{option['value']:.0f})")

    if not parts:
        return 'No options selected'

    return ', '.join(parts)
```

### Linear optimization with PuLP

```python
import pulp

def invoke(args):
    items = args['Items']

    prob = pulp.LpProblem('Optimize', pulp.LpMinimize)
    quantities = {
        i: pulp.LpVariable(f'q_{i}', lowBound=0)
        for i in range(len(items))
    }

    # Minimize total cost
    prob += pulp.lpSum(
        quantities[i] * items[i]['UnitCost']
        for i in range(len(items))
    )

    # Meet minimum quantity
    prob += pulp.lpSum(quantities.values()) >= args['MinQuantity']['value']

    prob.solve(pulp.PULP_CBC_CMD(msg=0))

    for i, item in enumerate(items):
        assign_property(item, 'value', quantities[i].varValue or 0)

    return pulp.value(prob.objective)
```
