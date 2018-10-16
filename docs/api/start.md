Requirements

To follow this guide, it is advised to have Google Crome and Postman installed. The examples will show how to the raw HTTP requests with Postman. Postman can be [downloaded from their website](https://www.getpostman.com/apps).

The getting started guide contains the following content:

1. Requesting an access token
2. Creating a request and attaching the access token.
3. Examples in C# and Python.

## Authentication

### 1. Add a Elfskot Connect integration application

1. Open your [EMS environment](https://ems.elfskot.cloud).
2. In the navigation menu open **Integrations**.
3. Add a new Integration Application by clicking the Add button in the bottom-right corner.
4. Add a **Elfskot Connect** application.
5. Copy the **ApplicationId** and **Secret** and store them in a safe place.

### 2. Retrieve a JWT from the API

To make requests to our API, you will first need to request an access token. To request an access token, make a HTTP request to the API with the following parameters:

**URI:** `POST https://api.elfskot.cloud/api/2/auth/elfskotconnectlogin`

**Content-type:** application/json

**Body:**
```json
{
	"clientId": "2313449e-b71a-4abd-b3df-934eec91712e",
	"secret": "cbg7cult"
}
```

When the request is submitted, and all the parameters are correct, the API will return an access token:

```json
{
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDAiLCJqdGkiOiI3Y2JhNTY4MC03MTA5LTQ4Y2QtOWIzMi0zZTBjMzVlODA2ODciLCJpYXQiOjE1MzkzMzIxMDYsInRlbmFudGlkIjoiYTRlY2U3OWYtZjZmMC00YzgwLTljYmEtMDhkNGFkMGQ4NTRmIiwib3JnYW5pemF0aW9uaWQiOiIiLCJpc0VsZnNrb3RDb25uZWN0IjoiVHJ1ZSIsIm5iZiI6MTUzOTMzMjEwNiwiZXhwIjoxNTM5MzMzOTA2LCJpc3MiOiJodHRwczovL2FwaS5lbGZza290LmNsb3VkLyIsImF1ZCI6Imh0dHBzOi8vYXBpLmVsZnNrb3QuY2xvdWQvIn0.lqVHiSG7wZkmFtuuRY5n3S_sGYazHYdD8HMokRL7Lf0",
    "expiresIn": 1800000
}
```

![example 1](/img/login_request.png)

If the API gives a `415 Unsupported Media Type` error, make sure that the content type of the request is set to `application/json`.

## Create a request

Now we can use the accessToken to authenticate with the Elfskot API and retrieve a list of features:

**URI** `GET https://api.elfskot.cloud/api/2/features`

**Headers**

| Key           | Value                                          |
| ------------- | ---------------------------------------------- |
| Authorization | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9... |

![example 2](/img/get_features.png)