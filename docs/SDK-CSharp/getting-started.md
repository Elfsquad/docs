---
title: Getting Started
sidebar_position: 1
---

# Get started using the SDK (C#)

## Installation

Our SDK is available as a [NuGet package](https://www.nuget.org/packages/Elfskot.Connect.SDK). Install the SDK using the NuGet package manager:
`Install-Package Elfskot.Connect.SDK`

## Initializing the ElfskotApiClient

All interactions with the Elfskot API are done using the *ElfskotApiClient*:

```csharp
var elfskotApiClient = new ElfskotApiClient(new Guid("YOUR APPLICATION ID"),"YOUR SECRET");
```

## Data management

Data management interactions are done through ManagementResources that can be directly accessed through `elfskotApiClient.Management`.

### Retrieving entities

To retrieve a entity by its ID you can use the `GetById`  method:

```csharp
var contact = elfskotApiClient
    .Management
    .CrmContacts
    .GetById(new Guid("56448abb-f00e-45a8-b1ac-08c62c8ed8f5"));
```

To retrieve multiple entities you can use the `Get` method:

```csharp
var contacts = elfskotApiClient
	.Management
    .CrmContacts
    .OrderBy(c => c.CreatedDate)
    .Limit(10)
    .Get();
```

#### Including referenced entities

By default the API will not include referenced entities. So for example if you want to retrieve the lines of quotation you can use the `Include` method:

```csharp
var quotation = elfskotApiClient
    .Management
    .Quotations
    .Include(q => q.Lines) // <-- Reference the entity you want to include.
    .GetById(new Guid("56448abb-f00e-45a8-b1ac-08c62c8ed8f5"));

foreach(var line in quotation.Lines)
{
}
```

### Inserting entities

To insert entities you can use the `Create` and `BulkCreate` methods:

```csharp
var newCrmAccount = new CrmAccount()
	{
		CompanyName = "Brightwater Industries"
	};

newCrmAccount = elfskotApiClient
	.Management
	.CrmAccounts
	.Create(newCrmAccount);

var newIdentifier = newCrmAccount.Id;
```

### Updating entities

To update a entity you can use the `Update` or `BulkUpdate` methods:

```csharp
quotation.Deliverydate = DateTimeOffset.Now;
elfskotApiClient
	.Management
	.Quotations
	.Update(quotation);
```

### Deleting entities

To delete a entity you can use the `Delete` method:

```csharp
elfskotApiClient
	.Management
	.CrmContacts
	.Delete(new Guid("56448abb-f00e-45a8-b1ac-08c62c8ed8f5"));
```