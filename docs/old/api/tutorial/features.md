# Introduction

In this tutorial we will show how you can manage features. The examples will show the following:

 * How to retrieve a list of features.
 * How to create a new feature.
 * How to retrieve a single feature.
 * How to update a feature.
 * How to delete a feature.

There is also a [complete project available for download](https://github.com/Elfskot/docs/raw/master/examples/tutorial_features/Elfskot.Example.Features_20181016.zip). This project contains example code that will show how to accomplish the above described tasks.

If you do not know how to connect to the API, please check out the [getting started with the API](/api/start) first.

# Retrieving an access token

The following C# function will retrieve an access token from the API. 

```csharp
// Retrieves an access token from the API. This requires an integration application in 
// theElfsquad Management System. See http://docs.elfsquad.io for more information.
static string RequestAccessToken(string applicationId, string secret)
{
    using(var client = new HttpClient())
    {
        var body = JsonConvert.SerializeObject(new { clientId = applicationId, secret = secret });
        var request = new HttpRequestMessage(HttpMethod.Post, "https://api.elfsquad.io/api/2/auth/elfskotconnectlogin");
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

The access token should be included in every request.

# Retrieving a list of features

To request all the features, we will call the following endpoint: `https://api.elfsquad.io/api/2/features?include=Texts&skip=0&take=5`.

```csharp
// Retrieve a list of all features.
static void RetrieveAllFeatures(string token)
{
    using(var client = new HttpClient())
    {
        // Appending ?include=Texts will have the API to include the texts. You can also use skip/take to filter.
        // All the filter parameters are optional. See http://docs.elfsquad.io for more information about filtering options.
        var request = new HttpRequestMessage(HttpMethod.Get, "https://api.elfsquad.io/api/2/features?include=Texts&skip=0&take=5");
        request.Headers.Add("Authorization", $"bearer {token}");
        PrintHTTPRequest(request);

        var response = client.SendAsync(request).Result;

        if(response.IsSuccessStatusCode)
        {
            var features = JsonConvert.DeserializeObject<dynamic>(response.Content.ReadAsStringAsync().Result);
            Console.WriteLine($"Retrieved {features.Count} features.");
            Console.WriteLine(features.First);

            // We can also loop through all the retrieved features.
            //foreach(var feature in features)
            //{
            //    Console.WriteLine(feature.name);
            //}
        }
        else
        {
            throw new HttpRequestException($"Failed HTTP request, server responded with status code: {response.StatusCode}");
        }
    }
}
```

# Creating a new feature

To create a new feature, we first need to create a JSON object. This example creates an anonymous object which is converted to a JSON object. It is possible to include multiple layers of objects, i.e. the feature and the texts can be created in a single request.

All the languages are already available in the API, as defined in ISO 639-1. Simply fill the `languageIso` with the two letter ISO.

The API will return the created model at the end of the request. This contains the assigned ID which can be used later.

```csharp
// Creates a new feature in yourElfsquad Management System, and 
// returns the ID of the newly created feature.
static object CreateFeature(string token)
{
    // This object is serialized to a JSON string, see the raw HTTP content
    // to see what the request looks like.
    var feature = new
    {
        name = "Example feature",
        articleCode = "CODE-123",
        salesPrice = 1000m,
        packingUnit = 1,
        texts = new List<object>()
        {
            new
            {
                languageIso = "en", // 2-letter ISO code, all the languages are already there.
                type = 0, // Description
                value = "Example feature description"
            },
            new
            {
                languageIso = "en",
                type = 1, // Extended description
                value = "Example feature extended description"
            },
            new
            {
                languageIso = "en",
                type = 2, // More info
                value = "Example feature more info"
            }
        },
        cardImageUrl = "https://www.elfsquad.io/wp-content/themes/elfskot/dist/svg/logo-elfskot.svg"
    };

    using (var client = new HttpClient())
    {
        var request = new HttpRequestMessage(HttpMethod.Post, "https://api.elfsquad.io/api/2/features");
        request.Headers.Add("Authorization", $"bearer {token}");
        request.Content = new StringContent(JsonConvert.SerializeObject(feature), Encoding.UTF8, "application/json");
        var response = client.SendAsync(request).Result;

        if (response.IsSuccessStatusCode)
        {
            // The entire feature is stored in 'result'.
            var result = JsonConvert.DeserializeObject<dynamic>(response.Content.ReadAsStringAsync().Result);
            Console.WriteLine($"Successfully created new feature with id: {result.id}");
            return result;
        }
        else
        {
            throw new HttpRequestException($"Failed HTTP request, server responded with status code: {response.StatusCode}");
        }
    }
}
```

# Retrieve a single feature

To retrieve a single feature, call the endpoint `https://api.elfsquad.io/api/2/features/{id}?include=Texts` with the ID of the feature. If you want additional properties, such as texts, they need to be included seperately. If a property is `null`, you probably need to include this in the request.

```csharp
// Retrieve a single feature by ID.
static object RetrieveFeatureById(string token, string id)
{
    using (var client = new HttpClient())
    {
        // Appending ?include=Texts will have the API to include the texts.
        var request = new HttpRequestMessage(HttpMethod.Get, $"https://api.elfsquad.io/api/2/features/{id}?include=Texts");
        request.Headers.Add("Authorization", $"bearer {token}");
        PrintHTTPRequest(request);

        var response = client.SendAsync(request).Result;

        if (response.IsSuccessStatusCode)
        {
            var content = response.Content.ReadAsStringAsync().Result;
            var feature = JsonConvert.DeserializeObject<dynamic>(content);
            Console.WriteLine(feature);
            return feature;
        }
        else
        {
            throw new HttpRequestException($"Failed HTTP request, server responded with status code: {response.StatusCode}");
        }
    }
}
```

# Update an existing feature

Updating an existing feature is almost identical to creating a new feature. Send the feature object to the API with the HTTP PUT method. The API will return the updated feature object.

```csharp
// Updates a feature.
static void UpdateFeature(string token, dynamic feature)
{
    using (var client = new HttpClient())
    {
        // Appending ?include=Texts will have the API to include the texts.
        var request = new HttpRequestMessage(HttpMethod.Put, $"https://api.elfsquad.io/api/2/features");
        request.Headers.Add("Authorization", $"bearer {token}");
        request.Content = new StringContent(JsonConvert.SerializeObject(feature), Encoding.UTF8, "application/json");
        PrintHTTPRequest(request);

        var response = client.SendAsync(request).Result;

        if (response.IsSuccessStatusCode)
        {
            var content = response.Content.ReadAsStringAsync().Result;
            var result = JsonConvert.DeserializeObject<dynamic>(content);
            Console.WriteLine(result);
        }
        else
        {
            throw new HttpRequestException($"Failed HTTP request, server responded with status code: {response.StatusCode}");
        }
    }
}
```

# Delete a feature

To delete a feature, we call the following endpoint `https://api.elfsquad.io/api/2/features/{id}`, where the `id` is the ID of the feature to be deleted. Be aware that if a feature is deleted, it will also be removed from all existing feature models.

```csharp
// Deletes a feature.
static void DeleteFeature(string token, string id)
{
    using (var client = new HttpClient())
    {
        var request = new HttpRequestMessage(HttpMethod.Delete, $"https://api.elfsquad.io/api/2/features/{id}");
        request.Headers.Add("Authorization", $"bearer {token}");
        PrintHTTPRequest(request);

        var response = client.SendAsync(request).Result;

        if (response.IsSuccessStatusCode)
        {
            Console.WriteLine("Feature has been successfully deleted.");
        }
        else
        {
            throw new HttpRequestException($"Failed HTTP request, server responded with status code: {response.StatusCode}");
        }
    }
}
```
