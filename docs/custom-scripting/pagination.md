---
title: Pagination in custom scripting
sidebar_position: 3
sidebar_label: Pagination
slug: pagination
---

Our custom scripting utilizes the Data API's pagination feature to efficiently retrieve large datasets, see [api.fetch](global-variables.md#apifetch). Pagination divides the data into manageable pages, improving performance and minimizing server load. The *@odata.nextLink* property supplies a URL to fetch the next page, ensuring optimal performance and resource usage.

## Example
This sample script demonstrate how custom scripting can be leveraged to retrieve all the quotations and not only the first 500. 

``` js
async function fetchAll(url) {
    let nextUrl = url;
    const result = [];
    while (nextUrl) {
        let response = await api.fetch(nextUrl);
        result.push(...response.body.value);
        nextUrl = response.body["@odata.nextLink"];
    }
    return result;
}
const result = fetchAll(`data/1/quotations`);
```
