export default [
  {
    "methodName": "constructor",
    "description": "Initializes a new instance with the provided options.",
    "code": "import { ConfiguratorContext, AuthenticationMethod } from '@elfsquad/configurator';\n\nconst context = new ConfiguratorContext({\n  authenticationMethod: AuthenticationMethod.ANONYMOUS,\n  tenantId: 'your-tenant-id',\n});\n",
    "parameters": [
      {
        "name": "_options",
        "type": "IConfiguratorOptions",
        "description": "The options that are used to configure the context.",
        "required": true,
        "parameters": [
          {
            "name": "authenticationMethod",
            "type": "AuthenticationMethod | undefined",
            "description": "The authentication method that should be used. The default is ANONYMOUS.",
            "required": false
          },
          {
            "name": "tenantId",
            "type": "string | undefined",
            "description": "The tenant id of the tenant that the configurator should be loaded for. This is required when the authentication method is ANONYMOUS or ANONYMOUS_AND_USER_LOGIN.",
            "required": false
          },
          {
            "name": "tenantDomain",
            "type": "string | undefined",
            "description": "The registered showroom domain of the tenant. This is required for all ANONYMOUS requests.",
            "required": false
          },
          {
            "name": "authenticationContext",
            "type": "AuthenticationContext | undefined",
            "description": "Optionally use your own authentication context, if you are already using the @link{elfsquad/authentication} package.",
            "required": false
          },
          {
            "name": "authenticationOptions",
            "type": "IAuthenticationOptions | undefined",
            "description": "Optionally provide authentication options to override the defaults.",
            "required": false
          },
          {
            "name": "apiUrl",
            "type": "string | undefined",
            "description": "Define the base url of the configurator. Defaults to api.elfsquad.io.",
            "required": false
          }
        ]
      }
    ],
    "returns": {
      "type": "void",
      "description": ""
    }
  },
  {
    "methodName": "getConfigurationModels",
    "description": "Retrieve the available configuration models, categories & languages for the current showroom & user.",
    "code": "const context = new ConfiguratorContext();\nconst configurationModels = await context.getConfigurationModels();\nconsole.log('Models: ', configurationModels.features);\nconsole.log('Categories: ', configurationModels.categories);\nconsole.log('Languages: ', configurationModels.languages);\n",
    "parameters": [
      {
        "name": "languageIso",
        "type": "string | undefined",
        "description": "the language iso will be used for setting feature texts in the DTO.",
        "required": false,
        "parameters": []
      }
    ],
    "returns": {
      "type": "Promise<ConfigurationModels>",
      "description": "DTO containing the configuration models, categories & languages."
    }
  },
  {
    "methodName": "newConfiguration",
    "description": "Start a new configuration with the provided feature model id, feature model name or configuration code.",
    "code": "const context = new ConfiguratorContext();\nconst feautureModelName = 'YourFeatureModelName';\nconst configuration = await context.newConfiguration(feautureModelName);\n",
    "parameters": [
      {
        "name": "name",
        "type": "string",
        "description": "The feature model id, feature model name or configuration code.",
        "required": true,
        "parameters": []
      },
      {
        "name": "language",
        "type": "string",
        "description": "The language to start the configuration in.",
        "required": true,
        "parameters": []
      },
      {
        "name": "preview",
        "type": "boolean",
        "description": "Whether the configuration should be started in preview mode.",
        "required": true,
        "parameters": []
      },
      {
        "name": "includeSearchbarResults",
        "type": "boolean",
        "description": "Whether results in display type searchbar should be included or not.",
        "required": true,
        "parameters": []
      }
    ],
    "returns": {
      "type": "Promise<Configuration>",
      "description": "The new configuration."
    }
  },
  {
    "methodName": "openConfiguration",
    "description": "Open an existing configuration with the provided configuration id or configuration code.",
    "code": "const context = new ConfiguratorContext();\nconst configurationId = 'YourConfigurationId';\nconst configuration = await context.openConfiguration(configurationId);\n",
    "parameters": [
      {
        "name": "configurationId",
        "type": "string",
        "description": "The configuration id or configuration code.",
        "required": true,
        "parameters": []
      },
      {
        "name": "includeSearchbarResults",
        "type": "boolean",
        "description": "Whether results in display type searchbar should be included or not.",
        "required": true,
        "parameters": []
      }
    ],
    "returns": {
      "type": "Promise<Configuration>",
      "description": "The opened configuration."
    }
  },
  {
    "methodName": "getSettings",
    "description": "Retrieve the settings for the current showroom.",
    "code": "const context = new ConfiguratorContext();\nconst settings = await context.getSettings();\nconsole.log('Settings: ', settings);\n",
    "parameters": [
      {
        "name": "language",
        "type": "string",
        "description": "The language is used for retrieving localized texts.",
        "required": true,
        "parameters": []
      }
    ],
    "returns": {
      "type": "Promise<Settings>",
      "description": "The settings for the current showroom & user."
    }
  },
  {
    "methodName": "getLayout2d",
    "description": "Retrieve the 2D layout for a coniguration. The 2dlayout can be used for visualizing the configuration in a 2D view.",
    "code": "const context = new ConfiguratorContext();\nconst layout2d = await context.getLayout2d();\nconsole.log('Layout2d: ', layout2d);\n",
    "parameters": [
      {
        "name": "configurationId",
        "type": "string | null",
        "description": "The configuration id. If not provided, the root configuration id will be used.",
        "required": true,
        "parameters": []
      },
      {
        "name": "stepId",
        "type": "string",
        "description": "The step id.",
        "required": true,
        "parameters": []
      }
    ],
    "returns": {
      "type": "Promise<Layout2d[]>",
      "description": "The 2D layout for the configuration."
    }
  },
  {
    "methodName": "getLayout3d",
    "description": "Retrieve the 3D layout for a coniguration. The 3dlayout can be used for visualizing the configuration in a 3D view.",
    "code": "const context = new ConfiguratorContext();\nconst layout3d = await context.getLayout3d();\nconsole.log('Layout3d: ', layout3d);\n",
    "parameters": [
      {
        "name": "configurationId",
        "type": "string | null",
        "description": "The configuration id. If not provided, the root configuration id will be used.",
        "required": true,
        "parameters": []
      }
    ],
    "returns": {
      "type": "Promise<Layout3d[]>",
      "description": "The 3D layout for the configuration."
    }
  },
  {
    "methodName": "getLinkedConfigurationOverview",
    "description": "Retrieve the linked configuration overview for the current root configuration. This overview can be used to display a navigator for the linked configurations.",
    "code": "const context = new ConfiguratorContext();\nconst linkedConfigurationOverview = await context.getLinkedConfigurationOverview();\nconsole.log('LinkedConfigurationOverview: ', linkedConfigurationOverview);\n",
    "parameters": [],
    "returns": {
      "type": "Promise<LinkedConfigurationOverview>",
      "description": "The linked configuration overview for the current root configuration."
    }
  },
  {
    "methodName": "getOverview",
    "description": "Retrieve the overview for the current configuration. The overview can be used to display a summary of the configuration, for example on the checkout page.",
    "code": "const context = new ConfiguratorContext();\nconst overview = await context.getOverview();\nconsole.log('Overview: ', overview);\n",
    "parameters": [
      {
        "name": "configurationId",
        "type": "string | null",
        "description": "The configuration id. If not provided, the root configuration id will be used.",
        "required": true,
        "parameters": []
      }
    ],
    "returns": {
      "type": "Promise<OverviewGroups[]>",
      "description": "The overview for the configuration."
    }
  },
  {
    "methodName": "onUpdate",
    "description": "Registers a callback function that will be called whenever a configuration is updated.",
    "code": "import { ConfiguratorContext, Configuration } from '@elfsquad/configurator';\nconst context = new ConfiguratorContext();\n\nconst callback = (evt: CustomEvent<Configuration>) => {\n console.log('Configuration updated: ', evt.detail);\n};\ncontext.onUpdate(callback);\n",
    "parameters": [
      {
        "name": "f",
        "type": "(evt: CustomEvent) => void",
        "description": "The callback function that will be registered.",
        "required": true,
        "parameters": []
      }
    ],
    "returns": {
      "type": "void",
      "description": ""
    }
  },
  {
    "methodName": "requestQuote",
    "description": "Request a quote for the current root configuration. This endpoint should be used when anonymous users want to request a quote.",
    "code": "const context = new ConfiguratorContext();\nconst quotationRequest = {\n  email: 'john.doe@gmail.com',\n  firstName: 'John',\n  lastName: 'Doe',\n}\nawait context.requestQuote(quotationRequest);\n",
    "parameters": [
      {
        "name": "quotationRequest",
        "type": "QuotationRequest",
        "description": "The quotation request.",
        "required": true,
        "parameters": [
          {
            "name": "firstName",
            "type": "string",
            "description": "",
            "required": false
          },
          {
            "name": "lastName",
            "type": "string",
            "description": "",
            "required": false
          },
          {
            "name": "lastNamePrefix",
            "type": "string",
            "description": "",
            "required": false
          },
          {
            "name": "salutation",
            "type": "string",
            "description": "",
            "required": false
          },
          {
            "name": "email",
            "type": "string",
            "description": "",
            "required": false
          },
          {
            "name": "city",
            "type": "string",
            "description": "",
            "required": false
          },
          {
            "name": "postalCode",
            "type": "string",
            "description": "",
            "required": false
          },
          {
            "name": "streetName",
            "type": "string",
            "description": "",
            "required": false
          },
          {
            "name": "houseNumber",
            "type": "string",
            "description": "",
            "required": false
          },
          {
            "name": "countryIso",
            "type": "string",
            "description": "",
            "required": false
          },
          {
            "name": "languageIso",
            "type": "string",
            "description": "",
            "required": false
          },
          {
            "name": "phoneNumber",
            "type": "string",
            "description": "",
            "required": false
          },
          {
            "name": "phoneNumber2",
            "type": "string",
            "description": "",
            "required": false
          },
          {
            "name": "companyName",
            "type": "string",
            "description": "",
            "required": false
          },
          {
            "name": "iban",
            "type": "string",
            "description": "",
            "required": false
          },
          {
            "name": "cocNumber",
            "type": "string",
            "description": "",
            "required": false
          },
          {
            "name": "vatNumber",
            "type": "string",
            "description": "",
            "required": false
          },
          {
            "name": "shipto_firstName",
            "type": "string",
            "description": "",
            "required": false
          },
          {
            "name": "shipto_lastName",
            "type": "string",
            "description": "",
            "required": false
          },
          {
            "name": "shipto_lastNamePrefix",
            "type": "string",
            "description": "",
            "required": false
          },
          {
            "name": "shipto_salutation",
            "type": "string",
            "description": "",
            "required": false
          },
          {
            "name": "shipto_email",
            "type": "string",
            "description": "",
            "required": false
          },
          {
            "name": "shipto_city",
            "type": "string",
            "description": "",
            "required": false
          },
          {
            "name": "shipto_postalCode",
            "type": "string",
            "description": "",
            "required": false
          },
          {
            "name": "shipto_streetName",
            "type": "string",
            "description": "",
            "required": false
          },
          {
            "name": "shipto_houseNumber",
            "type": "string",
            "description": "",
            "required": false
          },
          {
            "name": "shipto_countryIso",
            "type": "string",
            "description": "",
            "required": false
          },
          {
            "name": "shipto_languageIso",
            "type": "string",
            "description": "",
            "required": false
          },
          {
            "name": "shipto_phoneNumber",
            "type": "string",
            "description": "",
            "required": false
          },
          {
            "name": "shipto_phoneNumber2",
            "type": "string",
            "description": "",
            "required": false
          },
          {
            "name": "shipto_companyName",
            "type": "string",
            "description": "",
            "required": false
          },
          {
            "name": "remarks",
            "type": "string",
            "description": "",
            "required": false
          }
        ]
      }
    ],
    "returns": {
      "type": "void",
      "description": ""
    }
  },
  {
    "methodName": "addToQuotation",
    "description": "Add the current configuration to a quotation. This endpoint should be used when a user is logged in and wants to add a configuration to a quotation.",
    "code": "const context = new ConfiguratorContext();\nconst quotationId = 'YourQuotationId';\nawait context.addToQuotation(quotationId);\n",
    "parameters": [
      {
        "name": "quotationId",
        "type": "string",
        "description": "The quotation id.",
        "required": true,
        "parameters": []
      },
      {
        "name": "configurationIds",
        "type": "string[]",
        "description": "The configuration ids. If not provided, the root configuration id will be used.",
        "required": true,
        "parameters": []
      }
    ],
    "returns": {
      "type": "void",
      "description": ""
    }
  },
  {
    "methodName": "_get",
    "description": "",
    "code": null,
    "parameters": [
      {
        "name": "url",
        "type": "string",
        "description": "",
        "required": true,
        "parameters": []
      }
    ],
    "returns": {
      "type": "Promise<Response>",
      "description": ""
    }
  },
  {
    "methodName": "_put",
    "description": "",
    "code": null,
    "parameters": [
      {
        "name": "url",
        "type": "string",
        "description": "",
        "required": true,
        "parameters": []
      },
      {
        "name": "object",
        "type": "any",
        "description": "",
        "required": true,
        "parameters": []
      }
    ],
    "returns": {
      "type": "Promise<Response>",
      "description": ""
    }
  },
  {
    "methodName": "_updateConfiguration",
    "description": "",
    "code": null,
    "parameters": [
      {
        "name": "configuration",
        "type": "Configuration",
        "description": "",
        "required": true,
        "parameters": []
      }
    ],
    "returns": {
      "type": "void",
      "description": ""
    }
  }
]
