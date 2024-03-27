---
title: Archer Modeling Language
sidebar_position: 1
sidebar_label: Overview
slug: ./
---

Archer modeling language is a domain-specific language designed to model configuration models based on variables and constraints. It provides a powerful way to specify relationships between variables (features) and express conditional logic using a simple syntax that is easy to read and understand. The language is designed to be flexible and extensible, allowing users to define custom functions and integrate them into their models.

With Archer modeling language, users can create complex configuration models that accurately represent real-world systems. The language supports a wide range of constraints, including equality, inequality, logical operators, and more. It also allows users to define decision variables and objective functions, enabling them to optimize their models and find the best solution for a given set of inputs.

Whether you're a domain expert or a software developer, Archer modeling language provides a powerful tool for modeling configuration models in your area of expertise. With its intuitive syntax and flexible design, Archer modeling language makes it easy to create and analyze complex systems, enabling you to make better decisions and achieve better outcomes.

## Defining models
To define a model in Archer modeling language, use the following syntax: `model ModelName { }`. Replace `ModelName` with the name of your model. Inside the curly braces, you can define all of the model's variables and constraints. To specify relationships between variables, use the following syntax: `VariableA - RelationshipType -> VariableB`. Replace `VariableA` and `VariableB` with the names of the variables you want to relate, and `RelationshipType` with the type of relationship you want to specify.

For example, suppose you want to model a smartphone with a certain amount of storage and memory, and optional GPS functionality. You can define a model named `Phone` using the following code:

```archer
model Phone {
  Phone - mandatory -> Storage
  Phone - mandatory -> Memory
  Phone - optional -> GPS
  Phone - mandatory -> Screen
  Screen - alternative -> HD
  Screen - alternative -> OLED

  constraint Storage >= 16
  constraint Memory >= 2
}
```

In this example, we've defined five variables, `Storage`, `Memory`, `GPS`, `Screen`, `HD`, and `OLED`, and related them to the `Phone` model using the appropriate relationship types. The `GPS` variable is optional, while the others are mandatory. The `Screen` variable is related to two alternative variables, `HD` and `OLED`, using the `- alternative ->` relationship type. We've also defined two constraints using the constraint keyword. The first constraint specifies that the `Storage` variable must be greater than or equal to 16, while the second constraint specifies that the Memory variable must be greater than or equal to 2. This model defines a smartphone with a minimum of 16 GB of storage and 2 GB of memory, and provides optional GPS functionality and two alternative screen options, `HD` and `OLED`.

### Defining relationships
Relationships are used to define how different variables in a model relate to each other. The relationship statement syntax uses the form 
```archer
ID1 - REL_TYPE -> ID2
```
where `ID1` and `ID2` are the IDs of the variables being related, and `REL_TYPE` is the type of relationship being defined. There are 2 categories of relationships: structural and logical. Structural relationships are used to define the structure of a model, while logical relationships are used to define the logic of a model. 

#### Structural relationships

| Type | Description |
| --- | --- |
| mandatory | This relationship type indicates that a variable is required in a model. If a variable is mandatory, it must be present if its parent is present. |
| optional | This relationship type indicates that a variable is not required, but may be included if desired. |
| alternative | This relationship type indicates that a variable can be substituted by another variable. If one alternative variable is chosen, the others become invalid. |
| or | This relationship type indicates that at least one of a set of variables must be included in a model. |

#### Logical relationships

| Type | Description |
| --- | --- |
| excludes | This relationship type indicates that two variables cannot be included in a model at the same time. |
| requires | This relationship type indicates that one variable requires another variable to be included in a model. |
| filters | This relationship type indicates that one variable is used to filter or limit the options available for another variable. |
| suggests | This relationship type indicates that one variable suggests another variable as a potential addition to a model. |
| removes | This relationship type indicates that one variable removes another variable as a potential addition to a model. |

### Defining variable value bounds
Archer modeling language supports variable value bounds, which allow you to specify the minimum and maximum values that a variable can take. To specify a variable's bound you can use the following syntax: `lower_bound ID1 = <EXPR>`. Replace `ID1` with the ID of the variable you want to set the lower bound for, and `<EXPR>` with the expression that defines the lower bound. 

