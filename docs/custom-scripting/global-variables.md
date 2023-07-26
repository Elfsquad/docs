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

## ui.openDialog
The *ui.openDialog* function allows you to open a dialog and embed one or more scripts to that dialog. These scripts can be used to add your own custom behavior and content to the dialog.

### Example
``` js
ui.openDialog({
    title: 'Dialog Title',
    width: '80vw',
    height: '80vh',
    scripts: ['script 1'],
    parameters: parameters
});
```
