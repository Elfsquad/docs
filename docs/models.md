# Models

This page shows an overview of the available models.

## Category

| Name          | Type             | Description                                                  |
| ------------- | ---------------- | ------------------------------------------------------------ |
| Id            | `Guid`           | Identifier of the category.                                  |
| Texts         | `CategoryText[]` | Translated titles of the category.                           |
| Subcategories | `Category[]`     | Array of subcategories.                                      |
| ParentId      | `Guid`           | Identifier of the parent category.                           |
| Order         | `integer`        | Order in which the category should be displayed in the different product selection pages. |

### CategoryText

| Name        | Type     | Description                                       |
| ----------- | -------- | ------------------------------------------------- |
| Id          | `Guid`   | Identifier of the category text.                  |
| Value       | `string` | Value of the text.                                |
| LanguageIso | `string` | Two letter ISO (639-1) code of the text language. |
| CategoryId  | `Guid`   | Identifier of the category.                       |



## CrmAccount


## Feature

Every configuration model is based on features. Features are used to capture rich product information (texts, images, pricing). Once created, features can be categorized and implemented in product structures.

|Name|Type|Description|
|--|--|--|
| Id | `Guid` | Identifier of the feature. |
| Name | `string` | Name of the feature. |
| ArticleCode | `string` | For reference purposes; e.g. the ERP item code. |
| Type | `integer` | The type is `0` by default, and `2` if the feature should be displayed as a color picker in the configurator. |
| SalesPrice | `decimal` | The sales price of the feature. |
| MinValue | `decimal` | Minimal amount. Example: minimal width of a bed has to be 110 cm. A user cannot enter quantities below this minimal value. |
| MaxValue | `decimal` | Maximum amount. Example: maximum width of a bed is 210 cm. A user cannot enter quantities higher than this maximum value. |
| StepValue | `decimal` | The step amount that is taken into consideration (between min/ max values). Example: with a step value of 10 cm a user cannot select a width of 115cm. This will be rounded off to 120cm. |
| PackingUnit | `decimal` | The amount that has to be taken into account when rounding up on the material list. Example: several lines of the same nuts are generated from the configurator to the quotation. This function sums-up all these lines and rounds it up to the packing unit quantity. |
| CategoryId | `Guid` | Identifier for the [category](#category) to which this feature is attached. |
| SubcategoryIds | `Guid[]` | List of identifiers for sub-categories. |
| Tags | `string[]` | List of tags. A tag can be used to give a feature a certain label. |
| MarginPct | `decimal` | |
| Properties | `FeatureHasFeatureProperty[]` | |
| Texts | `FeatureText[]` ||
| CardImageUrl | `string` | URL for the image of the feature. This image is displayed in the cards. |
| OrganizationSellsFeature | `List<OrganizationSellsFeature>` | |
| VATId | `Guid` | [VAT](#vat) that is used as default for this feature. |
| UnitOfMeasurementId | `Guid` | [Unit of measurement](#unitofmeasurement) for this feature. |

### FeatureText

### FeatureProperty

|a|b|
|--|--|
|z|z|

#### AssociatedFeatureProperty

Hello

#### FeatureHasFeatureProperty

world!

## VAT

## Quotation

## UnitOfMeasurement

