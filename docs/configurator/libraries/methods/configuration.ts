export default [
  {
    "methodName": "constructor",
    "description": "",
    "example": null,
    "parameters": [
      {
        "name": "configuratorContext",
        "type": "ConfiguratorContext",
        "description": "",
        "required": true,
        "parameters": []
      },
      {
        "name": "data",
        "type": "object",
        "description": "",
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
    "methodName": "updateRequirement",
    "description": "Updates a requirement on this configuration. This can be used to (de)select a feature or set a value on a feature.",
    "example": {
      "content": "const nodeId = '00000000-0000-0000-0000-000000000000';\nconst value = 1;\nconst isSelection = true;\n\nawait configuration.updateRequirement(nodeId, isSelection, value);\n",
      "language": "typescript"
    },
    "parameters": [
      {
        "name": "featureModelNodeId",
        "type": "string",
        "description": "The id of the feature model node to update",
        "required": true,
        "parameters": []
      },
      {
        "name": "isSelection",
        "type": "boolean",
        "description": "Whether the feature should be selected or not",
        "required": true,
        "parameters": []
      },
      {
        "name": "value",
        "type": "number",
        "description": "The value to set on the feature",
        "required": true,
        "parameters": []
      },
      {
        "name": "ignoreConflicts",
        "type": "boolean",
        "description": "If ture, the API will try to automatically resolve conflicts.",
        "required": true,
        "parameters": []
      },
      {
        "name": "includeSearchbarResults",
        "type": "boolean",
        "description": "If true, the API will include results in the display type searchbar.",
        "required": true,
        "parameters": []
      }
    ],
    "deprecated": null,
    "returns": {
      "type": "Promise<void>",
      "description": "A promise that resolves when the requirement has been updated"
    }
  },
  {
    "methodName": "updateText",
    "description": "Updates the text value of a feature on this configuration.",
    "example": {
      "content": "const nodeId = '00000000-0000-0000-0000-000000000000';\nconst textValue = 'Hello World';\nawait configuration.updateText(nodeId, textValue);\n",
      "language": "typescript"
    },
    "parameters": [
      {
        "name": "featureModelNodeId",
        "type": "string",
        "description": "The id of the feature model node to update",
        "required": true,
        "parameters": []
      },
      {
        "name": "textValue",
        "type": "string",
        "description": "The text value to set on the feature",
        "required": true,
        "parameters": []
      }
    ],
    "deprecated": null,
    "returns": {
      "type": "Promise<void>",
      "description": "A promise that resolves when the text value has been updated"
    }
  },
  {
    "methodName": "updateImage",
    "description": "Updates the image value of a feature on this configuration.",
    "example": {
      "content": "const nodeId = '00000000-0000-0000-0000-000000000000';\nconst textValue = 'https://example.com/image.png';\nawait configuration.updateImage(nodeId, textValue);\n",
      "language": "typescript"
    },
    "parameters": [
      {
        "name": "featureModelNodeId",
        "type": "string",
        "description": "The id of the feature model node to update",
        "required": true,
        "parameters": []
      },
      {
        "name": "textValue",
        "type": "string",
        "description": "The image value to set on the feature",
        "required": true,
        "parameters": []
      }
    ],
    "deprecated": null,
    "returns": {
      "type": "Promise<void>",
      "description": "A promise that resolves when the image value has been updated"
    }
  },
  {
    "methodName": "updateName",
    "description": "Updates the name of this or a linked configuration.",
    "example": {
      "content": "const name = 'My new configuration name';\nawait configuration.updateName(name);\n",
      "language": "typescript"
    },
    "parameters": [
      {
        "name": "name",
        "type": "string",
        "description": "The new name of the configuration",
        "required": true,
        "parameters": []
      },
      {
        "name": "linkedConfigurationId",
        "type": "string | null",
        "description": "The id of the linked configuration to update",
        "required": true,
        "parameters": []
      }
    ],
    "deprecated": null,
    "returns": {
      "type": "Promise<void>",
      "description": "A promise that resolves when the name has been updated"
    }
  },
  {
    "methodName": "updateCardinality",
    "description": "Updates the cardinality of a linked configuration.",
    "example": {
      "content": "const parentNodeId = '00000000-0000-0000-0000-000000000000';\nconst newCardinality = 2;\nawait configuration.updateCardinality(parentNodeId, newCardinality);\n",
      "language": "typescript"
    },
    "parameters": [
      {
        "name": "parentNodeId",
        "type": "string",
        "description": "The id of the parent node of the linked configuration",
        "required": true,
        "parameters": []
      },
      {
        "name": "cardinality",
        "type": "number",
        "description": "The new cardinality of the linked configuration",
        "required": true,
        "parameters": []
      }
    ],
    "deprecated": null,
    "returns": {
      "type": "Promise<void>",
      "description": "A promise that resolves when the cardinality has been updated"
    }
  },
  {
    "methodName": "changeLanguage",
    "description": "Changes the language of this configuration.",
    "example": {
      "content": "const languageIso = 'en';\nawait configuration.changeLanguage(languageIso);\n",
      "language": "typescript"
    },
    "parameters": [
      {
        "name": "languageIso",
        "type": "string",
        "description": "The ISO code of the language to change to",
        "required": true,
        "parameters": []
      }
    ],
    "deprecated": null,
    "returns": {
      "type": "Promise<void>",
      "description": "A promise that resolves when the language has been changed successfully"
    }
  },
  {
    "methodName": "getStepImage",
    "description": "Retrieves a rendered image of a step in this configuration.",
    "example": {
      "content": "const stepId = '00000000-0000-0000-0000-000000000000';\nconst size = 1080;\nconst background = true;\nconst image = await configuration.getStepImage(stepId, size, background);\n",
      "language": "typescript"
    },
    "parameters": [
      {
        "name": "stepId",
        "type": "string",
        "description": "The id of the step to render",
        "required": true,
        "parameters": []
      },
      {
        "name": "size",
        "type": "number",
        "description": "The size of the image to render",
        "required": true,
        "parameters": []
      },
      {
        "name": "background",
        "type": "boolean",
        "description": "Whether to render the background or not",
        "required": true,
        "parameters": []
      }
    ],
    "deprecated": "use getLayout2d on the ConfiguratorContext instead",
    "returns": {
      "type": "Promise<Blob>",
      "description": "A promise that resolves with the rendered image"
    }
  },
  {
    "methodName": "getPdf",
    "description": "Retrieves the PDF document for this configuration.",
    "example": {
      "content": "const context = new ConfiguratorContext();\nconst pdf = await configuration.getPdf();\n",
      "language": "typescript"
    },
    "parameters": [],
    "deprecated": null,
    "returns": {
      "type": "Promise<Blob>",
      "description": "A promise that resolves with the PDF document"
    }
  }
]
