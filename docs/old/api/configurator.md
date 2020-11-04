# Configurator endpoints

Endpoints that can be used to edit configurations or create your own custom configurator interface.

---

## Start new configuration session

Starts a new configuration session for a specified configuration model.

```
GET https://api.elfsquad.io/api/3/configurator/new/{IDENTIFIER}
```

####  URI Parameters

| Name       | Description                                                  |
| ---------- | ------------------------------------------------------------ |
| IDENTIFIER | Can be either the name of the configuration model's root feature or the unique identifier (GUID) of the configuration model. |

#### Query parameters

| Name | Description                          |
| ---- | ------------------------------------ |
| lang | Two-letter ISO code of the language. |

#### Response

See [configuration](/models/#configuration).

---

## Update requirement

Update a requirement in the configuration.

```
PUT https://api.elfsquad.io/api/3/configurator/{CONFIGURATION_ID}
```

#### URI Parameters

| Name             | Description                              |
| ---------------- | ---------------------------------------- |
| CONFIGURATION_ID | Identifier of the configuration session. |

#### Query Parameters

| Name            | Description                                                  |
| --------------- | ------------------------------------------------------------ |
| ignoreConflicts | A boolean value that can be set to ignore conflicts. This flag should be used when resolving a conflict in user requirements. |

#### Request body 

| Key                | Type      | Description                                                  |
| ------------------ | --------- | ------------------------------------------------------------ |
| FeatureModelNodeId | `Guid`    | Identifier of the feature.                                   |
| Value              | `decimal` | Value that should be assigned.                               |
| IsSelection        | `bool`    | Flag indicating whether the requirement should interpret the value as a boolean to turn on/off the feature. |

#### Response

See [configuration](/models/#configuration).

---

## Change language

Change the language of a configuration.

```
PUT https://api.elfsquad.io/api/3/configurator/{CONFIGURATION_ID}/changelanguage
```

#### URI Parameters

| Name             | Description                              |
| ---------------- | ---------------------------------------- |
| CONFIGURATION_ID | Identifier of the configuration session. |

#### Request body

The two-letter ISO code as text content.



