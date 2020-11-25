# Basic endpoints

The main endpoint for the API is: `https://api.elfsquad.io`.

| Model                                                        | URI                                | Supported methods      |
| ------------------------------------------------------------ | ---------------------------------- | ---------------------- |
| [ApplicationEvents](/ems/models#applicationevents)               | /api/2/applicationevents           | GET, POST, PUT, DELETE |
| [AssociatedFeatureProperties](/ems/models#associatedfeatureproperty) | /api/2/associatedfeatureproperties | GET, POST, PUT, DELETE |
| [Categories](/ems/models#categories)                             | /api/2/categories                  | GET, POST, PUT, DELETE |
| [CrmAccounts](/ems/models#crmaccounts)                           | /api/2/crmaccounts                 | GET, POST, PUT, DELETE |
| [FeatureHasFeatureProperty](/ems/models#featurehasfeatureproperty) | /api/2/featurehasfeatureproperties | GET, POST, PUT, DELETE |
| [FeatureProperty](/ems/models#featureproperty)                   | /api/2/featureproperties           | GET, POST, PUT, DELETE |
| [Feature](/ems/models#feature)                                   | /api/2/features                    | GET, POST, PUT, DELETE |
| [LeaseTable](/ems/models#LeaseTable)                             | /api/2/leasetables                 | GET, POST, PUT, DELETE |
| [Organizations](/ems/models#organization)                        | /api/2/organizations               | GET, POST, PUT, DELETE |
| [QuotationLine](/ems/models#quotationline)                       | /api/2/quotationlines              | GET, POST, PUT, DELETE |
| [QuotationProperty](/ems/models#quotationproperty)               | /api/2/quotationproperties         | GET, POST, PUT, DELETE |
| [Quotation](/ems/models#quotation)                               | /api/2/quotations                  | GET, POST, PUT, DELETE |
| [UnitOfMeasurement](/ems/models#unitofmeasurement)               | /api/2/uom                         | GET, POST, PUT, DELETE |
| [UserCreationRequest](/ems/models#UserCreationRequest)           | /api/2/UserCreationRequests        | GET, POST, PUT, DELETE |
| [VAT](/ems/models#vat)                                           | /api/2/vats                        | GET, POST, PUT, DELETE |

**Additional note about GET:**

If the endpoint is requested without an ID, a list of all the entities will be returned. If an ID is specified, a single entity is returned.

It is also possible to use query parameters when retrieving a list of entities:

| Name       | Type      | Description                                                  | Example                                                      |
| ---------- | --------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Skip       | `integer` | Specifies how many entities should be skipped in the result. | `GET /api/2/quotations?skip=10&limit=100`                    |
| Limit      | `integer` | Specifies how many entities you want to retrieve.            | `GET /api/2/quotations?skip=10&limit=100`                    |
| Orderby    | `string`  | Used to order the result based on a property of the entity.  | `GET /api/2/features?orderby=name`                           |
| Descending | `boolean` | By default the Orderby parameter orders the result in ascending order. If you want to retrieve the result in descending order you need to specify the descending parameter. | `GET /api/2/features?orderby=name&descending=true`           |
| Include    | `string`  | All non-native types are by default excluded from the API response. If you require them you have to specify this in the request. **Note: ** Include values should be formatted in CamelCase. | `GET /api/2/quotations?include=Lines` Will return all the lines of the corresponding quotations. You can add multiple include parameters to suffice all your requirements: `GET /api/2/quotations?include=Lines&include=Debtor&include=Seller` |
| Filter     | `string`  | Besides the native query parameters above; it is also possible to query on entity specific properties. | For example; if you want to retrieve a list of all quotations that have the `synced` property set to `true` you can use the url: `/api/2/quotations?synced=true`. Where `synced` is a property of the quotation model. |

**Additional note about POST/PUT:**

These methods support a single entity as well as a list of entities. Based on the provided entities the method for a single or bulk will be picked automatically.



