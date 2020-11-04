By including the Elfsquad JavaScript library in your web project the `Elfsquad` object becomes globally available in your site.

The `Elfsquad` object consists of three parts:

 * [Configurator](#Configurator)	
    * [Viewer3D](#Viewer3D)
 * [DataManagement](#DataManagement)
 * [UserManager](#UserManager)

## Configurator

`Elfsquad.configurator` is used for all configuration related interactions.

### Methods

#### getConfigurationModels(language)

Retrieves a production selection model that can be used to create a model selection page.

##### Input

| Parameter | Type   | Description                         |
| --------- | ------ | ----------------------------------- |
| language  | string | Two-letter ISO code of the language |

##### Output

##### Example

```javascript
Elfsquad
	.configurator
	.getConfigurationModels('en')
	.then((productSelectionModel) => {
    	/* ... */ 
	});
```

#### startNewConfiguration(id,language)

Starts a new configuration session and returns a promise with the [configuration object](/models#configuration).

##### Input

| Parameter | Type   | Description                           |
| --------- | ------ | ------------------------------------- |
| id        | string | Identifier of the configuration model |
| language  | string | Two-letter ISO code of the language   |

##### Output

A promise with the  [configuration object](/models#configuration).

##### Example

```javascript
Elfsquad
    .configurator
    .startNewConfiguration('<INSERT ID>', 'en')
    .then((configuration) => { 
    	/* ... */ 
	});
```

#### changeLanguage(language, callback)

Changes the language of the configuration session and calls the callback function with the updated [configuration object](/models#configuration).

##### Input

| Parameter | Type     | Description                                                  |
| --------- | -------- | ------------------------------------------------------------ |
| language  | string   | Two-letter ISO code of the language                          |
| callback  | function | Function that is called with the updated configuration object |

##### Output

Callback function is called the  [configuration object](/models#configuration) as a parameter.

##### Example

```javascript
Elfsquad
    .configurator
    .changeLanguage('en', (updatedConfiguration) => {
    	/* ... */
	});
```

#### updateRequirement(id, value, ignoreConflicts, isSelection)

Update the user requirement for a given configuration feature.

##### Input

| Parameter       | Type    | Description                                                  |
| --------------- | ------- | ------------------------------------------------------------ |
| id              | string  | Identifier of the configuration feature to update            |
| value           | number  | Value to set. If the requirement is a selection, the value should be 1 for true and 0 for false. |
| ignoreConflicts | boolean | When ignoring conflicts, conflicts will be resolved automatically. |
| isSelection     | boolean | Value indicating whether the requirement is a selection change or value change. |

##### Output

A promise with the  [configuration object](/models#configuration).

##### Example

```javascript
Elfsquad
    .configurator
    .updateRequirement('<INSERT ID>', 1, false, true)
    .then((updatedConfiguration) => { 
    	/* ... */ 
	});
```

#### requestQuote(form, callback)

Request a quotation for the configuration.

##### Input

| Parameter | Type     | Description                                                  |
| --------- | -------- | ------------------------------------------------------------ |
| form      | object   | Object containing quotation request data (see below).        |
| callback  | function | Function that is called when the quotation request was successful. |

###### Form object

| Parameter      | Type   |
| -------------- | ------ |
| firstName      | string |
| lastName       | string |
| lastNamePrefix | string |
| salutation     | string |
| email          | string |
| city           | string |
| postalCode     | string |
| streetName     | string |
| houseNumber    | string |
| countryIso     | string |
| languageIso    | string |
| phoneNumber    | string |
| phoneNumber2   | string |
| companyName    | string |
| remarks        | string |

### Properties

## Viewer3D

The Viewer3D object is used to initialize and interact with the 3D viewer. The Viewer3D object is accessible through `Elfsquad.configurator.viewer3D`.

### Methods

#### init3DViewer(element, configuration, callback)

Takes a HTML element and turns in into a 3D viewer.

##### Input

| Parameter     | Type                                   | Description                                                  |
| ------------- | -------------------------------------- | ------------------------------------------------------------ |
| element       | HTMLElement                            | Reference to a HTML element that should be turned into the 3D viewer |
| configuration | [Configuration](/models#configuration) | The current configuration object                             |
| callback      | Function                               | Function that is called when the loader is finished loading  |

## DataManagement

`Elfsquad.dataManagement` is used for retrieving/editing master data.

### Methods

### Properties

## UserManager

`Elfsquad.userManager` is used for authentication/authorization related interactions.

### Methods

#### getUser()

Retrieves the oidc client user object. For more info see [https://github.com/IdentityModel/oidc-client-js/wiki](https://github.com/IdentityModel/oidc-client-js/wiki).

##### Output

Returns the [oidc client User object](https://github.com/IdentityModel/oidc-client-js/wiki#user)

#### loginRedirect()

Invokes the redirection login flow through the oidc-client. For more info see [https://github.com/IdentityModel/oidc-client-js/wiki](https://github.com/IdentityModel/oidc-client-js/wiki).

#### logout()

Invokes the redirection logout flow through the oidc-client. . For more info see [https://github.com/IdentityModel/oidc-client-js/wiki](https://github.com/IdentityModel/oidc-client-js/wiki).

### Properties

#### _oidcUserManager

Reference to the [OIDC user manager object](https://github.com/IdentityModel/oidc-client-js/wiki).

