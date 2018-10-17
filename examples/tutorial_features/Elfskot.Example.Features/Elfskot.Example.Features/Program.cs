// © Elfskot Product Configurator 2018, All Rights Reserved.
// E-mail:  info@elfskot.com
// Website: http://www.elfskot.com
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;

namespace Elfskot.Example.Features
{
    /// <summary>
    /// This example application demonstrates how to interact with Features. It will show how
    /// to retrieve features, retrieve a single feature, create a new feature, update an existing feature
    /// and deleting a feature.
    /// 
    /// For more information visit http://docs.elfskot.com.
    /// </summary>
    class Program
    {
        static void Main(string[] args)
        {
            // Create a new Elfskot Integration Application in the Elfskot Management System.
            var applicationId = "2ba8916e-c006-46b7-a5ab-a62706f9d9d1";
            var secret = "7mqu1yjl";

            // Request the access token required to do any other requests.
            Console.WriteLine("-- Authorization --");
            var token = RequestAccessToken(applicationId, secret);

            // Retrieve a list of all the features.
            Console.WriteLine("-- Retrieving all features example --");
            RetrieveAllFeatures(token);

            // Create a new feature.
            dynamic feature = CreateFeature(token);

            // Retrieve the new created feature.
            RetrieveFeatureById(token, feature.id.ToString());

            // Update the feature.
            feature.articleCode = "Updated-Code-123";
            UpdateFeature(token, feature);

            // Retrieve the updated feature.
            var updatedFeature = RetrieveFeatureById(token, feature.id.ToString());

            // Delete the feature.
            DeleteFeature(token, feature.id.ToString());

            Console.ReadKey();
        }

        // Retrieve a list of all features.
        static void RetrieveAllFeatures(string token)
        {
            using(var client = new HttpClient())
            {
                // Appending ?include=Texts will have the API to include the texts. You can also use skip/take to filter.
                // All the filter parameters are optional. See http://docs.elfskot.com for more information about filtering options.
                var request = new HttpRequestMessage(HttpMethod.Get, "https://api.elfskot.cloud/api/2/features?include=Texts&skip=0&take=5");
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

        // Creates a new feature in your Elfskot Management System, and 
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
                cardImageUrl = "https://www.elfskot.com/wp-content/themes/elfskot/dist/svg/logo-elfskot.svg"
            };

            using (var client = new HttpClient())
            {
                var request = new HttpRequestMessage(HttpMethod.Post, "https://api.elfskot.cloud/api/2/features");
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

        // Retrieve a single feature by ID.
        static object RetrieveFeatureById(string token, string id)
        {
            using (var client = new HttpClient())
            {
                // Appending ?include=Texts will have the API to include the texts.
                var request = new HttpRequestMessage(HttpMethod.Get, $"https://api.elfskot.cloud/api/2/features/{id}?include=Texts");
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

        // Updates a feature.
        static void UpdateFeature(string token, dynamic feature)
        {
            using (var client = new HttpClient())
            {
                // Appending ?include=Texts will have the API to include the texts.
                var request = new HttpRequestMessage(HttpMethod.Put, $"https://api.elfskot.cloud/api/2/features");
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

        // Deletes a feature.
        static void DeleteFeature(string token, string id)
        {
            using (var client = new HttpClient())
            {
                var request = new HttpRequestMessage(HttpMethod.Delete, $"https://api.elfskot.cloud/api/2/features/{id}");
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

        // Retrieves an access token from the API. This requires an integration application in 
        // the Elfskot Management System. See http://docs.elfskot.com for more information.
        static string RequestAccessToken(string applicationId, string secret)
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

        // Prints all the raw HTTP request information.
        static void PrintHTTPRequest(HttpRequestMessage request)
        {
            Console.WriteLine($"{request.Method} {request.RequestUri}");
            Console.WriteLine($"Authorization: {request.Headers.Authorization.ToString()}");
            Console.WriteLine($"Content:\r\n{request.Content}");
        }
    }
}
