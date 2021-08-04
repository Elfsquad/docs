---
title: Application Events
sidebar_position: 2
---

# Acting on application events

Through `ElfskotApiClient.Events` you subscribe the different application events.

### Example

``` cs
	class Program
    {
        static ElfskotApiClient elfskotApiClient;

        static void Main(string[] args)
        {
            elfskotApiClient = new ElfskotApiClient(new Guid("YOUR APPLICATION ID"), "YOUR SECRET" );
            elfskotApiClient.Events.QuotationRequested += Events_QuotationRequested;
        }

        private static void Events_QuotationRequested(object sender, IQuotationRequestedEventArgs e)
        {
            // Handle the quotation requested event.
        }
    }
```
