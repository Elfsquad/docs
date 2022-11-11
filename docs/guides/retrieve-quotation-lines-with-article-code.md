---
title: Retrieve all quotation lines with an article code
sidebar_position: 3
sidebar_label: Retrieve all quotation lines with an article code
slug: ./retrieve-quotation-lines-with-article-code
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info
This guide assumes you've already familiarized yourself with the
[Authentication](http://localhost:3000/docs/authentication/) page,
pagination and filtering.
:::

We'll be using the [Data API]("/docs/apis/data-api") to retrieve
quotation lines from Elfsquad.

The `QuotationLines` endpoint is available for querying quotation lines.
This endpoint supports pagination and filtering.

This endpoint returns a list of `QuotationLine` objects.

### Call the `QuotationLines` endpoint
In this guide, we will call the endpoint with two filters:

1. `QuotationId eq 0c20acfd-33c1-43e9-84e4-09a6002e0b44`, which means
   only lines with a quotation id equal to the provided id should be
   returned.
2. `ArticleCode ne null`, which means only lines where the article code
   is not equal to null should be returned.

<Tabs
  defaultValue="csharp"
  values={[
    { label: 'C#', value: 'csharp', },
    { label: 'cURL', value: 'curl', },
  ]
}>

  <TabItem value="csharp">

  ```csharp
var client = new HttpClient();
client.BaseAddress = new Uri("https://api.elfsquad.io");
client.DefaultRequestHeaders.Add("Authorization", "Bearer YOUR_TOKEN");

var quotationId = Guid.NewGuid();
var queryParameters = new Dictionary<string, string>
{
    { "$filter", $"QuotationId eq {quotationId} and ArticleCode ne null" }
};
var url = QueryHelpers.AddQueryString("/data/1/QuotationLines", queryParameters);
var response = await client.GetAsync(url);
var content = await response.Content.ReadAsStringAsync();
  ```
  </TabItem>

  <TabItem value="curl">

  ```bash
  curl --request GET 'https://api.elfsquad.io/data/1/QuotationLines?$filter=QuotationId eq ee0a67a0-5a65-4868-b0a0-306c4cd3d62d and ArticleCode ne null' \
       --header 'Authorization: Bearer YOUR_TOKEN'
  ```
  </TabItem>

</Tabs>

### Response

```json
{
    "@odata.context": "https://api.elfsquad.io/data/1/$metadata#QuotationLines",
    "value": [
        {
            "quotationId": "0c20acfd-33c1-43e9-84e4-09a6002e0b44",
            "lineNumber": 2,
            "articleCode": "CPQ-1",
            "deliverydate": null,
            "description": "Optional",
            "featureId": "6e113907-9abe-4523-fed3-08da071773b4",
            "featureModelNodeId": "a4cadf3c-a364-4da0-1a70-08dac3b7351f",
            "quantity": 1.000000,
            "imageValue": "",
            "textValue": null,
            "parentLineId": "493159a4-2593-45fa-b022-9895e8173bd7",
            "groupedRootLine": false,
            "groupId": "ce06aa9f-de89-4603-bf12-1fe43477e9a3",
            "parentGroupId": null,
            "groupOrder": 1,
            "groupTitle": null,
            "groupAmount": 1,
            "addedFromConfiguration": true,
            "configurationId": "7135a558-f24c-4683-9d00-e77cf1afd32d",
            "vatId": "0852e4d6-0937-47d3-e6cf-08da1d4a0d68",
            "discountPct": 0.000000,
            "marginPct": 0,
            "purchasePriceDiscountPct": 0.000000,
            "groupDiscountPct": 0.000000,
            "defaultPurchasePriceDiscountPct": 0,
            "unitPrice": 0.000000,
            "originalUnitPrice": 0.000000,
            "id": "846c75ae-b713-40ae-ab5c-82e162748be1",
            "createdDate": "2022-11-11T09:22:52.7186648Z",
            "updatedDate": "0001-01-01T00:00:00Z",
            "organizationId": null,
            "reference": null,
            "creatorId": "9a67511c-3356-4b03-fe12-08da134972d2",
            "customField1": null,
            "customField2": null,
            "customField3": null,
            "customField4": null,
            "customField5": null
        }
    ]
}
```

