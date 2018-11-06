# Models

This page shows an overview of the available models. This list doesn't contain all the possible properties, but only the properties that are relevant. 

## Application Events

There are a number of application event types available through the API. See [application event tutorials](api/tutorial/applicationevents/) for more info.

| Name                     | Type       | Description                                                  |
| ------------------------ | ---------- | ------------------------------------------------------------ |
| Id                       | `Guid`     | Identifier of the application event.                         |
| IntegrationApplicationId | `Guid`     | Identifier of the integration application that should handle this application event. |
| Handled                  | `bool`     | Indicate whether this application event has been handled by the integration application defined by *IntegrationApplicationId*. |
| HandledDate              | `DateTime` | DateTime at which the application event was handled by the integration application. |
| Success                  | `bool`     | Defines whether the application event was handled successfully by the integration application. |
| ReasonPhrase             | `string`   | Explanation of why the application event has the current success status. |

Besides the common application event properties, each type of application event has additional information available to it:

### QuotationRequested

| Name        | Type   | Description                            |
| ----------- | ------ | -------------------------------------- |
| QuotationId | `Guid` | Identifier of the requested quotation. |

### QuotationToPending

| Name        | Type   | Description                                                 |
| ----------- | ------ | ----------------------------------------------------------- |
| QuotationId | `Guid` | Identifier of the quotation who's status is set to pending. |

### QuotationToAccepted

| Name        | Type   | Description                                                  |
| ----------- | ------ | ------------------------------------------------------------ |
| QuotationId | `Guid` | Identifier of the quotation who's status is set to accepted. |



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

