---
slug: tutorial - using the API to add master data and configuration models.
title: Tutorial - Using the API to add master data and configuration models.
author: Anco Postma
author_title: Tech lead @ Elfsquad
author_url: https://github.com/AJJPostma
author_image_url: https://avatars.githubusercontent.com/u/15011154?v=4
tags: [automation, model, editor]
---

This guide will show you how to create new master data in Elfsquad (for example: from ERP), and use it to create configuration models using only the API.
Ofcourse all data created here can be viewed, changed and deleted through both the API and the interface (EMS).
For this purpose the elfsquad data api will be used. For more information, refer to the provided documentation. https://docs.elfsquad.io/docs/apis/data-api

## 1. Creating master data: features

Before you can start building your model, you will first need the building blocks of Elfsquad: features.
In order to continue it is highly recommended to read our basic documentation about features. https://support.elfsquad.io/hc/en-us/articles/360035473554-What-are-Features.
For some more information: https://support.elfsquad.io/hc/en-us/articles/5266441178130-Create-or-update-Features-via-Data-API.

The data API offers two separate endpoints for creating new features: one for adding a single feature and another for adding multiple features.
We strongly advice using the latter over sending multiple requests to the single feature endpoint.
To create multiple features, the following request must be sent:

    POST: https://api.elfsquad.io/data/1/Features/Default.BulkInsert

The body should have the following format:

```json
{
  "entities": [
    {
      "id": "32915340-0924-409b-a938-f7024b3d883c",
      "name": "Product 1",
      "articleCode": "AB1",
      "type": "Feature",
      "salesPrice": 75,
      "minValue": 0,
      "maxValue": 0,
      "stepValue": 0,
      "packingUnit": 0,
      "reference": "ERP-REF-01",
      "customField1": "string",
      "customField2": "string",
      "customField3": "string",
      "customField4": "string",
      "customField5": "string"
    },
    {
      "id": "32915340-0924-409b-a938-f7024b3d883d",
      "name": "Product 2",
      "articleCode": "AB2",
      "type": "Feature",
      "salesPrice": 100,
      "minValue": 0,
      "maxValue": 0,
      "stepValue": 0,
      "packingUnit": 0,
      "reference": "ERP-REF-02",
      "customField1": "string",
      "customField2": "string",
      "customField3": "string",
      "customField4": "string",
      "customField5": "string"
    }
  ]
}
```

Specifying ids in this example is crucial for the next step. While Elfsquad can generate them if omitted, knowing the ids beforehand avoids having to fetch them later on.

Fore more information about the request and response bodies, refer to the provided documentation.

Single feature: https://docs.elfsquad.io/docs/spec/data/features-feature-create-feature

Multiple features: https://docs.elfsquad.io/docs/spec/data/features-bulk-insert

## 2. Enriching master data: feature texts

In order to provide the eventual users with some descriptive information about the features, some feature texts can be created. Both HTML and plain text values are supported. More info about feature texts can be found here: https://support.elfsquad.io/hc/en-us/articles/360018554940-Feature-Texts.

Just as with features, the data API offers two seperate endpoints for creating new feature texts: one for adding a single feature text and one for adding multiple feature texts.
To create multiple feature texts, the following request must be sent:

    POST: https://api.elfsquad.io/data/1/FeatureTexts/Default.BulkInsert

The body should have the following format:

```json
{
  "entities": [
    {
      "value": "Plain text example",
      "languageIso": "en",
      "type": "Description",
      "featureId": "32915340-0924-409b-a938-f7024b3d883c",
      "reference": "string",
      "customField1": "string",
      "customField2": "string",
      "customField3": "string",
      "customField4": "string",
      "customField5": "string"
    },
    {
      "value": "<p>Html text example</p>",
      "languageIso": "en",
      "type": "ExtendedDescription",
      "featureId": "32915340-0924-409b-a938-f7024b3d883c",
      "reference": "string",
      "customField1": "string",
      "customField2": "string",
      "customField3": "string",
      "customField4": "string",
      "customField5": "string"
    }
  ]
}
```

