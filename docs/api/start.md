# Requirements

To follow this guide, it is advised to have Google Crome and Postman installed. The examples will show how to the raw HTTP requests with Postman. Postman can be [downloaded from their website](https://www.getpostman.com/apps).

The getting started guide contains the following content:

1. Requesting an access token
2. Creating a request and attaching the access token.
3. Examples in C# and Python.

# Authentication

## Adding an integration application

1. Open your [EMS environment](https://ems.elfskot.cloud).
2. In the navigation menu open **Integrations**.
3. Add a new integration application by clicking the add button in the bottom-right corner.
4. Add an **Elfskot Connect** application.
5. Copy the **ApplicationId** and **Secret** and store them in a safe place.

## Retrieving an access token

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

An example of how this is done in Postman, is shown below:

![example 1](/docs/img/login_request.png)

### Error responses

If the API gives a `415 Unsupported Media Type` error, make sure that the content type of the request is set to `application/json`.

In the case of a not authorized error, make sure that you have added the integration application, and that the `clientId` and `secret` are correct.

# Creating a request

Now we can use the access token to authenticate with the Elfskot API. For any requests to the API, the access token should be added to the HTTP `Authorization` request header. An example is shown below where we retrieve a list of features:

**URI:** `GET https://api.elfskot.cloud/api/2/features`

**Headers:**

| Key           | Value                                          |
| ------------- | ---------------------------------------------- |
| Authorization | bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9... |

A Postman example which retrieves all the features is shown below:

![example 2](/docs/img/get_features.png)

# Example (C#): Requesting an access token

The following C# example demonstrates how to retrieve an access token from the API:

```csharp
// Retrieves an access token from the API. This requires an integration application in 
// the Elfskot Management System. See http://docs.elfskot.com for more information.
string RequestAccessToken(string applicationId, string secret)
{
    using(var client = new HttpClient())
    {
        var body = JsonConvert.SerializeObject(new { clientId = applicationId, secret = secret });
        var request = new HttpRequestMessage(HttpMethod.Post, "https://api.elfskot.cloud/api/2/auth/elfskotconnectlogin");
        request.Content = new StringContent(body, Encoding.UTF8, "application/json");
        var response = client.SendAsync(request).Result;

        if (response.IsSuccessStatusCode)
        {
            Console.WriteLine("Successfully retrieved an access token.");
            return JsonConvert.DeserializeObject<dynamic>(response.Content.ReadAsStringAsync().Result).accessToken;
        }
        else
        {
            throw new HttpRequestException($"Failed to request access token, server responded with status code: {response.StatusCode}");
        }
    }
}
```

This access token should present in the HTTP `Authorization` request header for every request.