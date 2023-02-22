---
sidebar_position: 5
---

# Webhooks

Webhooks allow you to build integrations which subscribe to certain events in Elfsquad. When one of those events is triggered, we'll send a HTTP POST payload to the webhook's configured `CallbackUrl`.

## Events

| Name                | Description                                                  |
| ------------------- | ------------------------------------------------------------ |
| quotation.requested | Triggered when a new quotation is requested in the showroom. |
| quotation.submitted | Triggered when a quotation is submitted.                     |
| quotation.accepted  | Triggered when a quotation is accepted.                      |
| quotation.verified  | Triggered when a quotation is verified.                      |

### Event response examples

This section provides an overview of different examples of response payloads.

#### quotation.requested, quotation.submitted, quotation.accepted, quotation.verified

```json
{
    "quotationId": "56c4942c-d9c4-49db-beec-c1afcb1041c7",
    "userId": "690dfb4a-6a8c-4816-b33e-f1f4565eb770"
}
```



## Creating a webhooks subscription

To create a new webhooks subscription you send a HTTP POST request:

**URI:** `POST https://api.elfsquad.io/api/2/webhooks`

**Content-Type:** application/json

**Body**:

```json
{
	"identifier": "2313449eb71a4abb3df934eec91712e",
	"topic": "quotation.submitted",
    "callbackUrl": "https://example.com/subscriptions/quotationrequested"
}
```

#### Request payload

| Name        | Type     | Description                                                  |
| ----------- | -------- | ------------------------------------------------------------ |
| Identifier  | `string` | A unique identifier for this webhook subscription. The identifier can be used to unsubscribe the webhook. |
| Topic       | `string` | The name of the event you wish to subscribe to.              |
| CallbackUrl | `string` | A url that will be called when the subscribed event is triggered. |



## Handling a webhooks response

When the subscribed event is triggered we will send a POST request to the `callbackUrl` with the following payload:

```json
{
    "topic": "quotation.submitted",
    "content": {
        "quotationId": "56c4942c-d9c4-49db-beec-c1afcb1041c7",
        "userId": "690dfb4a-6a8c-4816-b33e-f1f4565eb770"
    }
}
```

### Webhook response payload

| Name    | Type     | Description                                                  |
| ------- | -------- | ------------------------------------------------------------ |
| Topic   | `string` | The name of the event that was triggered.                    |
| Content | `object` | Each event has a different response object. See the section events for a detailed description. |



## Unsubscribing a webhook

To delete a webhooks subscription you send a HTTP DELETE request:

**URI:** `DELETE https://api.elfsquad.io/api/2/webhooks/{identifier}`
