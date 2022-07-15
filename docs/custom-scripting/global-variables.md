---
title: Global variables in custom scripting
sidebar_position: 2
sidebar_label: Global variables
slug: global-variables
---

Overview of all the available global variables and functions that can be used in custom scripts

## window.parameters
The value of the object differs based on the context where the script is executed. 

For example on the quotation edit page it will contain the identifier of the current quotation: `{ quotationId: "f8c0c745-b234-4108-9823-48cca6c879d2" }`.  On the step editor page it will contain the identifier of the currently selected step: `{ stepId: "4025aee2-7595-4a4b-92dd-08d8e6651da1" }`.

### Example
``` js
console.log('Parameters', parameters); 
```

## api.fetch
The *api.fetch* functions is a implementation of the [standard fetch api](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) that automatically adds a authorization token for the current user.

### Example
An asynchronous function definition that retrieves the quotation object on the quotation edit page.
``` js
async function fetchQuotation(){
    return (await api.fetch(`data/1/quotations/${parameters.quotationId}`)).body;
}
```

## ui.openFormDialog
The *ui.openFormDialog* allows you to open a dialog with a form. The form definition is implemented using JSON forms. You can refer to their documentation for implementation details at [https://jsonforms.io/docs](https://jsonforms.io/docs).

### Example
``` js
ui.openFormDialog({
    width: '500px',
    height: '500px',
    title: 'Enter your name',
    schema: {
        properties: {
            name: {
            type: "string"
            }
        }
    },
    uiSchema: {
        type: "VerticalLayout",
        elements: [
            {
                type: "Control",
                scope: "#/properties/name"
            }
        ]
    },
    data: { name: "" },
    confirmText: 'Submit',
    cancelText: 'Cancel'
})
.then((result) => {
    const name = result.name;
    console.log('Entered name', name);
});
```