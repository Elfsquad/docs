export const ConfiguratorContextMethods = [
  {
    methodName: "constructor",
    description: "The constructor of the ConfiguratorContext initializes the context with the given options.",
    code: `import { ConfiguratorContext, AuthenticationMethod } from '@elfsquad/configurator';

const initConfigurator = () => {
  return new ConfiguratorContext({
    authenticationMethod: AuthenticationMethod.Anonymous,
    tenantId: '<YOUR_TENANT_ID>',
    authenticationOptions: {},
  });
};`,
    parameters: [
      {
        name: "options",
        type: "object",
        description: "The options to initialize the context with.",
        required: true,
        parameters: [
          {
            name: "authenticationMethod",
            type: "AuthenticationMethod",
            description: <p className="text-sm">
              The authentication method to use. The default value is <code>ANONYMOUS</code>. Other options are <code>USER_LOGIN</code> and <code>ANONYMOUS_AND_USER_LOGIN</code>.
            </p>,
            required: false,
          },
          {
            name: "tenantId",
            type: "uuid",
            description: <p className="text-sm">Your tenant id. Only required for anonymous authentication.</p>,
            required: false,
          },
          {
            name: "authenticationOptions",
            type: "object",
            description: <div className="text-sm">
              <p>Required for non-anonymous authentication. </p>
              <p>The authentication options to use for the <code>AuthenticationContext</code>. Please refer the @elfsquad/authentication documentation for more details.</p>
            </div>,
            required: true,
          },
        ],
      },
    ]
  },
  {
    methodName: "getConfigurationModels",
    description: "Retrieves the available configuration models from the API.",
    code: `const getConfigurationModels = async () => {
  const configuratorContext = initConfigurator();
  const configurationModels = await configuratorContext.getConfigurationModels();
}`,
    parameters: [],
    returns: {
      type: "Promise<ConfigurationModels>",
      description: <p>A promise that resolves to the <code>ConfigurationModels</code> object.</p>,
    },
  },
  {
    methodName: "newConfiguration",
    description: "Creates a new configuration based on the supplied configurationModel. If configurationModel is a feature model's ID or name, it initiates a fresh configuration. If it's an existing configuration's code, it duplicates and returns the configuration.",
    code: `const newConfiguration = async (configurationModel: string) => {
  const configuratorContext = initConfigurator();
  const configuration = await configuratorContext.newConfiguration(configurationModel);
  return configuration;
}`,
    parameters: [
      {
        name: "configurationModel",
        type: "string",
        description: "The id, name or code of a configuration model/existing configuration.",
        required: true,
      },
    ],
    returns: {
      type: "Promise<Configuration>",
      description: <p>A promise that resolves to the <code>Configuration</code> object.</p>,
    },
  },
  {
    methodName: "openConfiguration",
    description: "Opens an existing configuration based on the supplied configuration id or configuration code. If the configuration code is supplied, it will duplicate and return the configuration.",
    code: `const openConfiguration = async (configurationId: string) => {
  const configuratorContext = initConfigurator();
  const configuration = await configuratorContext.openConfiguration(configurationId);
  return configuration;
}`,
    parameters: [
      {
        name: "configurationId",
        type: "string",
        description: "The id or code of an existing configuration.",
        required: true,
      },
    ],
    returns: {
      type: "Promise<Configuration>",
      description: <p>A promise that resolves to the <code>Configuration</code> object.</p>,
    },
  },
  {
    methodName: "getLayout3d",
    description: "Retrieves the 3D layout of the configuration.",
    code: `const get3dLayout = async (configuration: Configuration) => {
  const configuratorContext = initConfigurator();
  const layout3d = await configuratorContext.getLayout3d(configuration);
  return layout3d;
}`,
    parameters: [],
    returns: {
      type: "Promise<Layout3D[]>",
      description: <p>A promise that resolves to an array of <code>Layout3D</code> objects.</p>,
    },
  },
  {
    methodName: "getLayout2d",
    description: "Retrieves the 2D layout of the configuration.",
    code: `const get2dLayout = async (configuration: Configuration) => {
  const configuratorContext = initConfigurator();
  const layout2d = await configuratorContext.getLayout2d(configuration);
  return layout2d;
}`,
    parameters: [],
    returns: {
      type: "Promise<Layout2D[]>",
      description: <p>A promise that resolves to an array of <code>Layout2D</code> objects.</p>,
    },
  },
  {
    methodName: "getSettings",
    description: "Retrieves the showroom settings of the current showroom domain.",
    code: `const getSettings = async () => {
  const configuratorContext = initConfigurator();
  const settings = await configuratorContext.getSettings();
  return settings;
}`,
    parameters: [],
    returns: {
      type: "Promise<Settings>",
      description: <p>A promise that resolves to the <code>Settings</code> object.</p>,
    },
  },
  {
    methodName: "getOverview",
    description: "Retrieves the configuration overview DTO that contains the required information for the overview page.",
    code: `const getOverview = async (configurationId: string) => {
  const configuratorContext = initConfigurator();
  const overview = await configuratorContext.getOverview(configurationId);
  return overview;
}`,
    parameters: [
      {
        name: "configurationId",
        type: "string",
        description: "The id of an existing configuration. Defaults to the root configuration id.",
        required: false,
      },
    ],
  },
  {
    methodName: "onUpdate",
    description: "Subscribes to configuration updates.",
    code: `const onUpdate = (configuration: Configuration) => {
  console.log('Configuration updated', configuration);
};

const configuratorContext = initConfigurator();
configuratorContext.onUpdate(onUpdate);`,
    parameters: [
      {
        name: "callback",
        type: "function",
        description: "The callback function to be called on configuration updates.",
        required: true,
      },
    ],
  },
  {
    methodName: "requestQuote",
    description: "Requests a quote for the current root configuration.",
    code: `const requestQuote = () => {
  const configuratorContext = initConfigurator();
  const request = { firstName: 'John', lastName: 'Doe', email: 'johndoe@gmail.com' };
  configuratorContext.requestQuote(request);
};`,
    parameters: [
      {
        name: "request",
        type: "QuotationRequest",
        description: "The quote request object.",
        required: true,
        parameters: [
          { name: "firstName", type: "string", description: "The first name of the requester.", required: false },
          { name: "lastName", type: "string", description: "The last name of the requester.", required: false },
          { name: "lastNamePrefix", type: "string", description: "The last name prefix of the requester.", required: false },
          { name: "salutation", type: "string", description: "The salutation of the requester.", required: false },
          { name: "email", type: "string", description: "The email of the requester.", required: false },
          { name: "city", type: "string", description: "The city of the requester.", required: false },
          { name: "postalCode", type: "string", description: "The postal code of the requester.", required: false },
          { name: "streetName", type: "string", description: "The street name of the requester.", required: false },
          { name: "houseNumber", type: "string", description: "The house number of the requester.", required: false },
          { name: "countryIso", type: "string", description: "The country ISO of the requester.", required: false },
          { name: "languageIso", type: "string", description: "The language ISO of the requester.", required: false },
          { name: "phoneNumber", type: "string", description: "The phone number of the requester.", required: false },
          { name: "phoneNumber2", type: "string", description: "The second phone number of the requester.", required: false },
          { name: "companyName", type: "string", description: "The company name of the requester.", required: false },
          { name: "iban", type: "string", description: "The IBAN of the requester.", required: false },
          { name: "cocNumber", type: "string", description: "The CoC number of the requester.", required: false },
          { name: "vatNumber", type: "string", description: "The VAT number of the requester.", required: false },
          { name: "shipto_firstName", type: "string", description: "The first name of the ship to requester.", required: false },
          { name: "shipto_lastName", type: "string", description: "The last name of the ship to requester.", required: false },
          { name: "shipto_lastNamePrefix", type: "string", description: "The last name prefix of the ship to requester.", required: false },
          { name: "shipto_salutation", type: "string", description: "The salutation of the ship to requester.", required: false },
          { name: "shipto_email", type: "string", description: "The email of the ship to requester.", required: false },
          { name: "shipto_city", type: "string", description: "The city of the ship to requester.", required: false },
          { name: "shipto_postalCode", type: "string", description: "The postal code of the ship to requester.", required: false },
          { name: "shipto_streetName", type: "string", description: "The street name of the ship to requester.", required: false },
          { name: "shipto_houseNumber", type: "string", description: "The house number of the ship to requester.", required: false },
          { name: "shipto_countryIso", type: "string", description: "The country ISO of the ship to requester.", required: false },
          { name: "shipto_languageIso", type: "string", description: "The language ISO of the ship to requester.", required: false },
          { name: "shipto_phoneNumber", type: "string", description: "The phone number of the ship to requester.", required: false },
          { name: "shipto_phoneNumber2", type: "string", description: "The second phone number of the ship to requester.", required: false },
          { name: "shipto_companyName", type: "string", description: "The company name of the ship to requester.", required: false },
          { name: "remarks", type: "string", description: "The remarks of the requester.", required: false },
        ],
      },
    ],
  }
];

