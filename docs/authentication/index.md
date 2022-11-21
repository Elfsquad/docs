---
title: Authentication
sidebar_position: 1
sidebar_label: Overview
slug: ./
---


There are three ways to authenticate with the Elfsquad API.

* Anonymous - for creating custom configurator implements where users are not required to log in.
* Client Credentials authentication - for creating data intgegrations.
* User authentication - for creating custom configurator implements where users are required to log in.

## Anonymous
When creating a custom configurator implementation in which you want to allow anonymous users, you can use this authentication method. 

The anonymous authentication method only allows calling endpoints in the [configurator API](/apis/configurator/).

Authentication to the API can be performed via a custom HTTP header:
```
x-elfsquad-id:  {TENANT_ID}
```
The Tenant ID can be found at the bottom of the submenu in the [integrations page](https://ems.elfsquad.io/integration).

If your environment includes multiple showroom domains, you can also opt to use the `x-elfsquad-domain` header. This allows you to make requests as a specific showroom, such that you will get the correct configuration models and settings that belong to that showroom instance:
```
x-elfsquad-domain: {SHOWROOM_DOMAIN}
```

## Client Credentials
For integration flows that do not require requests that are issued by a user, you can use this authentication method. For example when creating automation tooling and data integrations.

The client credentials authentication method can be used in all available APIs.

[Step by step tutorial](/docs/authentication/client-credentials)


## User authentication
For integration flows that require requests that are issued by a user, you can use this authentication method. For example when creating a custom showroom that requires the user to be logged in.

The user authentication method can be used in all available APIs.

[Step by step tutorial](/docs/authentication/user-authentication)