Note that the featureId property should be equal to the id of the created feature(s) in the previous step.

Fore more information about the request and response bodies, refer to the provided documentation.

Single feature text: https://docs.elfsquad.io/docs/spec/data/feature-texts-feature-text-create-feature-text

Multiple feature texts: https://docs.elfsquad.io/docs/spec/data/feature-texts-bulk-insert

## 3. Expanding master data: feature properties

### 3.1. Feature properties

Next you will expand your master data with product specifications. In Elfsquad we call these: feature properties. In order to continue it is highly recommended to read our basic documentation about feature properties. https://support.elfsquad.io/hc/en-us/articles/360033531234-What-are-Feature-Properties

For a more detailed aproach for this step: https://support.elfsquad.io/hc/en-us/articles/6244044992668-Feature-properties-via-the-API.

First you have to create the diffrent kind of feature properties that your features will have. Just as with the other entities, the data API offers two seperate endpoints for creating new feature properties: one for adding a single feature property and one for adding multiple feature properties.
To create multiple feature properties, the following request must be sent:

    POST: https://api.elfsquad.io/data/1/FeatureProperties/Default.BulkInsert

The body should have the following format:

```json
{
  "entities": [
    {
      "name": "Width",
      "type": "Input",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "reference": "ERP-PROP-REF-01",
      "customField1": "string",
      "customField2": "string",
      "customField3": "string",
      "customField4": "string",
      "customField5": "string"
    },
    {
      "name": "Color",
      "type": "Text",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f09",
      "reference": "ERP-PROP-REF-02",
      "customField1": "string",
      "customField2": "string",
      "customField3": "string",
      "customField4": "string",
      "customField5": "string"
    }
  ]
}
```

Specifying ids in this example is once again important for the next step.

Fore more information about the request and response bodies, refer to the provided documentation.

Single feature property: https://docs.elfsquad.io/docs/spec/data/feature-properties-feature-property-create-feature-property

Multiple feature properties: https://docs.elfsquad.io/docs/spec/data/feature-properties-bulk-insert

### 3.2. Feature has feature properties

Next you have to assign your newly created properties to the features created in step 1.
To do these you have to create a linking entity. This entity is called FeatureHasFeatureProperty.
Just as with the other entities, the data API offers two seperate endpoints for creating new feature has feature properties: one for adding a single feature has feature property and one for adding multiple feature has feature properties.
To create multiple feature has feature properties, the following request must be sent:

    POST: https://api.elfsquad.io/data/1/FeatureHasFeatureProperties/Default.BulkInsert

The body should have the following format:

```json
{
  "entities": [
    {
      "featureId": "32915340-0924-409b-a938-f7024b3d883c",
      "featurePropertyId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "value": 150,
      "reference": "ERP-PROP-REF-01",
      "customField1": "string",
      "customField2": "string",
      "customField3": "string",
      "customField4": "string",
      "customField5": "string"
    },
    {
      "featureId": "32915340-0924-409b-a938-f7024b3d883c",
      "featurePropertyId": "497f6eca-6276-4993-bfeb-53cbbbba6f09",
      "textValue": "red",
      "reference": "ERP-PROP-REF-02",
      "customField1": "string",
      "customField2": "string",
      "customField3": "string",
      "customField4": "string",
      "customField5": "string"
    }
  ]
}
```

By sending the payload above we have assigned our feature created in step 1 a width of 150 and a color of "red".

Fore more information about the request and response bodies, refer to the provided documentation.

Single feature has feature property: https://docs.elfsquad.io/docs/spec/data/feature-has-feature-properties-feature-has-feature-property-create-feature-has-feature-property

Multiple feature has feature properties: https://docs.elfsquad.io/docs/spec/data/feature-has-feature-properties-bulk-insert

## 4. Building the model: configuration model

