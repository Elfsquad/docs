# Models

This page shows an overview of the available models. This list doesn't contain all the possible properties, but only the properties that are relevant. 

### Application Events

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

#### QuotationRequested

| Name        | Type   | Description                            |
| ----------- | ------ | -------------------------------------- |
| QuotationId | `Guid` | Identifier of the requested quotation. |

#### QuotationToPending

| Name        | Type   | Description                                                 |
| ----------- | ------ | ----------------------------------------------------------- |
| QuotationId | `Guid` | Identifier of the quotation who's status is set to pending. |

#### QuotationToAccepted

| Name        | Type   | Description                                                  |
| ----------- | ------ | ------------------------------------------------------------ |
| QuotationId | `Guid` | Identifier of the quotation who's status is set to accepted. |

#### QuotationVerified

| Name        | Type   | Description                                         |
| ----------- | ------ | --------------------------------------------------- |
| QuotationId | `Guid` | Identifier of the quotation that has been verified. |







### Category

| Name          | Type             | Description                                                  |
| ------------- | ---------------- | ------------------------------------------------------------ |
| Id            | `Guid`           | Identifier of the category.                                  |
| Name          | `string`         | Name of the category.                                        |
| Texts         | `CategoryText[]` | Translated titles of the category.                           |
| Subcategories | `Category[]`     | Array of subcategories.                                      |
| ParentId      | `Guid`           | Identifier of the parent category.                           |
| Order         | `integer`        | Order in which the category should be displayed in the different product selection pages. |

#### CategoryText

| Name        | Type     | Description                                       |
| ----------- | -------- | ------------------------------------------------- |
| Id          | `Guid`   | Identifier of the category text.                  |
| Value       | `string` | Value of the text.                                |
| LanguageIso | `string` | Two letter ISO (639-1) code of the text language. |
| CategoryId  | `Guid`   | Identifier of the category.                       |



### Country

| Name        | Type     | Description                                           |
| ----------- | -------- | ----------------------------------------------------- |
| Iso         | `string` | Two-letter ISO 3166-1 code of the country, e.g. 'NL'. |
| Name        | `string` | Name of the country.                                  |
| Active      | `bool`   |                                                       |
| EnglishName | `string` | Name of the country, in English.                      |
| PhonePrefix | `string` | Phone prefix number, e.g. '+31'                       |
| Capital     | `string` | Capital city of the country                           |





### CrmAccount

