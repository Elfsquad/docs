---
title: Getting started with custom scripts
sidebar_label: Getting Started
slug: getting-started
---

This guide introduces custom scripting, which enable you to add additional functionality to Elfsquad.


## Step 1: Create a custom script
From the *Integrations* page select *Scripts* and click the '+'-button to add a new script. In this example we name the script '*Export Excel*'.
![Step 1](/img/custom-scripting/getting-started/step-1.png)

## Step 2: Edit the script
Click the *pen* button to enter the editing mode for your newly created script.

For now, let's add a sample script, and press *Save*:
``` js
console.log('Hello, Elfsquad!');
```
![Step 2](/img/custom-scripting/getting-started/step-2.png)

## Step 3: Create a custom trigger
Now we want to execute this script on the quotation page when a custom button is clicked. To do this, we first need to create a custom trigger.

Navigate to the *Integrations* -> *Custom triggers* page and click the '+'-button.

Enter the following values, and click Save:
* Identifier: quotation.export
* Name: Export Excel
* Position: Quotation
* Button text: Export Excel

![Step 3](/img/custom-scripting/getting-started/step-3.png)

## Step 4: Add trigger to custom script
Now that we have created the custom script and a custom trigger, we can tell the custom script to activate whenever the newly created custom trigger is pressed. 

Navigate to the *Integrations* -> *Scripts* page. 

Click on the created custom script and assign the *custom.quotation.export* trigger.

![Step 4](/img/custom-scripting/getting-started/step-4.png)


## Step 5: Execute the script
We can now actually execute the script from a quotation edit page.

Navigate to a existing quotation and open the developer tools of your browser (F12).

Click the *Export to Excel* button in the top of the screen and notice how the '*Hello, Elfsquad!*' message is the displayed in your browser's console output.

![Step 5](/img/custom-scripting/getting-started/step-5.png)

## Step 6: Try out different scripts
Now that we have gone through all the steps of creating and executing a custom script, you can try out one of the sample scripts that can be found in the [examples page](examples).