The expression can include constants, variables, and arithmetic operations. For example, 
```archer
lower_bound ID1 = 1 + 3 * ID2.Value
```
sets the lower bound of variable ID1 to 1 plus three times the value of variable ID2. 

Similarly, you can define the upper bound of variable `ID1` you can use:
```archer
lower_bound ID1 = ID2.Value * 3
```

### Defining variable conditions
Archer modeling language supports variable conditions, which allow you to specify the conditions under which a variable can be included in a model. To specify a variable's condition you can use the following syntax: `condition ID1 = <EXPR>`. Replace `ID1` with the ID of the variable you want to set the condition for, and `<EXPR>` with the expression that defines the condition.

The expression can include constants, variables, and arithmetic operations. For example, 
```archer
condition ID1 = ID2.Value > 3
```
will only allow variable `ID1` to be included in a model if the value of variable `ID2` is greater than 3. If the condition is not met, the variable will be removed from the model.

### Defining constraints
Archer modeling language supports constraints, which allow you to specify the conditions that must be met by a model. To specify a constraint you can use the following syntax: `constraint <EXPR>`. Replace `<EXPR>` with the expression that defines the constraint.

The expression can include constants, variables, and arithmetic operations. For example, 
```archer
constraint A.Value + B.Value > C.Value
```
will ensure that the sum of the values of variables `A` and `B` is greater than the value of variable `C`.

## Expressions
Archer modeling language supports a wide range of expressions, including arithmetic, logical, and comparison operations. Expressions can be used to define variable bounds, variable conditions, and constraints.

### Arithmetic expressions
Archer modeling language supports arithmetic expressions, which allow you to perform arithmetic operations on variables and constants. The following table lists the supported arithmetic operations:

| Operation | Description |
| --- | --- |
| `+` | Addition |
| `-` | Subtraction |
| `*` | Multiplication |
| `/` | Division |

### Comparison expressions
Archer modeling language supports comparison expressions, which allow you to perform comparison operations on variables and constants. The following table lists the supported comparison operations:

| Operation | Description |
| --- | --- |
| `==` \| `=` | Equal to |
| `<` | Less than |
| `<=` | Less than or equal to |
| `>` | Greater than |
| `>=` | Greater than or equal to |

### Logical expressions
Archer modeling language supports logical expressions, which allow you to perform logical operations on variables and constants. The following table lists the supported logical operations:

| Operation | Description |
| --- | --- |
| `&&` \| `and` | Logical AND |
| \|\| \| `or` | Logical OR |

### Function expressions
Archer modeling language supports function expressions, which allow you to perform operations on variables and constants. The following table lists the supported functions:

| Function | Description |
| --- | --- |
| `pow` | Returns the value of the first argument raised to the power of the second argument. |
| `sqrt` | Returns the square root of the value of the argument. |
| `floor` | Returns the largest integer less than or equal to the value of the argument. |
| `abs` | Returns the absolute value of the value of the argument. |
| `min` | Returns the minimum value of the arguments. |
| `max` | Returns the maximum value of the arguments. |
| `sum` | Returns the sum of the arguments. |
| `iff` \| `if` \| `ite` | Returns the second argument if the first argument is true, otherwise returns the third argument. |
| `distinct` \| `alldiff` | Returns true if all arguments are distinct, otherwise returns false. |


## Integrating with Python
Archer allows direct integration with any Python script. For more information see [Python Integration with Archer](/docs/archer/python).

## Common Mistakes

1. **Incorrect relationship syntax**: Relationships between variables are defined using arrows (`->`). Make sure the arrow points from the parent variable to the child variable, like `ParentVariable - relationship -> ChildVariable`.
2. **Ignoring value bounds**: When defining variables that have a certain range or limit, don't forget to define the lower and upper bounds. These bounds can prevent models from having impractical or impossible configurations.
3. **Misusing logical relationships**: Be careful when using logical relationships like `excludes`, `requires`, etc. Using them incorrectly can lead to constraints that are contradictory or don't make sense in the context of the model.

Remember, practicing and reviewing your models can help avoid these common mistakes. Always double-check your models for these errors before finalizing them.