| Name             | Type                 | Description                                                  |
| ---------------- | -------------------- | ------------------------------------------------------------ |
| Id               | `Guid`               | Identifier of the CRM account.                               |
| Salutation       | `string`             | The salutation e.g. 'Dear sir/madam,'                        |
| FullName         | `string` (Read-only) | Full name of the account.                                    |
| FirstName        | `string`             |                                                              |
| LastNamePrefix   | `string`             | The prefix of the lastName e.g. [FirstName] van der [LastName] |
| LastName         | `string`             |                                                              |
| CompanyName      | `string`             | Name of the company.                                         |
| Email            | `string`             |                                                              |
| Phone1           | `string`             | Primary phone number.                                        |
| Phone2           | `string`             | Secondary phone number.                                      |
| StreetName       | `string`             |                                                              |
| HouseNumber      | `string`             |                                                              |
| PostalCode       | `string`             |                                                              |
| City             | `string`             |                                                              |
| CountryIso       | `string`             | Two-letter ISO 3166-1 code of the country, e.g. 'NL'.        |
| Country          | `string`             | Country e.g. 'United Kingdom'                                |
| CocNumber        | `string`             | Chamber of Commerce number.                                  |
| VatNumber        | `string`             |                                                              |
| Iban             | `string`             |                                                              |
| Type             | `integer`            | [Type](#relationship-type) of the CRM account.               |
| DefaultContact   | `CrmContact`         | The Default CrmContact                                       |
| DefaultContactId | `Guid`               | Identifier for the DefaultContact                            |

#### Relationship type

| Key  | Description      |
| ---- | ---------------- |
| 0    | Customer         |
| 1    | Delivery address |
| 2    | Employee         |

### CrmContact

| Name             | Type     | Description                                                  |
| ---------------- | -------- | ------------------------------------------------------------ |
| Id               | `Guid`   | Identifier of the CRM contact.                               |
| Salutation       | `string` | The salutation e.g. 'Dear sir/madam,'                        |
| FirstName        | `string` |                                                              |
| LastNamePrefix   | `string` | The prefix of the last name e.g. [FirstName] van der [LastName]. |
| LastName         | `string` |                                                              |
| CompanyName      | `string` | The name of the company.                                     |
| Email            | `string` |                                                              |
| Phone1           | `string` | Primary phone number.                                        |
| Phone2           | `string` | Secondary phone number.                                      |
| StreetName       | `string` |                                                              |
| HouseNumber      | `string` |                                                              |
| PostalCode       | `string` |                                                              |
| City             | `string` |                                                              |
| UseParentAddress | `bool`   | If this property is set; the contact should inherit it's company's address. |
| CountryIso       | `string` | Two-letter ISO 3166-1 code of the country, e.g. 'NL'.        |
| CrmAccountId     | `Guid`   | Identifier for the CrmAccount                                |



### Currency

| Name          | Type      | Description                                  |
| ------------- | --------- | -------------------------------------------- |
| Iso           | `string`  | Three letter ISO 4217:2015 code, e.g. 'EUR'. |
| Name          | `string`  | Name of the curreny.                         |
| Symbol        | `string`  | Symbol, e.g. '$'.                            |
| DecimalDigits | `decimal` |                                              |
| Rounding      | `decimal` |                                              |
| NamePlural    | `string`  |                                              |



### ExchangeRate

| Name        | Type      | Description                                  |
| ----------- | --------- | -------------------------------------------- |
| Id          | `guid`    | Identifier for the ExchangeRate              |
| CurrencyIso | `string`  | Three letter ISO 4217:2015 code, e.g. 'EUR'. |
| Rate        | `decimal` |                                              |






### Feature

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
| Category | `Category` | Category of which this feature belongs to. |
| CategoryId | `Guid` | Identifier for the [category](#category) to which this feature is attached. |
| SubcategoryIds | `Guid[]` | List of identifiers for sub-categories. |
| ThreeDModelItems | `string[]` | The names of parts in a 3D model that are associated with this feature. |
| HiddenThreeDModelItems | `string[]` | The names of parts in a 3D model that should be hidden when this feature is selected in a configuration. |
| Tags | `string[]` | List of tags. A tag can be used to give a feature a certain label. |
| MarginPct | `decimal` | |
| Properties | `FeatureHasFeatureProperty[]` | |
| Texts | `FeatureText[]` ||
| CardImageUrl | `string` | URL for the image of the feature. This image is displayed in the cards. |
| OrganizationSellsFeature | `OrganizationSellsFeature[]` | |
| VATId | `Guid` | [VAT](#vat) that is used as default for this feature. |
| UnitOfMeasurementId | `Guid` | Identifier of the [Unit of measurement](#unitofmeasurement) for this feature. |
| UnitOfMeasurement | `UnitOfMeasurement` | [Unit of measurement](#unitofmeasurement) for this feature. |



#### FeatureType

| Key  | Description                                                  |
| ---- | ------------------------------------------------------------ |
| 0    | **Feature**: Default type                                    |
| 2    | **ColorPicker**: If used; the feature will be displayed as a color picker. |
| 3    | **Text**: If used; the feature will be displayed as a text input. |





#### FeatureText

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
| 3    | **Title**                                                    |
| 4    | **PromptMessage**                                            |
| 5    | **Quotation text:** Optionally, this info can be generated on the quotation template (PDF). |

#### 

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
| 2    | **Text**: If the feature property is market as a Text type; a text value can be associated with this property. |

#### AssociatedFeatureProperty

The AssociatedFeatureProperty is a relationship between a feature property's AssociatedFeatures list and a Feature.

| Name              | Type      | Description                                             |
| ----------------- | --------- | ------------------------------------------------------- |
| Id                | `Guid`    | Identifier of the associated feature property.          |
| FeaturePropertyId | `Guid`    | Identifier of the [feature property](#featureproperty). |
| FeatureId         | `Guid`    | Identifier of the [feature](#feature).                  |
| Feature           | `Feature` | The Feature object                                      |

#### FeatureHasFeatureProperty

Relationship between a feature and a feature property.

| Name                | Type      | Description                                                  |
| ------------------- | --------- | ------------------------------------------------------------ |
| Id                  | `Guid`    | Identifier of the FeatureHasFeatureProperty relationship.    |
| FeaturePropertyId   | `Guid`    | Identifier of the [feature property](#featureproperty).      |
| FeatureId           | `Guid`    | Identifier of the [feature](#feature).                       |
| Value               | `decimal` | If the type of the FeaturePropery is set to `0`(Input); this property holds the input value. |
| AssociatedFeatureId | `Guid`    | If the type of the FeatureProperty is set to `1`(AssociatedFeature); this property holds the [feature](#feature) identifier that is associated with this property. |



### LeaseTable

| Name              | Type                    | Description |
| ----------------- | ----------------------- | ----------- |
| CommencementPrice | `decimal`               |             |
| TerminationPrice  | `decimal`               |             |
| Currency          | `Currency`              |             |
| ExchangeRate      | `ExchangeRate`          |             |
| LeaseTableLines   | `List<LeaseTableLines>` |             |



#### LeaseTableLine

| Name         | Type       | Description                                         |
| ------------ | ---------- | --------------------------------------------------- |
| Id           | `Guid`     | Identifier of the LeaseTableLine.                   |
| LeaseTableId | `Guid`     | Identifier of the parent [LeaseTable](#LeaseTable). |
| MinValue     | `decimal`  |                                                     |
| MaxValue     | `decimal`  |                                                     |
| TermValue    | `int`      |                                                     |
| TermType     | `TermType` | Type of the lease term                              |



#### TermType

A LeaseTableLine can have the following terms:

| Key  | Description |
| ---- | ----------- |
| 0    | Days        |
| 1    | Weeks       |
| 2    | Months      |
| 3    | Years       |





### Organization

| Name               | Type      | Description                                                  |
| ------------------ | --------- | ------------------------------------------------------------ |
| Id                 | `Guid`    | Identifier of the organization.                              |
| Name               | `string`  | Name of the organization.                                    |
| SettingsId         | `Guid`    | Identifier of the settings corresponding to this organization. |
| Users              | `User[]`  | List of [users](#user) that are part of this organization.   |
| DefaultDiscountPct | `decimal` | Organization's default discount percentage. Calculates the margin by decreasing the purchase price. |
| DefaultUpValuePct  | `decimal` | Organization's default up value percentage. Calculates the margin by increasing the sales price. |



### VAT

| Name        | Type      | Description                                     |
| ----------- | --------- | ----------------------------------------------- |
| Id          | `Guid`    | Identifier of the VAT.                          |
| Name        | `string`  | Describes the VAT.                              |
| Pct         | `decimal` | Percentage value of the VAT e.g. 21.            |
| IncludesVAT | `boolean` | Defines whether the price already includes VAT. |



### Quotation

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
|CustomerReference|`string`|Text field that can be used to idenfity the customer.|
|QuotationReference|`string`|Text field that can be sued to identify the quotation.|
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
|Properties|`QuotationPropertyValue[]`|Array containing the [quotation property values](#quotationpropertyvalue) for the quotation|
|PropertyIds|`Guid[]`|Ids of selected quotation property fields|

#### QuotationStatus

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

#### QuotationPropertyValue

|Name|Type|Description|
|--|--|--|
|Id|`Guid`|Identifier for the quotation property value.|
|EntityId|`Guid`|Identifier of the quotation this property value belongs to.|
|EntityPropertyId|`Guid`|Identifier of the quotation property this property value belongs to.|
|Value|`string`|Value of the quotation property|

#### QuotationLine

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
|UnitOfMeasurement| `string` (Read-only) | Unit of measurement of the feature. Default  is `pcs`. |
|Hidden| `bool` | Indicates if the line is visible in EMS. |
|ParentLineId | `Guid` | Identifier of the parent line (QuotationLine). |
|GroupedRootLine| `bool` | Indicates if the quotation line is the root of a group of lines. |
|GroupId| `Guid`| Identifier of the group to which this line belongs. |
|GroupOrder| `int` | Indicates the order in which the groups are displayed. |
|AddedFromConfiguration| `bool` | Indicates that the line has been added from a configuration. |
|ConfigurationId| `Guid` | Identifier of the configuration from which this quotation line was created. |
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

#### QuotationFile

|Name|Type|Description|
|--|--|--|
|Id|`Guid`|Identifier for the QuotationFile.|
|QuotationId|`Guid`|Identifier of the quotation.|
|FileId|`Guid`|Identifier of the [FileEntity](#fileentity).|

In order to add  file to a quotation, a post request should be sent to the quotation endpoint with parameters `{id}/addfile`

#### QuotationProperty

|Name|Type|Description|
|--|--|--|
|Id|`Guid`|Identifier for the quotation property.|
|Description|`string`|Description of the quotation property.|
|IsRequired|`bool`|Wether the quotation property is required or not.|
|IsReadonly|`bool`|Wether the quotation property is read only or not.|
|Texts|`EntityPropertyType`|Type of the quotation property.|
|Type|`EntityPropertyText[]`| Array containing translations for quotation property|
|Order|`Guid`|The order in which the quotation properties are displayed on the quotations page.|
|Fields|`QuotationPropertyField[]`| Array containing the fields for FieldSelect type quotation property|

#### EntityPropertyType

| Key  | Description                                                  |
| ---- | ------------------------------------------------------------ |
| 0    | **Text**: If the quotation property is marked as a Text type; A string value can be associated with this property. Displayed as single line input field in EMS. |
| 1    | **Number**:  If the quotation property is marked as a Number type; A decimal value can be associated with this property. |
| 2    | **Date**: If the feature property is marked as a Date type; a datetime value can be associated with this property. |
| 3    | **FieldSelect**: If the feature property is marked as a FieldSelect type; a text value from a dropdown can be associated with this property. |
| 4    | **Toggle**: If the feature property is marked as a Toggle type; a bool value can be associated with this property. |
| 5    | **MultiLine**: If the feature property is marked as a MultiLine type; a text value can be associated with this property. Displayed as multi line input field in EMS|

#### EntityPropertyText

|Name|Type|Description|
|--|--|--|
|Id|`Guid`|Identifier of the property text. |
|Value|`string`|Value (translation) of the property text.|
|LanguageIso|`string`|ISO code of language used for property text (translation)|
|EntityPropertyId|`Guid`|Identifier of the entity property the text (translation) belongs to.|

#### QuotationPropertyField

|Name|Type|Description|
|--|--|--|
|Id|`Guid`|Identifier of the property field. |
|Code|`string`|Code of property field|
|Description|`string`|Description of property field|
|QuotationPropertyId|`Guid`|Identifier of the quotation property this field belongs to.|
|Texts|`QuotationPropertyFieldText[]`| Array containing translations for property field.|

#### QuotationPropertyFieldText

|Name|Type|Description|
|--|--|--|
|Id|`Guid`|Identifier of the property field text. |
|Value|`string`|Value (translation) of the property field text.|
|LanguageIso|`string`|ISO code of language used for property field text (translation)|
|QuotationPropertyFieldId|`Guid`|Identifier of the quotation property field the text (translation) belongs to.|

### FileEntity

|Name|Type|Description|
|--|--|--|
|Id|`Guid`|Identifier of the file entity. |
|Name|`string`|Name of the file.|
|Url|`string`|URL of the file.|

### UnitOfMeasurement
|Name|Type|Description|
|--|--|--|
|Id|`Guid`|Identifier for the unit of measurement. |
|Code | `string` | The code for the unit of measurement. Example: `kg`. |
|Description| `string`| The description for the unit of measurement. Example: `Kilogram`. |



### UserCreationRequest

| Name             | Type              | Description                                                  |
| ---------------- | ----------------- | ------------------------------------------------------------ |
| Id               | `Guid`            | Identifier for the UserCreationRequest                       |
| RequestDate      | `DateTimeOffset`  | Date and time for the request in UTC format e.g. 'DD-MM-YYYY HH-MM-SS' |
| RequireTwoFactor | `bool`            | If two factor authentication is required: true, otherwise false. |
| IsSeller         | `bool`            |                                                              |
| CurrencyIso      | `string`          | Three letter ISO (4217) code for the used currency e.g. EUR  |
| LanguageIso      | `string`          | Two letter ISO (639-1) code of the text language             |
| IsExpired        | `bool`(Read-only) | Returns true if the UserCreationRequest is expired.          |



---

### Configuration

Models that can be used to edit a existing configuration or develop your own custom configurator interface.

| Name                         | Type                         | Description                                                  |
| ---------------------------- | ---------------------------- | ------------------------------------------------------------ |
| Id                           | `Guid`                       | Unique identifier of the configuration session               |
| Code                         | `string`                     | A unique code that represents this configuration session and can be used by a user to resume the session. |
| ConfigurationModelId         | `Guid`                       | Identifier of the configuration model that is being configured. |
| Root                         | `ConfigurationFeature`       | The root feature of the configuration model that is being configured. |
| Steps                        | `ConfigurationStep[]`        | List of steps that is used to structure the configurator UI. |
| PreconfigurationFeatures     | `ConfigurationFeature[]`     | A set of features that should be displayed before the user sees any of the configurator steps. |
| Values                       | `{ 'id': SelectedValue }`    | Object that gives easy access to a selected value for a given feature. |
| TextValues                   | `{ 'id': string }`           | Object that gives easy access to a selected text value for a given feature. |
| Requirements                 | `ConfigurationRequirement[]` | Set of requirements made by the user during the configuration session. |
| Language                     | `string`                     | Two-letter ISO code of the selected configuration language.  |
| Currency                     | `string`                     | Two-letter ISO code of the selected configuration currency.  |
| BasePriceExclVat             | `string`                     | Formatted string of the base price excluding VAT.            |
| BasePriceInclVat             | `string`                     | Formatted string of the base price including VAT.            |
| BasePriceExclVatNumber       | `decimal`                    | Base price excluding VAT.                                    |
| BasePriceInclVatNumber       | `decimal`                    | Base price including VAT.                                    |
| AdditionalPriceExclVat       | `string`                     | Formatted string of the additional price excluding VAT.      |
| AdditionalPriceInclVat       | `string`                     | Formatted string of the additional price including VAT.      |
| AdditionalPriceExclVatNumber | `decimal`                    | Additional price excluding VAT.                              |
| AdditionalPriceInclVatNumber | `decimal`                    | Additional price including VAT.                              |
| TotalPriceExclVat            | `string`                     | Formatted string of the total price excluding VAT.           |
| TotalPriceInclVat            | `string`                     | Formatted string of the total price including VAT.           |
| TotalPriceExclVatNumber      | `decimal`                    | Total price excluding VAT.                                   |
| TotalPriceInclVatNumber      | `decimal`                    | Total price including VAT.                                   |
| Conflicts                    | `ConfigurationConflict[]`    | When conflicts occur during the configuration session, this array will be populated with conflict data. |

#### ConfigurationFeature

| Name                 | Type                       | Description                                                  |
| -------------------- | -------------------------- | ------------------------------------------------------------ |
| Id                   | `Guid`                     | Unique identifier of this feature's unique position in the configuration model. |
| ConfigurationModelId | `Guid`                     | Identifier of the configuration model this feature belongs to. |
| ParentId             | `Guid?`                    | Identifier of the parent feature. Null if this feature is the root. |
| FeatureId            | `Guid`                     | Identifier of the feature that is attached.                  |
| Value                | `decimal`                  | Selected value in the configuration session.                 |
| TextValue            | `string`                   | Selected text value in the configuration session.            |
| IsSelected           | `boolean`                  | Flag indicating if the feature is selected in the configuration session. |
| Code                 | `string`                   | Code of the feature.                                         |
| Description          | `string`                   | Description of the feature.                                  |
| ExtendedDescription  | `string`                   | Extended description of the feature.                         |
| MoreInfo             | `string`                   | More info of the feature.                                    |
| Name                 | `string`                   | Name of the feature.                                         |
| ArticleCode          | `string`                   | Same as Code.                                                |
| UnitOfMeasurement    | `string`                   | Unit of measurement of the feature.                          |
| ImageUrl             | `string`                   | URL to the image of the feature.                             |
| Type                 | `RelationshipType`         | Relationship type of this feature to its parent.             |
| FeatureType          | `ConfigurationFeatureType` | Determines how the user should interact with this feature in the configurator. |
| DisplayType          | `DisplayType`              | Determines how the feature should be rendered in the configurator. |
| Features             | `ConfigurationFeature[]`   | Child features.                                              |
| IsBestMatch          | `boolean`                  | Flag that indicates of the feature is a best match based on a selection in the PreconfigurationFeatures of the configuration session. |
| IsMandatory          | `boolean`                  | Flag that indicates if this feature is mandatory. The user should not be provided with a way to create a quotation before this feature is answered. |
| HideInQuotation      | `boolean`                  | Flag that indicates that is feature is not displayed in the quotation. The configurator should not display this feature in any overviews. |
| UnitPrice            | `string`                   | Formatted string of the unit price excluding VAT.            |
| UnitPriceExclVat     | `decimal`                  | Unit price excluding VAT.                                    |
| UnitPriceInclVat     | `decimal`                  | Unit price including VAT.                                    |
| TotalPrice           | `string`                   | Formatted string of the total price excluding VAT.           |
| TotalPriceExclVat    | `decimal`                  | Total price excluding VAT.                                   |
| TotalPriceInclVat    | `decimal`                  | Total price including VAT.                                   |
| MinValue             | `decimal`                  | Minimal value of the feature.                                |
| MaxValue             | `decimal`                  | Max value of the feature.                                    |
| StepValue            | `decimal`                  | Allowed step values between the minimum and maximum values of the feature. |

##### RelationshipType

Relationship type of a feature to its parent.

| Key  | Description |
| ---- | ----------- |
| 0    | Optional    |
| 1    | Mandatory   |
| 2    | Alternative |
| 3    | Or          |

##### ConfigurationFeatureType

Determines how the user should interact with this feature in the configurator.

| Key  | Description                                    |
| ---- | ---------------------------------------------- |
| 0    | Standard type.                                 |
| 2    | Feature should be displayed as a color picker. |
| 3    | Feature should be displayed as a text input.   |

##### DisplayType

| Key  | Description             |
| ---- | ----------------------- |
| 0    | Standard                |
| 1    | Image box               |
| 2    | Dropdown                |
| 4    | Searchbar in dialog     |
| 5    | Table                   |
| 6    | Searchbar not in dialog |

#### ConfigurationStep

| Name                 | Type                     | Description                                                 |
| -------------------- | ------------------------ | ----------------------------------------------------------- |
| Id                   | `Guid`                   | Identifier of the step.                                     |
| ConfigurationModelId | `Guid`                   | Identifier of the configuration model this step belongs to. |
| Title                | `string`                 | Title of the step.                                          |
| Type                 | `StepType`               | Type of the step                                            |
| Features             | `ConfigurationFeature[]` | Features that should be displayed in this step.             |
| IconUrl              | `string`                 | URL of the icon that should be displayed for the step.      |

##### StepType

| Key  | Description |
| ---- | ----------- |
| 2    | Hotspots    |
| 5    | 3D          |

#### ConfigurationConflict

| Name           | Type                   | Description                                                  |
| -------------- | ---------------------- | ------------------------------------------------------------ |
| Feature        | `ConfigurationFeature` | The feature that has conflict.                               |
| Type           | `ConflictType`         | Type of the conflict.                                        |
| RequestedValue | `decimal`              | If the conflict type is `Value`, this property holds the value that was requested as part of a user requirement. |
| ActualValue    | `decimal`              | If the conflict type is `Value`, this property holds the actual value that will be assigned if the conflict is ignored. |

##### ConflictType

| Key  | Description |
| ---- | ----------- |
| 0    | Add         |
| 1    | Remove      |
| 2    | Alternative |
| 3    | Value       |

#### ConfigurationRequirement

| Name   | Type      | Description                              |
| ------ | --------- | ---------------------------------------- |
| NodeId | `Guid`    | Identifier of the configuration feature. |
| Value  | `decimal` | Selected value.                          |



---

Missing a property? Feel free to contact us at `support@elfsquad.io`.

