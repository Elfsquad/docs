# Requirements

To follow this guide, it is advised to have Google Crome and Postman installed. The examples will show how to the raw HTTP requests with Postman. Postman can be [downloaded from their website](https://www.getpostman.com/apps).

The getting started guide contains the following content:

1. Requesting an access token
2. Creating a request and attaching the access token.
3. Examples in C# and Python.

## Requesting an access token

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

If the API gives a `415 Unsupported Media Type` error, make sure that the content type of the request is set to `application/json`.

## Create a request

## Examples

We have two examples available to get started with our API.

### Example C# project

To get started quickly, download our C# example project from here. The example project already contains a method to request an access token.

### Example Python code

The following code example will show how to retrieve an access token, and use this token to do another request.

```python
print('Hello world')
```