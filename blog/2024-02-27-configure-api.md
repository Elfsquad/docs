---
slug: tutorial - using the API to create a configuration and add it to a quotation.
title: Tutorial - Using the API to create a configuration and add it to a quotation.
author: Anco Postma
author_title: Tech lead @ Elfsquad
author_url: https://github.com/AJJPostma
author_image_url: https://avatars.githubusercontent.com/u/15011154?v=4
tags: [automation, configurator]
---



This guide explains how to start a new configuration, and update it, using the configurator API.
It will also explain how this configuration can be added to a (new) quotation.

## 1. Retrieve your configuration models

To ensure successful configuration, start by identifying the model you want to configure. You can retrieve a list of all available configuration models by sending the following request:

    GET: https://api.elfsquad.io/configurator/3/configurator/configurationmodels

The response will look something like the following:

```json
{
  "categories": [],
  "features": [
    {
      "featureModelId": "32915340-0924-409b-a938-f7024b3d883a",
      "featureId": "dbe93c07-198c-449f-9f22-91c529a4d060",
      "articleCode": "abc",
      "name": "Product 1"
    }
  ],
  "language": "en"
}
```

The featureModelId property, which uniquely identifies the configuration model, is essential for the next step. For more information about the response object, refer to the provided api documentation. https://docs.elfsquad.io/docs/spec/configurator/get-configuration-models.

## 2. Start a new configuration

Now that we know the id of our model, we can start a new configuration. This can be achieved by sending the following request:

    POST: https://api.elfsquad.io/configurator/3/configurator/new/{featureModelId}

The featureModelId in this request is the same as the one retrieved in the previous step. Note: the id can also be found in the EMS.
It is also possible to send a body containing startup requirements when starting a new configuration. This body must have the following format:

```json
{
  "startupRequirements": [
    {
      "nodeId": "123e4567-e89b-12d3-a456-426614174000",
      "type": 0,
      "value": 0
    },
    {
      "nodeId": "123e4567-e89b-12d3-a456-426614174001",
      "type": 1,
      "value": 10
    },
    {
      "nodeId": "123e4567-e89b-12d3-a456-426614174002",
      "type": 2,
      "value": "Some text"
    },
     {
      "nodeId": "123e4567-e89b-12d3-a456-426614174003",
      "type": 3,
      "value": 5
    }
  ]
}
```

Property explanation:

- **nodeId:** The id of the node you want to change.
- **type & value:** We currently support 3 different types:
  1.  **Selection**(0): When using a selection type requirement, sending a value of 0 will turn the specified node off. Any other value will turn the node on and change the value to the provided value. Only numeric values are supported.
  2.  **Value**(1): When using a value type requirement, the specified node will turn on (if not on already) and will have it's value changed to the provided value. Even when the value is 0. Only numeric values are supported.
  3.  **Text**(2): When using a text type requirement, the specified node will have it's textValue changed to the provided value. Only string values are supported.
  4. **Cardinality**(3): When using a cardinality requirement, the specified linkedmodel node will have the specified amount off instances.

The response body will contain the id of the newly created configuration. This id is needed for the other steps.
For more information about the request and response bodies, refer to the provided api documentation. https://docs.elfsquad.io/docs/spec/configurator/start-configuration-session.

## 3. Updating the configuration

For further configuration changes, you can also utilize the configurator API. However, if you possess all required modifications beforehand, consider using the startup requirements covered earlier for optimal performance.
Updating numeric values can be done by sending the following request:

    PUT: https://api.elfsquad.io/configurator/3/configurator/{configurationId}/multiple

Note that configurationId is the id of the configuration created in the previous step. The request should contain a JSON body with an array of requirements that have the following format:

```json
[
  {
    "featureModelNodeId": "ad1e70a3-199a-4363-9b12-40472c568135",
    "value": 0,
    "isSelection": true
  },
  {
    "featureModelNodeId": "ad1e70a3-199a-4363-9b12-40472c568136",
    "value": 5,
    "isSelection": false
  }
]
```

Property explanation:

- **featureModelNodeId**: The id of the node that has to be updated.
- **value**: The value that has to be assigned to the specified node. Only numeric values are supported.
- **isSelection**: When set to true, the requirement will behave like a selection type requirement from the previous step. Otherwise it will act like a value type requirement.

A slightly different request has to be sent when updating text values:

    PUT: https://api.elfsquad.io/configurator/3/configurator/{configurationId}/text/multiple

The JSON body is also slightly different:

```json
[
  {
    "featureModelNodeId": "ad1e70a3-199a-4363-9b12-40472c568135",
    "textValue": ""
  },
  {
    "featureModelNodeId": "ad1e70a3-199a-4363-9b12-40472c568136",
    "textValue": "Example Text"
  }
]
```

Property explanation:

- **featureModelNodeId**: The id of the node that has to be updated.
- **textValue**: The text value that has to be assigned to the specified node. Only string values are supported.

For more information regarding the request and response bodies, refer to the provided api documentation. https://docs.elfsquad.io/docs/spec/configurator/update-requirement.

## 4. Creating a new quotation

Before you can add the properly adjusted configuration to a quotation, you have to create a new quotation. This can be done using our quotation api. The api will automatically assign the correct quotation status and quotation number. This can be done by sending the following request:

    POST: https://api.elfsquad.io/quotation/1/quotations

This request requires a JSON body with optional properties.
The response body will contain the id of the newly created quotation.
For more information about the request and response bodies, refer to the provided api documentation. https://docs.elfsquad.io/apis/quotation

## 5. Adding the configuration to the quotation

In order to complete this step you need the id of the configuration that was created in step 2. You will also need the id of the quotation that was created in the previous step.
To add the configuration to the quotation the following request must be sent:

    PUT: https://api.elfsquad.io/configurator/3/configurator/addtoquotation

For this request a JSON body with the following format is required:

```json
{
  "quotationId": "1ceb365d-7c0e-435f-8012-dd887707710b",
  "configurationIds": ["747fe28d-fd35-4938-aac2-7a102b20196e"]
}
```

The value of quotationId should be replaced by the id of the quotation from the previous step.
The value of configurationIds should be an array containing the id of the configuration from step 2. Please note that adding multiple (unique) configurations in one request is supported.
After the request completes, the configuration will be added to the quotation. The new quotation is immediately visable in the EMS.
Want to change the status of your newly created quotation? Please refer to our documentation: https://support.elfsquad.io/hc/en-us/articles/9435941123484-Quotation-functions-in-API.
