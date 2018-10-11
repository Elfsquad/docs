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

Quotation lines...

### QuotationFile

Attachment for a quotation.

## UnitOfMeasurement
|Name|Type|Description|
 |--|--|--|
 |Id|`Guid`|Identifier for the unit of measurement. |
 |Code | `string` | The code for the unit of measurement. Example: `kg`. |
|Description| `string`| The description for the unit of measurement. Example: `Kilogram`. |