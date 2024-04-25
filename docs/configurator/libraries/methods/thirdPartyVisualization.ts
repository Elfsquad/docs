export default [
  {
    "methodName": "constructor",
    "description": "Initializes a new instance of the the third-party visualization.",
    "example": {
      "content": "const visualization = new VisualizationFrame ({ container: '#showroom', url: 'https://...' });\n",
      "language": "typescript"
    },
    "parameters": [
      {
        "name": "options",
        "type": "VisualizationFrameOptions",
        "description": "The options used to initialize the showroom.",
        "required": true,
        "parameters": [
          {
            "name": "container",
            "type": "HTMLElement | string",
            "description": "The container to render the iframe element in. Accepts either a HTMLElement or a query selector string.",
            "required": true
          },
          {
            "name": "url",
            "type": "string",
            "description": "The URL where the third party visualization client is hosted.",
            "required": true
          }
        ]
      }
    ],
    "deprecated": null,
    "returns": {
      "type": "void",
      "description": "A new instance of the VisualizationFrame  class."
    }
  },
  {
    "methodName": "getNativeElement",
    "description": "Retrieves the native iframe element.",
    "example": {
      "content": "const visualization = new VisualizationFrame ({ container: '#showroom', url: 'https://...' });\nconst iframe = visualization.getNativeElement();\n",
      "language": "typescript"
    },
    "parameters": [],
    "deprecated": null,
    "returns": {
      "type": "HTMLIFrameElement",
      "description": "The native iframe element."
    }
  },
  {
    "methodName": "onTriggerConfigurationUpdate",
    "description": "Registers a callback function to be invoked when a configuration update is triggered.",
    "example": {
      "content": "const visualization = new VisualizationFrame ({ container: '#showroom', url: 'https://...' });\nvisualization.onTriggerConfigurationUpdate(data => {\n console.log('Update triggered. Please re-send the configuration');\n});\n",
      "language": "typescript"
    },
    "parameters": [
      {
        "name": "callback",
        "type": "TriggerConfigurationUpdateCallback",
        "description": "The callback function to be called when a configuration update is triggered.",
        "required": true,
        "parameters": []
      }
    ],
    "deprecated": null,
    "returns": {
      "type": "void",
      "description": ""
    }
  },
  {
    "methodName": "onUpdateRequirement",
    "description": "Registers a callback function to be invoked when a requirement should be updated.",
    "example": {
      "content": "const updateRequirement = (data) => {\n  // your update requirement logic here\n};\n\n\nconst visualization = new VisualizationFrame ({ container: '#showroom', url: 'https://...' });\nvisualization.onUpdateRequirement(data => {\n  updateRequirement(data);\n});\n\n",
      "language": "typescript"
    },
    "parameters": [
      {
        "name": "callback",
        "type": "UpdateRequirementCallback",
        "description": "The callback function to be called when a requirement should be updated.",
        "required": true,
        "parameters": []
      }
    ],
    "deprecated": null,
    "returns": {
      "type": "void",
      "description": ""
    }
  },
  {
    "methodName": "onUpdateRequirements",
    "description": "Registers a callback function to be invoked when multiple requirements should be updated.",
    "example": {
      "content": "const updateRequirements = (data) => {\n  // your update requirements logic here\n};\n\nconst visualization = new VisualizationFrame ({ container: '#showroom', url: 'https://...' });\nvisualization.onUpdateRequirements(data => {\n  updateRequirements(data);\n});\n",
      "language": "typescript"
    },
    "parameters": [
      {
        "name": "callback",
        "type": "UpdateRequirementsCallback",
        "description": "The callback function to be called when multiple requirements should be updated.",
        "required": true,
        "parameters": []
      }
    ],
    "deprecated": null,
    "returns": {
      "type": "void",
      "description": ""
    }
  },
  {
    "methodName": "onUpdateImageValue",
    "description": "Registers a callback function to be invoked when an image value should be updated.",
    "example": {
      "content": "const updateImageValue = (data) => {\n  // your update image value logic here\n};\n\nconst visualization = new VisualizationFrame ({ container: '#showroom', url: 'https://...' });\nvisualization.onUpdateImageValue(data => {\n  updateImageValue(data);\n});\n",
      "language": "typescript"
    },
    "parameters": [
      {
        "name": "callback",
        "type": "UpdateImageValueCallback",
        "description": "The callback function to be called when an image value should be updated.",
        "required": true,
        "parameters": []
      }
    ],
    "deprecated": null,
    "returns": {
      "type": "void",
      "description": ""
    }
  },
  {
    "methodName": "onUpdateTextValue",
    "description": "Registers a callback function to be invoked when a text value should be updated.",
    "example": {
      "content": "const updateTextValue = (data) => {\n  // your update text value logic here\n};\n\nconst visualization = new VisualizationFrame ({ container: '#showroom', url: 'https://...' });\nvisualization.onUpdateTextValue(data => {\n  updateTextValue(data);\n});\n",
      "language": "typescript"
    },
    "parameters": [
      {
        "name": "callback",
        "type": "UpdateTextValueCallback",
        "description": "The callback function to be called when a text value should be updated.",
        "required": true,
        "parameters": []
      }
    ],
    "deprecated": null,
    "returns": {
      "type": "void",
      "description": ""
    }
  },
  {
    "methodName": "sendConfigurationUpdated",
    "description": "Trigger a configuration update in the third-party visualization.",
    "example": {
      "content": "import { ConfiguratorContext, Configuration } from '@elfsquad/configurator';\nconst context = new ConfiguratorContext({ ... });\n\nconst visualization = new VisualizationFrame ({ container: '#showroom', url: 'https://...' });\n\ncontext.onUpdate((evt: CustomEvent<Configuration>) => {\n  visualization.triggerConfigurationUpdate(evt.detail);\n});\n",
      "language": "typescript"
    },
    "parameters": [
      {
        "name": "configuration",
        "type": "Configuration",
        "description": "The configuration to send to the third-party visualization.",
        "required": true,
        "parameters": []
      }
    ],
    "deprecated": null,
    "returns": {
      "type": "void",
      "description": ""
    }
  },
  {
    "methodName": "sendStepChanged",
    "description": "Trigger a step changed event in the third-party visualization.",
    "example": {
      "content": "const visualization = new VisualizationFrame ({ container: '#showroom', url: 'https://...' });\n\nconst step = { ... };\n\nvisualization.triggerStepChanged(step);\n",
      "language": "typescript"
    },
    "parameters": [
      {
        "name": "step",
        "type": "ConfigurationStep",
        "description": "The step to send to the third-party visualization.",
        "required": true,
        "parameters": []
      }
    ],
    "deprecated": null,
    "returns": {
      "type": "void",
      "description": ""
    }
  }
]
