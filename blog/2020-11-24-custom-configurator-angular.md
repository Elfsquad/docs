---
slug: tutorial - custom configurator in Angular
title: Tutorial - Custom configurator in Angular
author: Johannes Heesterman
author_title: Lead Software Engineer @ Elfsquad
author_url: https://github.com/johannesheesterman
author_image_url: https://avatars.githubusercontent.com/u/7443666?v=4
tags: [angular, configurator]
---

## Custom configurator in Angular

In this tutorial I will provide a quick overview of how to implement your own customer-facing configurator in Angular.

The resulting project is also available at github [https://github.com/Elfsquad/tutorials-angular-configurator](https://github.com/Elfsquad/tutorials-angular-configurator).

If you are not familiar with Angular you should follow the Getting Started guide at [https://angular.io/start ]( https://angular.io/start ).

### Setup the Angular project

Create a new Angular project using your terminal

```bash
ng new BrightwaterConfigurator --routing=true --style=css --skipTests=true
```

In the index.html file add a reference to the Elfskot JS library and some basic CSS.

```html
<script src="https://elfskot.azureedge.net/elfskot-v0.1.js"></script>
```

```html
<style>
    body{
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    }
</style>
```



Remove all the contents of the app.component.html file but keep the router-outlet element

```html
<router-outlet></router-outlet>
```

### Product overview page

First we create a component that will hold our product overview page using the *ng generate* command

```bash
ng generate component Products
```

#### Product overview route

Now that we have the Products component, we should register it as the base route. In the *app-routing-module.ts* file add a route to the Products component

```typescript
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {  path: '', component: ProductsComponent } // <-- Route to the Products component
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

#### Product overview component

The first step to creating our product overview is the retrieve a list of all available configuration models. 
In the *ngOnInit* method of the *products.component.ts* file call the *Elfskot.configurator.getConfigurationModels* method

```typescript
import { Component, OnInit } from '@angular/core';

declare var Elfskot;

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any[] = [];

  constructor() { }

  ngOnInit() {
    Elfskot.configurator.getConfigurationModels('en', (productOverview) => {
      this.products = productOverview.features;
    });
  }

}
```

The *Elfskot.configurator.getConfigurationModels* method takes 2 parameters

* The preferred language ISO
* A callback function

The callback function provides a object, with different elements, that can be used to setup your product selection page. For now we will only be using the features.

Next we add HTML and CSS to the *ProductsComponent*.

In the *products.component.html* file add

```html
<div class="product-overview">
  <div *ngFor="let product of products" class="product-card" [routerLink]="['configure', product.featureModelId]">
    <img [src]="product.imageUrl" />
    <h3 [innerHTML]="product.description"></h3>
  </div>
</div>
```

In the *products.component.css* file add

```css
.product-overview {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
.product-card {
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    cursor: pointer;
    margin:12px;
    width:320px;
}
    .product-card h3{
        padding:12px;
    }
    .product-card img{
        width:100%;
        height:auto;
    }

.product-card:hover {
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}
```

If we were to run the Angular project now we would get the following result:

![Product overview](/img/tutorial/angular-configurator/productoverview.PNG)



### Configurator page

Now that we have a product selection page, we can proceed to build the actual configurator. 

First add a ConfiguratorComponent

```bash
ng generate component Configurator
```

Register a configuration route in the *app-routing.module.ts*

```typescript
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ConfiguratorComponent } from './configurator/configurator.component';

const routes: Routes = [
  {  path: '', component: ProductsComponent },
  {  path: 'configure/:id', component: ConfiguratorComponent } // <-- Route to the Configurator component
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

In the configure route we added a *id* parameter that will be used to hold the identifier of the selected configuration model in the product overview page.

#### Configurator Component

First add a declaration for the global Elfskot variable. Your *configurator.component.ts* file should look like this

```typescript
import { Component, OnInit } from '@angular/core';

declare var Elfskot;

@Component({
  selector: 'app-configurator',
  templateUrl: './configurator.component.html',
  styleUrls: ['./configurator.component.css']
})
export class ConfiguratorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
```

Add the reference to the current route to the constructor and a private field to hold the configuration object we will retrieve later.

```typescript
private configuration = null;

constructor(private route: ActivatedRoute) { }
```

Now in the *ngOnInit* we will add a listener for parameter changes in the route. If the route changes  we will start a new configuration session

```typescript
ngOnInit() {
    this.route.params.subscribe((params) => {
      this.startNewSession(params['id']);
	});
}
```

Add a private method to start a new configuration session

```typescript
private startNewSession(id: string) : void {
	Elfskot.configurator.startNewConfiguration(id, 'en', (configuration) => {
        this.configuration = configuration;
    });
}
```

The *Elfskot.configurator.startNewConfiguration* method takes 3 parameters

* The identifier of the configuration model
* A language iso
* Callback method that takes the new configuration object

The resulting configuration object contains many different fields that can be used to construct the interface of your configurator. In this tutorial we will be mainly focused on the *totalPrice* and *steps* fields.

The *steps* field should be used to construct the user interface. The *steps* are structured as follows

* Steps
  	* Title (optional)
  	* Type (0 = Hotspots, 1 = 3D)
  	* Features
        	* Description
        	* UnitPrice
        	* TotalPrice
        	* Type (0 = Optional, 1 = Mandatory, 2 = Alternative, 3 = Or)
        	* Features (Children of the current feature, recursive)
            		* ..
        	* ...
  	* ...

To listen to changes in the configuration session we can add a configurationUpdated event listener in the *ngOnInit* function

```typescript
ngOnInit() {
    this.route.params.subscribe((params) => {
      this.startNewSession(params['id']);
    });

    Elfskot.on('configurationUpdated', (configuration) => {
      this.configuration = configuration;
    });
}
```

The *configurationUpdated* event returns the entire updated configuration object including updated prices etc.



The complete ConfiguratorComponent should look like this

```typescript
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

declare var Elfskot;

@Component({
  selector: 'app-configurator',
  templateUrl: './configurator.component.html',
  styleUrls: ['./configurator.component.css']
})
export class ConfiguratorComponent implements OnInit {

  private configuration = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.startNewSession(params['id']);
    });

    Elfskot.on('configurationUpdated', (configuration) => {
      this.configuration = configuration;
    });
  }

  private startNewSession(id: string) : void {
    Elfskot.configurator.startNewConfiguration(id, 'en', (configuration) => {
      this.configuration = configuration;
    });
  }

}
```

##### Configurator Option component

Because of the recursive nature of the *Steps -> Features -> Features* structure we will need to create a new Angular component to hold the options of the configurator.

Add a ConfiguratorOption component to the project

```bash
ng generate component ConfiguratorOption
```

The ConfiguratorOption component will take a Feature object as input and act on all the user interactions for this feature.

```typescript
import { Component, OnInit, Input } from '@angular/core';

declare var Elfskot;

@Component({
  selector: 'app-configurator-option',
  templateUrl: './configurator-option.component.html',
  styleUrls: ['./configurator-option.component.css']
})
export class ConfiguratorOptionComponent implements OnInit {

  @Input('feature') feature;

  constructor() { }

  ngOnInit() {
  }

  toggle(): void {
    let value = 1;
    if (this.feature.isSelected) {
      value = 0;
    }

    Elfskot.configurator.updateRequirement(this.feature.id, value);
  }
}
```

The *toggle* function calls *Elfskot.configurator.updateRequirement* which takes 2 parameters

* The identifier of the selected element
* A value, which should be a number

In the *configurator-option.component.html* file we define a template that can act on the different types of features

```html
<div class="configurator-option" *ngIf="feature.type != 1 || feature.features.length > 0">
  <b *ngIf="feature.type == 1" [innerHTML]="feature.description"></b>

  <label *ngIf="feature.type == 0 || feature.type == 3">
    <img [src]="feature.imageUrl" />
    <input type="checkbox" [checked]="feature.isSelected" (change)="toggle()" />
    <span [innerHTML]="feature.description"></span>
    <small>{{feature.unitPrice}}</small>
  </label>

  <label *ngIf="feature.type == 2">
    <img [src]="feature.imageUrl" />
    <input type="radio" [checked]="feature.isSelected" (change)="toggle()" />
    <span [innerHTML]="feature.description"></span>
    <small>{{feature.unitPrice}}</small>
  </label>
  
  <app-configurator-option *ngFor="let child of feature.features" [feature]="child"></app-configurator-option>
</div>
```

In the *configurator-option.component.css* file add some CSS to aid in displaying the structure of the configuration model

```css
img {
    width:24px;
    height:24px;
    border-radius: 50%;
}

label{
    display: flex;
    align-items: center;
    cursor: pointer;
}

.configurator-option{
    padding-left:32px;
    margin-bottom: 6px;
    position: relative;
}

small {
    font-style: italic;
    font-size: 10px;
    color: #f00;
}
```

#### Add the ConfiguratorOption component to the ConfiguratorComponent

Now that we have the ConfiguratorOption component defined, we can add it to the configurator page.

In the *configurator.component.html* we create a loop that will iterate over the different steps of the configuration model and call the ConfiguratorOption component for each rootfeature in the step.

```html
<div *ngIf="configuration" class="configurator-container">

    <h2 [innerHTML]="configuration.root.description"></h2>
  
    <ng-container *ngFor="let step of configuration.steps">
  
      <app-configurator-option *ngFor="let feature of step.features" [feature]="feature"></app-configurator-option>
  
    </ng-container>
    
    <h3>Total price <small>{{configuration.totalPriceExclVat}}</small></h3>
  
    <button routerLink="/checkout">Request quote</button>
</div>
```

If we were to open a configuration now it would look like this

![Configurator](/img/tutorial/angular-configurator/configurator.PNG)

### Checkout page

Now that we are able to configure a product, we can go ahead and request a quotation.

Initialize the CheckoutComponent

```bash
ng generate component Checkout
```

And register a route to the CheckoutComponent in the *app-routing.module.ts* file

```typescript
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ConfiguratorComponent } from './configurator/configurator.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  {  path: '', component: ProductsComponent },
  {  path: 'configure/:id', component: ConfiguratorComponent },
  {  path: 'checkout', component: CheckoutComponent } // <-- Route to the checkout page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

In the *checkout.component.ts* file we create a function that will call the *Elfskot.configurator.requestQuote* function and handle its response.

```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

declare var Elfskot;

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
 
  configuration = null;
  isSubmitted = false;
  
  constructor(private router: Router) { }

  ngOnInit() {
    if (!Elfskot.configurator.configuration){
      this.router.navigateByUrl('/');
      return;
    }

    this.configuration = Elfskot.configurator.configuration;
  }

  requestQuote(model) {
    Elfskot.configurator.requestQuote(model, () => {
      this.isSubmitted = true;
    });
  }

}
```

The *checkout.component.html* file is divided in 2 sections: *before the request is submitted* and *after the request is submitted*

```html
<h3 *ngIf="configuration">Request quote <small>{{configuration.root.description}}</small></h3>

<div *ngIf="!isSubmitted">

  <form #checkoutForm="ngForm" (ngSubmit)="requestQuote(checkoutForm.value)">
    <fieldset>
      <legend>Request quote</legend>
      <label>First name <input type="text" name="firstName" ngModel /></label>    
      <label>Last name <input type="text" name="lastName" ngModel /></label>    
      <label>Company name <input type="text" name="companyName" ngModel /></label>  
      <label>Phone number <input type="text" name="phoneNumber" ngModel /></label>    
      <label>Email <input type="email" name="email" ngModel /></label>    
      <label>Street <input type="email" name="streetName" ngModel /></label>    
      <label>Postal code <input type="email" name="postalCode" ngModel /></label>

      <input type="submit" value="Submit" />
    </fieldset>
  </form>
  
</div>

<div *ngIf="isSubmitted">
  <h2>Thank you for your quotation request!</h2>
</div>
```

### Result

![Result](/img/tutorial/angular-configurator/configurator-result.gif)