---
slug: tutorial - custom configurator
title: Tutorial - Custom configurator
author: Johannes Heesterman
author_title: Lead Software Engineer @ Elfsquad
author_url: https://github.com/johannesheesterman
author_image_url: https://avatars.githubusercontent.com/u/7443666?v=4
tags: [configurator]
---

## Quick overview

In this tutorial I will provide a quick overview of the endpoints that
can be used to implement your own customer-facing configurator.

### Step 1. Retrieve a list of configuration models.

The first thing we want to do is provide the user with a selection of
available configuration models. In order to achieve this we can use the
[configuration models endpoint](https://docs.elfsquad.io/apis/configurator#tag/Configurator/paths/~1configurator~1{version}~1configurator~1configurationmodels/get)

`GET /configurator/1/configurator/configurationmodels`

### Step 2. Start a new configuration

When a user has selected a configuration model to be configured, we can
use the `featureModelId` property to start a new configuration session.
We use the [start configuration endpoint](https://docs.elfsquad.io/apis/configurator#tag/Configurator/paths/~1configurator~1{version}~1configurator~1new~1{featureModelName}/get) 
for this.

`GET /configurator/1/configurator/new/{featureModelId}`

Result (*Some data has been emitted for clarity.*):

```json
{
  "id": "9c83b007-7e61-4b4c-9920-f125606844d5",
  "currencyIso": "eur",
  "currency": {
    "iso": "eur",
    "name": "Euro",
    "symbol": "\u20ac",
    "decimalDigits": 2,
    "rounding": 0,
    "namePlural": "Euros",
    "isDefault": false
  },
  "languageIso": "nl",
  "countryIso": "nl",
  "featureModelId": "b8230fc6-454c-4190-a33a-08d5640714ca",
  "featureModel": ..., 
  "values": {
    "7bcf2363-4300-4a6a-faa9-08d5640714d2": 1,
    "580b4519-1a7a-46f9-fa7d-08d5640714d2": 4,
    "8c81fabc-eaed-41e2-8ec2-08d5d10145ad": 4,
    "e22f606d-3e4e-462e-8ec3-08d5d10145ad": 72,
    ...
  },
  "conflicts": null,
  "basePrice": 42750,
  "basePriceLabel": "\u20ac 42.750,00",
  "basePriceIncVAT": 42750,
  "basePriceIncVATLabel": "\u20ac 42.750,00",
  "basePriceExVAT": 42750,
  "basePriceExVATLabel": "\u20ac 42.750,00",
  "additionalPrice": 10730,
  "additionalPriceLabel": "\u20ac 10.730,00",
  "additionalPriceIncVAT": 10730,
  "additionalPriceIncVATLabel": "\u20ac 10.730,00",
  "additionalPriceExVAT": 10730,
  "additionalPriceExVATLabel": "\u20ac 10.730,00",
  "totalPrice": 53480,
  "totalPriceLabel": "\u20ac 53.480,00",
  "totalPriceExVAT": 53480,
  "totalPriceExVATLabel": "\u20ac 53.480,00",
  "totalPriceIncVAT": 53480,
  "totalPriceIncVATLabel": "\u20ac 53.480,00",
  "leasePrices": null,
  "leasePricesLabels": null
}
```

Overview of important configuration properties:

| Name         | Type     | Description                                                  |
| ------------ | -------- | ------------------------------------------------------------ |
| Id           | `Guid`   | Identifier of the configuration session. This id is used for updating configuration values and requesting a quotation. |
| FeatureModel | `object` | Object that represents the entire configuration model. This object should be used to build the configurator UI. |
| Values       | `object` | Object that contains all values of the configuration. The key represents the identifier of a feature model node. The value represents the selected value for that particular node. |
| Conflicts    | `object` | If a conflict occurs during the configuration process this object will be filled with conflicting nodes and solution options. |

### Step 3. Update value

In order to update a value for a particular option we use the [update
requirement endpoint](https://docs.elfsquad.io/apis/configurator/#tag/Configurator/paths/~1configurator~1{version}~1configurator~1{configurationId}/put)

`PUT /configurator/1/configurator/{configurationId}?ignoreConflicts=true`

* The `ignoreConflicts` parameter is optional. When this parameter is
  set to true the configurator will automatically resolve any conflicts
  that might occur.

Request body:

`{featureModelNodeId: "949af91c-8a0b-4540-fa87-08d5640714d2", value: 1}`

| Name               | Type     | Description                                                  |
| ------------------ | -------- | ------------------------------------------------------------ |
| featureModelNodeId | `Guid`   | Identifier of the feature model node.                        |
| value              | `number` | User-selected value for the option. 0 for false, 1 for true, or any other number when the option is provided as an input field. |

