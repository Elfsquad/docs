---
slug: tutorial - custom configurator in Angular
title: Tutorial - Custom configurator in Angular
author: Stan van Rooy
author_title: DevOps @ Elfsquad
author_url: https://github.com/stanvanrooy
author_image_url: https://avatars.githubusercontent.com/u/49564025?v=4
tags: [angular, configurator]
---

In this tutorial, I will provide a quick overview of how to implement
your customer-facing showroom in Angular.

You can find the resulting project in the [showroom-example
repository](https://github.com/elfsquad/showroom-example) on our Github.

> ℹ️ If you’re not familiar with Angular, you can follow the [Angular
> getting started guide](https://angular.io/start).

## Setting up a new Angular project

Create a new Angular project using the Angular CLI.

### Creating the project
```bash
    ng new ShowroomExample --routing=true --style=css --skipTests=true
```

Once that’s finished, you should be able to run the application and open
it on [localhost:4200](http://localhost:4200).

```
    ng serve
```

### Installing dependencies

For this tutorial, we’ll make use of the
[@elfsquad/authentication](https://github.com/elfsquad/authentication)
and [@elfsquad/configurator](https://github.com/elfsquad/configurator)
packages.

These are developed and maintained by Elfsquad.

```bash
    npm install @elfsquad/authentication
    npm install @elfsquad/configurator
```

### Adding some basic html/css

In the `index.html`, we add a little bit of styling:

```html
    <style>
        * {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        }

        body, p {
          margin: 0;
          padding: 0;
        }
    </style>
```

And in the `app.component.html` file, we’ll remove everything but the
`<router-outlet></router-outlet>` tag.

### Creating the configurator context

We communicate with the Elfsquad API through the `ConfiguratorContext`.
We can initialize this class in the `app.module.ts` file. The
configurator context can be used for both anonymous and showrooms that
require a logged in user.

```typescript
    import { NgModule } from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';
    import {ConfiguratorContext, IConfiguratorOptions} from '@elfsquad/configurator';
    import {AuthenticationMethod} from '@elfsquad/configurator/dist/configurator/IConfiguratorOptions';

    import { AppRoutingModule } from './app-routing.module';
    import { AppComponent } from './app.component';
    import { ProductOverviewComponent } from './product-overview/product-overview.component';
    import { FormsModule } from '@angular/forms';

    const options: IConfiguratorOptions = {
      authenticationMethod: AuthenticationMethod.ANONYMOUS,
      tenantId: '5dcd73c7-c0e9-44e8-85f3-dfef7553e8a2',
    };

    const configuratorContext = new ConfiguratorContext(options);

    @NgModule({
      declarations: [
        AppComponent,
        ProductOverviewComponent
      ],
      imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
      ],
      providers: [
        { provide: ConfiguratorContext, useValue: configuratorContext }
      ],
      bootstrap: [AppComponent],
    })
    export class AppModule { }
  ```

If you want to require a logged in user, you can need to change a few
snippets of code in the example above.

1.  Add the `authenticationOptions` to the `configuratorOptions` object:

```typescript
    const options = {
      tenantId: '5dcd73c7-c0e9-44e8-85f3-dfef7553e8a2',
      authenticationMethod: AuthenticationMethod.USER_LOGIN,
      authenticationOptions: {
        clientId: '60a98ec8-c9f7-4b4e-a809-0492f25b8037',
        redirectUri: 'http://localhost:4200',
      }
    };
```

1.  Check if the user is logged in and if not, redirect to the login
    page.


```typescript
    const configuratorContext = new ConfiguratorContext(options);
    configuratorContext.authenticationContext.isSignedIn().then(signedIn => {
      if (signedIn) {
        return;
      }
      configuratorContext.authenticationContext.signIn();
    });
```

> ⚠️ Make sure to replace the `tenantId` with your tenant id

## Creating the product overview page

We start by creating a `ProductOverview` component. This component will
show all configuration models available.

    ng generate component ProductOverview

### Adding the product overview route

Now that we’ve created the component, we should register it as a route,
so our users can access it. You can register the route by adding it to
the `app-routing-module.ts` file.

```typescript
    import { NgModule } from '@angular/core';
    import { RouterModule, Routes } from '@angular/router';
    import {ProductOverviewComponent} from './product-overview/product-overview.component';

    const routes: Routes = [
      { path: '', component: ProductOverviewComponent },
    ];

    @NgModule({
      imports: [RouterModule.forRoot(routes)],
      exports: [RouterModule]
    })
    export class AppRoutingModule { }
```

### Retrieving the configuration models

The first step to creating the product overview is retrieving a list of
available configuration models. We can do this in the `ngOnInit` method
of the `ProductOverview` component.

```typescript
    import { Component, Inject, OnInit } from '@angular/core';
    import { ConfigurationModel, ConfiguratorContext } from '@elfsquad/configurator';

    @Component({
      selector: 'app-product-overview',
      templateUrl: './product-overview.component.html',
      styleUrls: ['./product-overview.component.css']
    })
    export class ProductOverviewComponent implements OnInit {
      public configurationModels: ConfigurationModel[] = [];

      constructor(
        @Inject(ConfiguratorContext) private configuratorContext: ConfiguratorContext,
      ) { }

      ngOnInit(): void {
        this.configuratorContext.getConfigurationModels().then(configurationModels => {
          this.configurationModels = configurationModels.features;
        });
      }
    }
```

The configuration models should now be retrieved when you open the page.

### Displaying the configuration models

To display those models, we create a grid overview in the
`product-overview.component.html` file.

```html
    <div class="product-overview">
      <div *ngFor="let model of configurationModels" class="product-card" [routerLink]="['configure', model.featureModelId]">
        <img [src]="model.imageUrl" />
        <h3 [innerHTML]="model.description"></h3>
      </div>
    </div>
```

And the following CSS:

```css
    div.product-overview {
      padding: 80px;
      display: flex;
      gap: 40px;
      flex-wrap: wrap;
      justify-content: center;
    }

    div.product-overview > div.product-card {
      padding: 8px;
      width: 28%;
      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    }

    div.product-overview > div.product-card > img {
      height: auto;
      width: 100%;
    }
```

## Creating the configurator page

Now that we have a product overview page, we can proceed to build the
actual configurator. This is the page on which users can configure their
model.

Let’s start by creating a `ConfiguratorComponent`

```bash
    ng generate component Configurator
```

And registering a route to access the configurator page. Notice we use a
`:id` parameter in the path. This id can either be the name or the id of
a configuration model.

```typescript
    { path: 'configure/:id', component: ConfiguratorComponent }
```

### Starting a new configuration

Once the user visits the configurator page, we need to start a new
configuration. To do this, we’ll:

1.  Inject the `ActivatedRoute`, from which we can retrieve the
    configuration model id

2.  Use the `ConfiguratorContext` to start a new configuration

3.  Store the new configuration on the `ConfiguratorComponent`

4.  Update `ConfiguratorComponent.configuration` every time the
    configuration is updated.

```typescript
    import { Component, OnInit } from '@angular/core';
    import { ActivatedRoute } from '@angular/router';
    import { Configuration, ConfiguratorContext } from '@elfsquad/configurator';

    @Component({
      selector: 'app-configurator',
      templateUrl: './configurator.component.html',
      styleUrls: ['./configurator.component.css']
    })
    export class ConfiguratorComponent implements OnInit {
      public configuration: Configuration | undefined;

      constructor(
        private route: ActivatedRoute,
        private configuratorContext: ConfiguratorContext
      ) { }

      ngOnInit(): void {
        this.route.params.subscribe(params => {
          this.configuratorContext.newConfiguration(params['id'])
            .then(configuration => {
              this.configuration = configuration;
            });
          this.configuratorContext.onUpdate((e: CustomEvent) => {
            this.configuration = e.detail;
          });
        });
      }
    }
```

The resulting configuration object contains many different fields, all
of which can be explored on
[docs.elfsquad.io](https://docs.elfsquad.io).

This tutorial will focus mainly on steps and displaying the price.

The configuration object has a `steps` property, which contains an array
of all steps. A step contains features, and each feature can contain
*child* features.

    - Title
    - Features
      - Description
      - UnitPrice
      - TotalPrice
      - Type
      - Features (Children of the current feature, recursive)
        - ...
      - ...

### Displaying the steps

We will display only one step at a time. To do this, we’ll add a
`activeIndex` and functions to go the next/previous step to the
`configurator.component.ts` file.

```typescript
      public activeIndex: number = 0;

      public next() {
        this.activeIndex += 1;
      }

      public previous() {
        this.activeIndex -= 1;
      }
```

In the HTML, we’ll iterate overall features in the step and display them
by using the `app-feature` tag. This is a component we’ll create in the
next step.

```html
    <div *ngFor="let step of configuration?.steps ?? []; let i = index">
      <div class="step" [class.active]="i === activeIndex">
        <app-feature [configuration]="configuration" [feature]="feature" *ngFor="let feature of step.features"></app-feature>
      </div>
    </div>

    <div class="footer">
      <span>
        <b>Total price:</b>
        {{ configuration?.totalPrice | currency: 'EUR': true }}
      </span>
      <br />
      <button
        [disabled]="activeIndex === 0"
        (click)="previous()"
      >
        Previous
      </button>
      <button
        [disabled]="activeIndex === (configuration?.steps ?? []).length - 1"
        (click)="next()"
      >
        Next
      </button>
    </div>
```

and CSS

```css
    div.step {
      display: none;
      max-width: 400px;
    }

    div.step.active {
      display: block;
    }

    div.footer {
      margin-top: 12px;
      margin-left: 24px;
    }
```

## Creating the feature component

We show features using the `app-feature` tag in the previous step. This
is a new component that we’re about to implement.

Because of the recursive nature of features, we need to create a new
component for them.

```bash
    ng generate component Feature
```

This component will take a feature as input.

```typescript
    import { Component, Input, OnInit } from '@angular/core';
    import { ConfigurationFeature, ConfiguratorContext } from '@elfsquad/configurator';

    @Component({
      selector: 'app-feature',
      templateUrl: './feature.component.html',
      styleUrls: ['./feature.component.css']
    })
    export class FeatureComponent implements OnInit {
      @Input('feature') feature: ConfigurationFeature | undefined;
      @Input('configuration') configuration: Configuration | undefined;

      constructor( ) { }

      ngOnInit(): void { }
    }
```

### Toggling features on/off

For this example, we’ll only enable toggling features on and off, so
we’ll only have to implement the `toggle()` function.

This function will (de)select an option within the configuration model.

```typescript
      toggle(): void {
        if (!this.feature)
          return;

        if (!this.configuration)
          return;

        const value = this.feature.isSelected ? 0 : 1;
        this.configuration.updateRequirement(
          this.feature.id,
          this.feature.isSelected,
          value
        );
      }
```

### Displaying the feature

For displaying features, we’ll add some HTML to the
`feature.component.html` file.

```html
    <div class="feature">
      <div class="header">
        <span [innerHTML]="feature?.description"></span>
        <input
         type="checkbox"
         [checked]="feature?.isSelected"
         (click)="toggle()"
         *ngIf="feature?.type === 0"
        />
        <input
         type="radio"
         [checked]="feature?.isSelected"
         (click)="toggle()"
         *ngIf="feature?.type === 2"
        />
      </div>
      <span *ngIf="feature?.minValue == feature?.maxValue && feature?.value != 0 && feature?.value != 1">
        {{feature?.value}} {{feature?.unitOfMeasurement}}
      </span>
      <span>{{feature?.unitPrice}}</span>
      <app-feature
        [configuration]="configuration"
        [feature]="f"
        *ngFor="let f of feature?.features"
        ></app-feature>
    </div>
```

And add the css below to `feature.component.css`

```css
    div.feature {
      width: 100%;
      height: 100%;
      margin-left: 24px;
      margin-bottom: 6px;
    }

    div.feature > div.header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
```

## Requesting a quote

Now that we are able to configure a product, we can go ahead and request
a quotation. We’ll add a button to the configurator page:

```html
    <button [routerLink]="['/checkout', configuration?.id]">Request quote</button>
```

### Creating the checkout page

As before, we’ll start by creating the `Checkout` component.

```bash
    ng generate component Checkout
```

and add the route to the `app-routing.module.ts` file. In this route,
the id stands for the configuration id.

```typescript
      { path: 'checkout/:id', component: CheckoutComponent }
```

In the `checkout.component.ts` file, we’ll create a function to request
a quote

```typescript
      public isSubmitted = false;
      public model: QuotationRequest = {};

      requestQuote() {
        this.configuratorContext.requestQuote(this.model).then(_ => {
          this.isSubmitted = true;
        });
      }
```

The checkout page itself, is divided into two sections. One before the
request is submitted, and one afterward:

```html
    <h3>Request quote</h3>

    <div *ngIf="!isSubmitted">
      <form>
        <fieldset>
          <legend>Contact information</legend>
          <label>
            First name:
            <input [(ngModel)]="model.firstName" name="firstName" />
          </label>
          <label>
            Last name:
            <input [(ngModel)]="model.lastName" name="lastName" />
          </label>
          <label>
            Email:
            <input [(ngModel)]="model.email" name="email" />
          </label>
          <label>
            Phone:
            <input [(ngModel)]="model.phoneNumber" name="phone" />
          </label>
          <legend>Company information</legend>
          <label>
            Company name:
            <input [(ngModel)]="model.companyName" name="companyName" />
          </label>
          <label>
            Street:
            <input [(ngModel)]="model.streetName" name="streetName" />
          </label>
          <label>
            City:
            <input [(ngModel)]="model.city" name="city" />
          </label>
          <label>
            Postal code:
            <input [(ngModel)]="model.postalCode" name="state" />
          </label>
          <input type="submit" value="Submit" (click)="requestQuote()" />
        </fieldset>
      </form>
    </div>

    <div *ngIf="isSubmitted">
      <h3>Thank you for your request!</h3>
      <p>We will contact you shortly.</p>
    </div>
```
