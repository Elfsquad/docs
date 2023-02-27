---
title: Code authentication
sidebar_position: 3
---

## Before You Begin

To create a new OpenId client integration, navigate to the Integrations
page at
[ems.elfsquad.io/integration](https://ems.elfsquad.io/integration). Once
there, you can proceed with setting up the integration.

After successful setup, an OpenId client will be created, and you can
configure it by accessing its settings.

Ensure that the 'Token auth method' is set to 'None', and the 'Grant
type' is set to 'Code'. These settings are essential for successful
authentication.

Be sure to take note of the client ID as it will be needed later. For
code authentication, you can disregard the client secret.

Finally, include a redirect URL where the user will be directed after a
successful login.

## Using the `@elfsquad/authentication` package
To make it easier for you to connect with Elfsquad, we made a package
that handles the authentication for you.

We recommend you to use this package. It saves you time & you are
guaranteed to have a stable interface that is updated when new
functionalities are introduced.

More information about how to integrate with this package, 
[can be found here](https://github.com/elfsquad/authentication).

## Using custom code

At some point in the UI of your app, you will need to get the end user
to log in, in order to gain consent to access Elfsquad's resources on
the end user’s behalf. 

You can do this when the end user opens the app, or you may wait until
your app actually needs to access Elfsquad's resources. 

### Step 1: Redirecting the user

In either case, you will have to redirect the end user to the
`oauth2/auth` endpoint in their browser. You could do this by
providing a link for the end user:

```
<a href="https://login.elfsquad.io/oauth2/auth?client_id={CLIENT_ID}&redirect_uri={REDIRECT_URL}&response_type=code&scope=Elfskot.Api%20offline_access%20openid%20profile&response_mode=fragment">
    Click here to login
</a>
```

Replace the `{CLIENT_ID}` and `{REDIRECT_URL}` values in the example
below with those specific to your OpenId Client.

Clicking on the link will take the end user to the Elfsquad login page.
After the end user has succesfully logged in with valid credentials, the
end user will be redirected back to your redirect url with the access
token included as a fragment of the URL.

### Step 2: Extracting the code

After completing the login, the user will be redirected back to the
redirect URL. The user will be redirected to the URL with a `code` in
the URL. This code can be exchanged for an access token. 

An example of the redirect URL is shown below:

```
https://myapp.com/callback#scope=Elfskot.Api%20offline_access%20openid%20profile&code=123&state=abc
```

You will need to extract the code from this URL. 

``` js
const reg = new RegExp('#code=(.*?)&');
const code = reg.exec(window.location.href)[1]
alert("your code is : " + code);
```

### Step 3: Exchanging the code

The extracted code can be exchanged for an access token. This access
token can be used to make requests on behalf of the user.

The token can be exchanged by sending a POST request to the
`https://login.elfsquad.io/oauth2/token` endpoint.

The request requires a couple pieces of information in the body. An
example is shown below.

```json
{
    "grant_type": "authorization_code",
    "client_id" {CLIENT_ID},
    "redirect_uri": {REDIRECT_URI},
    "code": {CODE},
}
```

This will return a response with the following body:

```json
{
    "access_token": "123",
    "expires_in" 3600,
    "id_token": "abc",
    "refresh_token": "xyz"
}
```

### Step 4: Refreshing the token

By default, the token returned by the previous API call is valid for
3600 seconds (60 minutes). After this, any API call made with the token,
will return a 401 unauthorized status code.

This can be fixed by making use of the refresh token returned in the
previous request. This token is valid for 30 days and can be used to
retrieve a fresh access token.

For this request, you will need to use the `oauth2/token` endpoint
again, with the following body:

```json
{
    "grant_type": "refresh_token",
    "client_id": {CLIENT_ID},
    "redirect_uri": {REDIRECT_URI},
    "refresh_token" {REFRESH_TOKEN}
}
```