export const ConfigurationMethods = [
  {
    methodName: "updateRequirement",
    description: "Update a requirement on this configuration. This can be used to update the selection state & value of a node",
    code: `const updateRequirement = async (configuration: Configuration) => {
  const featureModelNodeId = '00000000-0000-0000-0000-000000000000';
  configuration.updateRequirement(featureModelNodeId, true, 1, false, false);
}`,
    parameters: [
      { name: "featureModelNodeId", type: "uuid", description: "The id of the feature model node.", required: true },
      { name: "isSelection", type: "boolean", description: "If true, the node will be selected. If false, the node will be deselected.", required: true },
      { name: "value", type: "number", description: "The value of the feature model node.", required: false },
      { name: "ignoreConflicts", type: "boolean", description: "If true, the API will try to resolve conflicts automatically.", required: false },
    ],
    returns: {
      type: "Promise<void>",
      description: "A promise that resolves when the requirement is updated.",
    },
  },
  {
    methodName: "updateText",
    description: "Update the text value of a feature model node on this configuration.",
    code: `const updateText = async (configuration: Configuration) => {
  const featureModelNodeId = '00000000-0000-0000-0000-000000000000';
  configuration.updateText(featureModelNodeId, 'New text value');
}`,
    parameters: [
      { name: "featureModelNodeId", type: "uuid", description: "The id of the feature model node.", required: true },
      { name: "textValue", type: "string", description: "The text value of the feature model node.", required: true },
    ],
    returns: {
      type: "Promise<void>",
      description: "A promise that resolves when the text is updated.",
    },
  },
  {
    methodName: "updateImage",
    description: "Update the image value of a feature model node on this configuration.",
    code: `const updateImage = async (configuration: Configuration) => {
  const featureModelNodeId = '00000000-0000-0000-0000-000000000000';
  const imageValue = 'https://www.example.com/image.jpg';
  configuration.updateImage(featureModelNodeId, imageValue);
}`,
    parameters: [
      { name: "featureModelNodeId", type: "uuid", description: "The id of the feature model node.", required: true },
      { name: "imageValue", type: "string", description: "The image value of the feature model node.", required: true },
    ],
    returns: {
      type: "Promise<void>",
      description: "A promise that resolves when the image is updated.",
    },
  },
  {
    methodName: "changeLanguage",
    description: "Change the language of the current configuration.",
    code: `const changeLanguage = async (configuration: Configuration) => {
  const languageIso = 'en';
  configuration.changeLanguage(languageIso);
}`,
    parameters: [
      { name: "languageIso", type: "string", description: "The language ISO of the configuration.", required: true },
    ],
    returns: {
      type: "Promise<void>",
      description: "A promise that resolves when the language is changed.",
    },
  },
  {
    methodName: "getStepImage",
    description: "Retrieve the step image of the configuration.",
    code: `const getStepImage = async (configuration: Configuration) => {
  const stepId = '00000000-0000-0000-0000-000000000000';
  const stepImage = await configuration.getStepImage(stepId, 1000, true);
  return stepImage;
}`,
    parameters: [
      { name: "stepId", type: "uuid", description: "The id of the step.", required: true },
      { name: "size", type: "number", description: "The size of the step image. Defaults to 1000", required: false },
      { name: "background", type: "boolean", description: "If true, the background of the step image will be included.", required: false },
    ],
    returns: {
      type: "Promise<Blob>",
      description: "A promise that resolves to the step image blob.",
    },
  },
  {
    methodName: "getPdf",
    description: "Generates a PDF based on the configuration data. The PDF will be generated based on the configuration's current state.",
    code: `const getPdf = async (configuration: Configuration) => {
  const pdf = await configuration.getPdf();
  return pdf;
}`,
    parameters: [],
    returns: {
      type: "Promise<Blob>",
      description: "A promise that resolves to the PDF blob.",
    },
  },
];

