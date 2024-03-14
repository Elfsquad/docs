---
title: Python Integration with Archer
sidebar_position: 2
sidebar_label: Python integration
slug: './python'
---

Archer offers seamless integration with Python, enabling users to incorporate Python scripts into their Archer models directly. This guide provides a detailed explanation of this integration, showcasing its versatility and ease of use.

## Including a Python Script

To bring a Python script into your Archer model, utilize the `import` directive:

```archer
model Phone {
  import "filename.py"  // Reference to the Python script

  Phone - mandatory -> Screen
  ...
}
```

## Sample Python Script

Consider the following Python script:

```python
@after_update()
def method_after_update():
  values = fetchValuesFromExternalApi()
  sumOfValues = sum(values)

  assign_property('Feature1.ExternalValues', values)

  add_constraint(lambda: model.Feature2.Value > sumOfValues)
```

This script highlights the three primary features of Archer's Python integration:

1. **Event hooks**: Call Python functions at specific points in the configuration's lifecycle.
2. **Direct Property Assignment:** You can assign values from your Python script directly to variables in your Archer model, using the `assign_property` method.
3. **Constraint Addition:** Use the `add_constraint` function to introduce new constraints.

## Accessing and Setting Variable Properties

The Python integration introduces a global `model` object. Through this, you can interface with Archer model variables.

```python
value = model['VariableName']['Value']
```

*Note: The `Selected` and `Value` properties start with uppercase letters.*

To assign a value to a model variable's property:

```python
valueCalculatedFromApi = fetchValueFromApi()

assign_property('VariableName.PropertyName', valueCalculatedFromApi)
```

Python integration supports assignment of intricate object structures, including arrays:

```python
assign_property('VariableName.ComplexObjectPropertyName', {
  'NestedObject': {
    ExampleValue: 123,
    ExampleArray: [1, 2, 3],
    'NestedNestedObject': {
      ObjectValue: True
    }
  }
})
```

Such complex structures are fully accessible within your Archer model:

```archer
model Example {
  Example - mandatory -> VariableName
  Example - optional -> Option1

  // Option1 visibility is contingent upon ObjectValue being true
  condition Option1 = VariableName.NestedObject.NestedNestedObject.ObjectValue

  // Using values from ExampleArray to determine Option1's lower bound value
  forall v in VariableName.NestedObject.ExampleArray {
    lower_bound Option1 = v * 2
  }
}
```

## Incorporating Additional Constraints

Augment your Archer model with constraints defined in Python:

```python
pythonValue = 123

add_constraint(lambda: model['Variable1']['Value'] >= model['Variable2']['Value'] * pythonValue)
```

## Using the `traverse` Method

The `traverse` method facilitates iteration over child variables of a given parent variable:

Given this Archer model:
```archer
model Example {
  Example - mandatory -> Group
  Group - optional -> Option1
  Group - optional -> Option2
  Group - optional -> Option3
}
```

You can loop over all of `Group`'s options:

```python
for c in traverse(model['Group']):
  add_constraint(lambda: c.Value > 10)
```

## Available hooks:
|Name | Decorator | Description |
| --- | --- | --- |
| Before update | @before_update | Invoked before a user requirement is updated in the solver. |
| After update | @after_update | Invoked after a user requirement is updated in the solver. |
