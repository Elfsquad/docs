---
title: Create quotation from configuration
sidebar_position: 1
sidebar_label: Create quotation from configuration
slug: ./create-quotation-from-configuration
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Quotation generation falls into two categories: anonymous and
authenticated. While both can create and modify configurations, the
process of converting a configuration into a quotation differs for each:
anonymous users may 'request' a quotation, while authenticated users can
directly create a quotation.

## Authenticated
For authenticated HTTP requests, the translation can be split up into
two steps: creating a quotation & adding a configuration to the
quotation.

### 1. Creating a quotation

Creating a quotation should be done in different ways, depending on your
use-case.

#### From an integration
Integrations should use the `POST /data/1/Quotations` endpoint to create
a quotation. For more information, please consult the [documentation](https://docs.elfsquad.io/apis/data/#tag/Quotations.Quotation/operation/Quotations.Quotation.CreateQuotation)

#### From a custom interface
If you're making a custom interface, a different endpoint should be used
to create a quotation: `POST /api/2/quotations`.

<Tabs
  defaultValue="js"
  values={[
    { label: 'JavaScript', value: 'js', },
    { label: 'HTTP', value: 'http', },
  ]
}>

<TabItem value="http">

```http
POST /api/2/quotations HTTP/1.1
Host: api.elfsquad.io
Content-Type: application/json
Authorization: Bearer YOUR_TOKEN

{
  "languageIso": "en",
  "currencyIso": "eur"
}
```
</TabItem>

<TabItem value="js">

```javascript
const request = fetch('https://api.elfsquad.io/api/2/quotations', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_TOKEN'
  },
  body: JSON.stringify({
    languageIso: 'en',
    currencyIso: 'EUR'
  })
})
const response = await response.json();
```

</TabItem>

</Tabs>

Both of these requests will provide you with the id of the newly created
quotation. You will need this identifier in the next step.

### 2. Adding the configuration
The next step, is adding a configuration to the quotation you just
created. For this, you can use an endpoint available in the configurator
API. For more details, please consult the [addtoquotation endpoint
documentation](https://docs.elfsquad.io/apis/configurator#tag/Configurator/paths/~1configurator~1%7Bversion%7D~1configurator~1addtoquotation/put)

## Anonymous
Requesting a quotation as an anonymous user is relatively simple. You
only need to perform one request to the [requestquote endpoint](https://docs.elfsquad.io/apis/configurator/#tag/Configurator/paths/~1configurator~1%7Bversion%7D~1configurator~1requestquote/post).

This endpoint accepts the quotation id, configuration id(s) and a
`quotationRequest` object. This object is used for adding metadata about
the anonymous user to the quotation, such as their name, email address,
etc. A new CrmAccount will be automatically created to store these data 
points.

<Tabs
  defaultValue="js"
  values={[
    { label: 'JavaScript', value: 'js', },
    { label: 'HTTP', value: 'http', },
  ]
}>

<TabItem value="http">

```http
POST /configurator/3/configurator/requestquote HTTP/1.1
Host: api.elfsquad.io
Content-Type: application/json
Authorization: Bearer YOUR_TOKEN

{
    "configurationIds": ["1316cf56-1d58-4a3a-9d5e-7bba00a2cc41"],
    "quotationId": "1316cf56-1d58-4a3a-9d5e-7bba00a2cc41",
    "quotationRequest": {
        "firstName": "Stan",
        "email": "stan@elfsquad.io",
        ...
    }
}
```
</TabItem>

<TabItem value="js">

```javascript
const configurationIds = ['1316cf56-1d58-4a3a-9d5e-7bba00a2cc41'];
const quotationId = '1316cf56-1d58-4a3a-9d5e-7bba00a2cc41';
const quotationRequest = {
firstName: 'Stan',
email: 'stan@elfsquad.io',
// ...
};

const requestOptions = {
method: 'POST',
headers: {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer YOUR_TOKEN',
},
body: JSON.stringify({
  configurationIds,
  quotationId,
  quotationRequest,
}),
};

const response = await fetch('https://api.elfsquad.io/configurator/3/configurator/requestquote', requestOptions);
const data = await response.json();
```

</TabItem>

</Tabs>

