## Before You Begin
Create a new OpenId client integration page in the [Integrations page](https://ems.elfsquad.io/integration) and note your Client id and Secret.

## Step 1: Use your Client ID and Secret to obtain an access token

Replace the `{CLIENT_ID}` and `{CLIENT_SECRET}` values in the example below with those specific to your OpenId Client.

!!! code-example "Code examples"

    === "HTTP"

        ``` http
        POST /connect/token HTTP/1.1
        Host: login.elfsquad.io
        Content-Type: application/x-www-form-urlencoded

        client_id={CLIENT_ID}&client_secret={CLIENT_SECRET}&grant_type=client_credentials&scope=Elfskot.Api
        ```

    === "cURL"

        ``` bash
        curl --location --request POST 'https://login.elfsquad.io/connect/token' \
        --header 'Content-Type: application/x-www-form-urlencoded' \
        --data-urlencode 'client_id={CLIENT_ID}' \
        --data-urlencode 'client_secret={CLIENT_SECRET}' \
        --data-urlencode 'grant_type=client_credentials' \
        --data-urlencode 'scope=Elfskot.Api'
        ```

    === "C# - RestSharp"

        ``` c#
        var client = new RestClient("https://login.elfsquad.io/connect/token");
        client.Timeout = -1;
        var request = new RestRequest(Method.POST);
        request.AddHeader("Content-Type", "application/x-www-form-urlencoded");
        request.AddParameter("client_id", "{CLIENT_ID}");
        request.AddParameter("client_secret", "{CLIENT_SECRET}");
        request.AddParameter("grant_type", "client_credentials");
        request.AddParameter("scope", "Elfskot.Api");
        IRestResponse response = client.Execute(request);
        Console.WriteLine(response.Content);
        ```

## Step 2: Retrieve the access token from the response
A successful response will look like this:
```json
{
    "access_token": "{ACCESS_TOKEN}",
    "expires_in": 3600,
    "token_type": "Bearer",
    "scope": "Elfskot.Api"
}
```

## Step 3: Use the access token to access Elfsquad APIs
You can now use the access token to make calls to one of the Elfsquad APIs until the token expires.

!!! code-example "Code examples"

    === "HTTP"
        ```http
        GET /data/1/features HTTP/1.1
        Host: api.elfsquad.io
        Authorization: Bearer {ACCESS_TOKEN}
        ```

    === "cURL"
        ``` bash
        curl --location --request GET 'https://api.elfsquad.io/data/1/features' \
        --header 'Authorization: Bearer {ACCESS_TOKEN}'
        ```

    === "C# - RestSharp"

        ``` c#
        var client = new RestClient("https://api.elfsquad.io/data/1/features");
        client.Timeout = -1;
        var request = new RestRequest(Method.GET);
        request.AddHeader("Authorization", "Bearer {ACCESS_TOKEN}");
        IRestResponse response = client.Execute(request);
        Console.WriteLine(response.Content);
        ```