Now that you have succesfully implemented your master data, you can start building your model. In Elfsquad this model is called a configuration model (or feature model). More info: https://support.elfsquad.io/hc/en-us/articles/9579633505308-What-is-a-Configuration-Models. A configuration model is based on a feature. So if you want to create a model based on the feature you created in step 1 (Product 1), you would have to sent the following request:

    POST: https://api.elfsquad.io/data/1/FeatureModels

With the following JSON body format:

```json
{
  "rootFeatureId": "32915340-0924-409b-a938-f7024b3d883c",
  "hideInShowroom": true,
  "hideInOrderEntry": true,
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "reference": "string",
  "customField1": "string",
  "customField2": "string",
  "customField3": "string",
  "customField4": "string",
  "customField5": "string"
}
```

Fore more information about the request and response bodies, refer to the provided documentation. https://docs.elfsquad.io/docs/spec/data/feature-models-feature-model-create-feature-model

## 5. Building the model: nodes

Now that you have a configuration model, you will have to link your features to your model. In order to do this you will have to create (feature model) nodes. These nodes have quite a few optional properties, but the only ones important for now are: id, featureModelId and featureId.
To create new nodes, send the following request:

    POST: https://api.elfsquad.io/data/1/FeatureModelNodes/Default.BulkInsert

With the following JSON body format:

```json
{
  "entities": [
    {
      "featureModelId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "featureId": "32915340-0924-409b-a938-f7024b3d883d",
      "hideInQuotation": false,
      "hideInConfigurator": false,
      "hideInOrderEntry": false,
      "hideInOverview": false,
      "id": "237f6eca-6276-4993-bfeb-53cbbbba6f08",
      "reference": "string",
      "customField1": "string",
      "customField2": "string",
      "customField3": "string",
      "customField4": "string",
      "customField5": "string"
    }
  ]
}
```

Fore more information about the request and response bodies, refer to the provided documentation. https://docs.elfsquad.io/docs/spec/data/feature-model-nodes-bulk-insert

## 6. Building the model: relationships

Now that your features are linked to your model, it is time for the final step: adding structure.
In Elfsquad we use (feature model) relationships to do this. More information about how they work here: https://support.elfsquad.io/hc/en-us/articles/360035613073-Parent-Child-Relations.

Relationships also have quite a few properties, but for now we'll focus on four of them: featureModelId, fromNodeId, toNodeId, type. All of these are mandatory.
To create new relationships, send the following request:

    POST: https://api.elfsquad.io/data/1/FeatureModelRelationships/Default.BulkInsert

With the following JSON body format:

```json
{
  "entities": [
    {
      "featureModelId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "fromNodeId": "237f6eca-6276-4993-bfeb-53cbbbba6f08",
      "toNodeId": "237f6eca-6276-4993-bfeb-53cbbbba6f09",
      "order": 1,
      "default": false,
      "type": "Optional",
      "reference": "string",
      "customField1": "string",
      "customField2": "string",
      "customField3": "string",
      "customField4": "string",
      "customField5": "string"
    }
  ]
}
```
Property explanation:
- **featureModelId**: The id of configuration model this relationship belongs to.
- **fromNodeId**: The id of the node that should be the parent in this relationship.
- **toNodeId**: The id of the node that should be the child in this relationship.
- **type**: The type of the relationship:
    - **Optional**: The child node can be turned on or off.
    - **Mandatory**: The child node is always turned on.
    - **Alternative**: For the parent node, only one alternative child node can be selected at a time.

Fore more information about the request and response bodies, refer to the provided documentation. https://docs.elfsquad.io/docs/spec/data/feature-model-nodes-bulk-insert

After completing all the steps above, you have succesfully created your master data and model structure.
Please refer to our internal documentation if you want to add more logic to your model using formulas, conditions and other constraints: https://support.elfsquad.io/hc/en-us/articles/7528093533212-Create-cross-tree-relations-via-data-API.
