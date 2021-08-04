---
title: User Authentication
sidebar_position: 3
---

## Before You Begin

Create a new OpenId client integration page in the [Integrations page](https://ems.elfsquad.io/integration).
When done succesfully, a newly created integration should show up.
Open the settings of the newly created integration.
Note your client id.
Enter a redirect url. The end user will be redirected to this url after a succesfull login.


## Step 1: Direct the end user to the Elfsquad authentication page

At some point in the UI of your app, you will need to get the end user to log in, in order to gain consent to access Elfsquad's resources on the end user’s behalf. 
You can do this when the end user opens the app, or you may wait until your app actually needs to access Elfsquad's resources. 
In either case, you will redirect the end user to the GET connect/authorize endpoint in their browser. For example, you could do this by providing a link for the end user:
```
<a href="https://login.elfsquad.io/connect/authorize?client_id={CLIENT_ID}&redirect_uri={REDIRECT_URL}&response_type=token&scope=Elfskot.Api">Click here to login</a>
```
Replace the `{CLIENT_ID}` and `{REDIRECT_URL}` values in the example below with those specific to your OpenId Client.

Clicking on the link will take the end user to the Elfsquad login page.
After the end user has succesfully logged in with valid credentials, the end user will be redirected back to your redirect url with the access token included as a fragment of the URL.

## Step 2: Extracting the access token

For example, let's say our redirect url is https://myapp.com/callback.
When this is the case, the user will be redirected to https://myapp.com/callback#access_token=eyabcdefghijk12345678&token_type=Bearer&expires_in=3600 after a succesfull login.
Now all that is left, is to extract the access token (eyabcdefghijk12345678) from this url.
One example of how to do this, would be to serve a web page with some javascript at the redirect url:

``` html
<html>
    <body>
        <script>
            let token = window.location.hash.match(/\#(?:access_token)\=([\S\s]*?)\&/)[1];
            alert("your access token is : " +token);
        </script>
    </body>
</html>
```

Your app will now be able to use this token to make calls to the Elfsquad API's on the end users behalf.