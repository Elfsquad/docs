---
title: Authentication
sidebar_position: 1
sidebar_label: Overview
slug: ./
---


There are three ways to authenticate with the Elfsquad API.

* Anonymous - for creating custom interfaces where users are not
  required to log in.
* Client credentials - for creating integrations.
* Code - for creating custom interfaces where users _are_ required to
  log in.

## Anonymous
When creating a custom interface implementation in which you want to
allow anonymous users, you can use this authentication method. 

The anonymous authentication method only allows calling endpoints in the
[configurator API](/docs/apis/configurator-api)

Authentication to the API can be performed via a custom HTTP header:

```
x-elfsquad-id:  {TENANT_ID}
```

The Tenant ID can be found at the bottom of the sub-menu in the
[integrations page](https://ems.elfsquad.io/integration).

You should also include the domain of the showroom from which you are
sending requests, you can do this with the `x-elfsquad-domain` header.
This will ensure such that you will get the correct settings that belong
to that showroom instance.

```
x-elfsquad-domain: {SHOWROOM_DOMAIN}
```

## Client credentials
:::warning
Only use this authentication method for private applications. The
`client_id` and `client_secret` should be treated confidentially.
:::

For integrations that do not require requests that are issued by a
user, you can use this authentication method. For example when creating
automations or data synchronizations.

The client credentials authentication method can be used in all
available APIs.

[Step by step tutorial](/docs/apis/authentication/client-credentials)

## Code
For integrations that require requests that are issued by a user, you
can use this authentication method. For example when creating a custom
interface that requires the user to be logged in.

The code authentication method can be used in all available APIs.

[Step by step tutorial](/docs/apis/authentication/code)

