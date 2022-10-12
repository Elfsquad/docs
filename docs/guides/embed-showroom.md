---
title: Embedding the showroom
sidebar_position: 2
sidebar_label: Embedding the showroom
slug: ./embed-showroom
---

The easiest way to embed the Elfsquad showroom application into your existing website, is to leverage the HTML iframe APIs.

To embed the product selection page, you point to the `/products` endpoint. In case of the Automotive demo environment this would look like:
``` html
<iframe src="https://automotive.elfsquad.io/products"></iframe>
```

You can also directly embed a the configurator for a specific model by pointing to the `/configure/{PRODUCT_NAME}` endpoint. For example:
``` html
<iframe src="https://automotive.elfsquad.io/configure/Elfsquad carrosserie"></iframe>
```

## Override default 'Add to quotation' action
Sometimes it might not be enough to just embed the showroom, and you want to override the existing 'Add to quotation' action. This could for example be useful if you are embedding the showroom in an existing ecommerce platform, and only want to leverage the Elfsquad configuration capabilities.

To do this you can add the `?orderentry=true` query parameter to the iframe src. For example:
``` html
<iframe src="https://automotive.elfsquad.io/configure/Elfsquad carrosserie?orderentry=true"></iframe>
```
Now clicking on the default primary action 'Add to quotation' will no longer redirect the user to a overview page, but instead submit a message using the JavaScript [postMessage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage).

To listen to this message, you could do something like: 
``` javascript
window.addEventListener('message', function (e) {
    try {
        var messageObject = JSON.parse(e.data);
        if (!messageObject) return;
        if (messageObject['action'] != 'createQuotation') return;
        onQuotationRequested(messageObject['argument']);
    } catch { }
}, false);
```

A complete example embedding the Automotive showroom:
``` html
<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <style>
            body,
            html {
                width: 100%;
                height: 100%;
                margin: 0px;
                padding: 0px;
            }

            body {
                display: flex;
                flex-direction: column;
            }

            iframe {
                flex: 1;
                border: none;
            }
        </style>
    </head>

    <body>

        <iframe src="https://automotive.elfsquad.io/configure/Elfsquad carrosserie?orderentry=true"></iframe>
        <script>
            // TODO: change these fields
            const TENANT_ID = '6fd356f8-b46f-4683-825d-cc17cc7fb73d'; // This ID can be found on the Integrations page of the EMS (https://ems.elfsquad.io/integration).
            const ELFSQUAD_DOMAIN = 'https://automotive.elfsquad.io'

            window.addEventListener('message', function (e) {
                try {
                    var messageObject = JSON.parse(e.data);
                    if (!messageObject) return;
                    if (messageObject['action'] != 'createQuotation') return;
                    onQuotationRequested(messageObject['argument']);
                } catch { }
            }, false);

            function onQuotationRequested(configurationId) {
                getConfigurationOverview(configurationId);
            }

            function getConfigurationOverview(configurationId) {
                fetch(`https://api.elfsquad.io/api/3.0/configurator/${configurationId}/overview`, {
                    headers: {
                        'x-elfsquad-id': TENANT_ID,
                        'x-elfsquad-domain': ELFSQUAD_DOMAIN
                    }
                }).then(async (response) => {
                    const overview = await response.json();
                    console.log('overview', overview);
                })
            }
        </script>
    </body>

</html>
```