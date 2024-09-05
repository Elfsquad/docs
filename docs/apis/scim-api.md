---
title: SCIM API
sidebar_position: 3
sidebar_label: SCIM API
---

The Elfsquad SCIM API enables you to retrieve, create, update and delete
users within Elfsquad. As the name might give away, this API is a
(partial) implementation of the SCIM 2.0 standard.

[Open SCIM API Specifcation](/docs/spec/scim/scim-api)

### Authentication
The SCIM API does *not* use our normal oauth authentication. Instead,
each request should include the SCIM token in the `Authorization`
header.

#### Creating the SCIM token
The SCIM token can be created in the EMS, by following the steps below.

**1. Navigate to the [integrations page](https://ems.elfsquad.io/integration?selectedTab=connectedApplications), click on the plus button and select 'SCIM Provisioning'**

![Creating the SCIM token](/img/create-scim-token.png)

**2. Copy the token**

**3. Use this token in all API requests to the SCIM api**


### Mapping
Each field that exists on the Elfsquad user is mapped from a field on
the SCIM user. For fields that do not exist on the SCIM user object,
we've created extension properties.

|Elfsquad Property | SCIM Property
|:- | :- | 
|`UserName` | `userName` |
|`SSOIdentifier` | `externalId` |
|`Culture` | `locale` |
|`Active` | `active` |
|`CurrencyIso` | `urn:ietf:params:scim:schemas:extension:elfsquad:2.0:User/currencyIso` | 
|`LanguageIso` | `urn:ietf:params:scim:schemas:extension:elfsquad:2.0:User/languageIso` | 
|`CrmAccountId` | `urn:ietf:params:scim:schemas:extension:elfsquad:2.0:User/crmAccountId` |  
|`CrmContactId` | `urn:ietf:params:scim:schemas:extension:elfsquad:2.0:User/crmContactId` |  
|`IsAdmin` | `urn:ietf:params:scim:schemas:extension:elfsquad:2.0:User/isAdmin` |  
|`OrganizationId` | `urn:ietf:params:scim:schemas:extension:elfsquad:2.0:User/organizationId` |  
|`TwoFactorAuthenticationStatus` | `urn:ietf:params:scim:schemas:extension:elfsquad:2.0:User/twoFactorAuthenticationStatus` |

### Assigning roles with JSON Patch

You can manage user roles by sending JSON Patch operations to add or
remove roles. Below are the guidelines for adding and removing roles:

#### Adding a Role

To add a new role, use the `add` operation. The JSON Patch should look
like this:

```json
{
   "operations":[
      {
         "op":"add",
         "path":"roles",
         "value": [{
             "value": "{\"value\": \"{roleId}\"}"
         }]
      }
   ]
}
```

- `"op": "add"` specifies the operation to add a role.
- `"path": "roles"` indicates the target field for the operation.
- `"value"` contains an array with the role object to be added.

#### Removing a Role

To remove an existing role, use the `remove` operation. The JSON Patch
should look like this:

```json
[
    {
        "op": "remove",
        "path": "roles",
         "value": [{
             "value": "{\"value\": \"{roleId}\"}"
         }]
    }
]
```

- `"op": "remove"` specifies the operation to remove a role.
- `"path": "roles"` indicates the target field for the operation.
- `"value"` contains an array with the role object to be removed.