| Name           | Type                 | Description                                                  |
| -------------- | -------------------- | ------------------------------------------------------------ |
| Id             | `Guid`               | Identifier of the CRM account.                               |
| Salutation     | `string`             | The salutation e.g. 'Dear sir/madam,'                        |
| FullName       | `string` (Read-only) | Full name of the account.                                    |
| FirstName      | `string`             |                                                              |
| LastNamePrefix | `string`             | The prefix of the lastName e.g. [FirstName] van der [LastName] |
| LastName       | `string`             |                                                              |
| CompanyName    | `string`             | Name of the company.                                         |
| Email          | `string`             |                                                              |
| Phone1         | `string`             | Primary phone number.                                        |
| Phone2         | `string`             | Secondary phone number.                                      |
| StreetName     | `string`             |                                                              |
| HouseNumber    | `string`             |                                                              |
| PostalCode     | `string`             |                                                              |
| City           | `string`             |                                                              |
| CountryIso     | `string`             | Two-letter ISO 3166-1 code of the country, e.g. 'NL'.        |
| CocNumber      | `string`             | Chamber of Commerce number.                                  |
| VatNumber      | `string`             |                                                              |
| Iban           | `string`             |                                                              |
| Type           | `integer`            | [Type](#relationship-type) of the CRM account.               |

### Relationship type

| Key  | Description      |
| ---- | ---------------- |
| 0    | Customer         |
| 1    | Delivery address |
| 2    | Employee         |




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
| OrganizationSellsFeature | `OrganizationSellsFeature[]` | |
| VATId | `Guid` | [VAT](#vat) that is used as default for this feature. |
| UnitOfMeasurementId | `Guid` | [Unit of measurement](#unitofmeasurement) for this feature. |

### FeatureText

| Name        | Type      | Description                                       |
| ----------- | --------- | ------------------------------------------------- |
| Id          | `Guid`    | Identifier of the feature text.                   |
| LanguageIso | `string`  | Two letter ISO (639-1) code of the text language. |
| Type        | `integer` | [Type](#feature-text-type) of the feature text.   |
| Value       | `string`  | Text value.                                       |
| FeatureId   | `Guid`    | Identifier of the feature.                        |

#### Feature text type

| Key  | Description                                                  |
| ---- | ------------------------------------------------------------ |
| 0    | **Descriptions**: If used; the description will be shown instead of ‘name’. If left blank; the feature ‘name’ will be shown in the configurator. |
| 1    | **Extended descriptions:** If used; this text will be shown under the description/name in the configurator. |
| 2    | **More info:** If used; more info can be opened in the configurator. This information is showed in a screen-wide pop-up. |
| 5    | **Quotation text:** Optionally, this info can be generated on the quotation template (PDF). |



### FeatureProperty

| Name               | Type                          | Description                                                  |
| ------------------ | ----------------------------- | ------------------------------------------------------------ |
| Id                 | `Guid`                        | Identifier of the property.                                  |
| Name               | `string`                      | Name of the property.                                        |
| Type               | `integer`                     | Type of the property                                         |
| AssociatedFeatures | `AssociatedFeatureProperty[]` | If the type of this property is set to `1` (AssociatedFeatures) this property is filled with the relationships with features that can be associated with this property. |

#### FeaturePropertyType

| Key  | Description                                                  |
| ---- | ------------------------------------------------------------ |
| 0    | **Input**: If the feature property is marked as a Input type; a decimal value can be associated with this property. |
| 1    | **AssociatedFeatures**: If the feature property is marked as a AssociatedFeatures type; a selection of defined features can be associated with this property. |

#### AssociatedFeatureProperty

The AssociatedFeatureProperty is a relationship between a feature property's AssociatedFeatures list and a Feature.

| Name              | Type   | Description                                             |
| ----------------- | ------ | ------------------------------------------------------- |
| Id                | `Guid` | Identifier of the associated feature property.          |
| FeaturePropertyId | `Guid` | Identifier of the [feature property](#featureproperty). |
| FeatureId         | `Guid` | Identifier of the [feature](#feature).                  |

#### FeatureHasFeatureProperty

Relationship between a feature and a feature property.

| Name                | Type      | Description                                                  |
| ------------------- | --------- | ------------------------------------------------------------ |
| Id                  | `Guid`    | Identifier of the FeatureHasFeatureProperty relationship.    |
| FeaturePropertyId   | `Guid`    | Identifier of the [feature property](#featureproperty).      |
| FeatureId           | `Guid`    | Identifier of the [feature](#feature).                       |
| Value               | `decimal` | If the type of the FeaturePropery is set to `0`(Input); this property holds the input value. |
| AssociatedFeatureId | `Guid`    | If the type of the FeatureProperty is set to `1`(AssociatedFeature); this property holds the [feature](#feature) identifier that is associated with this property. |



## Organization

| Name               | Type      | Description                                                  |
| ------------------ | --------- | ------------------------------------------------------------ |
| Id                 | `Guid`    | Identifier of the organization.                              |
| Name               | `string`  | Name of the organization.                                    |
| SettingsId         | `Guid`    | Identifier of the settings corresponding to this organization. |
| Users              | `User[]`  | List of [users](#user) that are part of this organization.   |
| DefaultDiscountPct | `decimal` | Organization's default discount percentage. Calculates the margin by decreasing the purchase price. |
| DefaultUpValuePct  | `decimal` | Organization's default up value percentage. Calculates the margin by increasing the sales price. |



## VAT

| Name        | Type      | Description                                     |
| ----------- | --------- | ----------------------------------------------- |
| Id          | `Guid`    | Identifier of the VAT.                          |
| Name        | `string`  | Describes the VAT.                              |
| Pct         | `decimal` | Percentage value of the VAT e.g. 21.            |
| IncludesVAT | `boolean` | Defines whether the price already includes VAT. |



## Quotation

|Name|Type|Description|
|--|--|--|
|Id|`Guid`|Identifier for the quotation.|
|QuotationNumber|`int`|Unique quotation number that is used as a reference.|
|VersionNumber|`int`|Version number of the quotation. Default is `1`.|
|RevisionOfId|`Guid`|Identifier of the quotation on which this revision is based.|
|Status|`integer`|The [status](#quotationstatus) of the quotation.|
|IsExpired|`bool` (Read-only)| Returns `true` if the quotation is expired.|
|StatusDescription|`string` (Read-only)|Returns the status of the quotation as a text. Example: `Concept` or `Accepted`|
|Remarks|`string`|A field for remarks. Used to add notes to the quotation.|
|Subject|`string`|The subject of the quotation.|
|ExpiresDate|`DateTime`|Date when the state of the quotation is set to expired.|
|DeliveryDate|`DateTime`|Date when the quotation is delivered.|
|DebtorId|`Guid`|Identifier of the debtor, which is a [CRM account](#crmaccount).|
|SellerId|`Guid`|Identifier of the seller, which is a [CRM account](#crmaccount).|
|ShipToId|`Guid`|Identifier for the shipping address, which is a [CRM account](#crmaccount).|
|Margin|`decimal`|The margin that is used on this quotation in percentages. Example: for 10% the value is `10`.|
|Lines|`QuotationLine[]`|[Quotation lines](#quotationline) for the quotation.|
|CurrencyIso|`string`| Two letter ISO (639-1) code of the currency. |
|LanguageIso|`string`| Two letter ISO (639-1) code of the language. |
|Files|`QuotationFile[]`| List of [quotation files](#quotationfile) that are attached. |
|TotalDiscountAmt|`decimal` (Read-only)|Total amount of discount on the total price.|
|TotalDiscountPct|`decimal`|Total percentage of discount, e.g. `10` for 10%.|
|SubTotalExclPrice|`decimal` (Read-only)|Subtotal price excluding VAT.|
|SubTotalInclPrice|`decimal` (Read-only)|Subtotal including VAT.|
|TotalExclPrice|`decimal` (Read-only)|Total price excluding VAT.|
|TotalInclPrice|`decimal` (Read-only)|Total price including VAT.|
|SubTotalMargin|`decimal` (Read-only)|Subtotal margin.|
|TotalMargin|`decimal` (Read-only)|Total margin.|
|TotalMarginDiscount|`decimal` (Read-only)|Total margin discount.|
|SubTotalPurchasePrice|`decimal` (Read-only)|Subtotal purchase price.|
|WholeSaleDiscountAmt|`decimal` (Read-only)|Wholesale discount amount.|
|WholeSaleDiscountPct|`decimal` (Read-only)|Wholesale discount percentage.|

### QuotationStatus

A quotation can have the following states:

|Key|Description|
|--|--|
|0|Concept|
|1|Declined|
|2|Accepted|
|3|Expired|
|4|Revised|
|5|Pending|
|6|Order|

### QuotationLine

|Name|Type|Description|
|--|--|--|
|QuotationId|`Guid`|Identifier of the quotation to which this line belongs.|
|LineNumber|`int`|Indicates the sequence of the lines within one quotation.|
|ArticleCode|`string`|For reference purposes, e.g. an ERP item code.|
|CardImageUrl|`string`|URL to the image for the feature.|
|Description|`string` (Read-only)| Description of the feature.|
|ExtendedDescription|`string` (Read-only)| Extended description of the feature.|
|MoreInfo|`string` (Read-only) | More info of the feature. |
|QuotationText| `string` (Read-only) | Quotation text of the feature. |
|FeatureId | `Guid` | Identifier of the feature. |
|QuantityAmount| `decimal` | Quantity of the feature on this line. |
|Quantity| `string` (Read-only) | Number formatted quantity, e.g. `100.14`. |
|UnitOfMeasurement| `string` (Read-only) | Unit of measurement of the feature. |
|Hidden| `bool` | Indicates if the line is visible in EMS. |
|ParentLineId | `Guid` | Identifier of the parent line (QuotationLine). |
|GroupedRootLine| `bool` | Indicates if the quotation line is the root of a group of lines. |
|GroupId| `Guid`| Identifier of the group to which this line belongs. |
|GroupOrder| `int` | Indicates the order in which the groups are displayed. |
|AddedFromConfiguration| `bool` | Indicates that the line has been added from a configuration. |
|DiscountPct| `decimal` | Discount percentage, e.g. `10`. |
|MarginPct| `decimal` (Read-only) | Margin percentage. |
|GroupDiscountPct | `decimal` | Discount percentage on the group, e.g. `10`. |
|TotalExclPrice| `decimal` (Read-only) | Total price of the quotation line excluding VAT. |
|TotalExclPriceExclDiscount | `decimal` (Read-only) | Total price of the quotation excluding VAT and discount. |
|TotalInclPrice| `decimal` (Read-only) | Total price including VAT. |
|GroupBaseExclPrice| `decimal` (Read-only) | |
|GroupBaseInclPrice| `decimal` (Read-only) | |
|GroupAdditionalExclPrice | `decimal` (Read-only) | |
|GroupAdditionalInclPrice | `decimal` (Read-only) | |
|GroupTotalExclPrice | `decimal` (Read-only) | |
|GroupTotalInclPrice | `decimal` (Read-only) | |
|DefaultPurchasePriceDiscountPct | `decimal` (Read-only) | |
|PurchasePrice | `decimal` (Read-only) | |
|UnitPrice | `decimal` | Unit price of the feature. |
|TotalExclMargin | `decimal` (Read-only) | |
|TotalInclMargin | `decimal` (Read-only) | |
|GroupPurchasePrice | `decimal` (Read-only) | |
|GroupMargin | `decimal` (Read-only) | |

### QuotationFile

|Name|Type|Description|
|--|--|--|
|QuotationId|`Guid`|Identifier of the quotation.|
|FileId|`Guid`|Identifier of the [FileEntity](#fileentity).|

### FileEntity

|Name|Type|Description|
|--|--|--|
|Id|`Guid`|Identifier of the file entity. |
|Name|`string`|Name of the file.|
|Url|`string`|URL of the file.|

## UnitOfMeasurement
|Name|Type|Description|
|--|--|--|
|Id|`Guid`|Identifier for the unit of measurement. |
|Code | `string` | The code for the unit of measurement. Example: `kg`. |
|Description| `string`| The description for the unit of measurement. Example: `Kilogram`. |

Missing a property? Feel free to contact us at `support@elfskot.com`.