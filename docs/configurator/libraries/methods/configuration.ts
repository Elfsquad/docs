export default [
  {
    "methodName": "constructor",
    "description": "",
    "code": null,
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
    "returns": {
      "type": "void",
      "description": ""
    }
  },
  {
    "methodName": "updateRequirement",
    "description": "Updates a requirement on the this configuration. This can be used to (de)select a feature or set a value on a feature.",
    "code": "const nodeId = '00000000-0000-0000-0000-000000000000';\nconst value = 1;\nconst isSelection = true;\n\nawait configuration.updateRequirement(nodeId, isSelection, value);\n",
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
    "returns": {
      "type": "Promise<void>",
      "description": "A promise that resolves when the requirement has been updated"
    }
  },
  {
    "methodName": "updateText",
    "description": "Updates the text value of a feature on this configuration.",
    "code": "const nodeId = '00000000-0000-0000-0000-000000000000';\nconst textValue = 'Hello World';\nawait configuration.updateText(nodeId, textValue);\n",
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
    "returns": {
      "type": "Promise<void>",
      "description": "A promise that resolves when the text value has been updated"
    }
  },
  {
    "methodName": "updateImage",
    "description": "Updates the image value of a feature on this configuration.",
    "code": "const nodeId = '00000000-0000-0000-0000-000000000000';\nconst textValue = 'https://example.com/image.png';\nawait configuration.updateImage(nodeId, textValue);\n",
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
    "returns": {
      "type": "Promise<void>",
      "description": "A promise that resolves when the image value has been updated"
    }
  },
  {
    "methodName": "changeLanguage",
    "description": "Changes the language of this configuration.",
    "code": "const languageIso = 'en';\nawait configuration.changeLanguage(languageIso);\n",
    "parameters": [
      {
        "name": "languageIso",
        "type": "string",
        "description": "The ISO code of the language to change to",
        "required": true,
        "parameters": []
      }
    ],
    "returns": {
      "type": "Promise<void>",
      "description": "A promise that resolves when the language has been changed successfully"
    }
  },
  {
    "methodName": "getStepImage",
    "description": "",
    "code": null,
    "parameters": [
      {
        "name": "stepId",
        "type": "string",
        "description": "",
        "required": true,
        "parameters": []
      },
      {
        "name": "size",
        "type": "number",
        "description": "",
        "required": true,
        "parameters": []
      },
      {
        "name": "background",
        "type": "boolean",
        "description": "",
        "required": true,
        "parameters": []
      }
    ],
    "returns": {
      "type": "Promise<Blob>",
      "description": ""
    }
  },
  {
    "methodName": "getPdf",
    "description": "Retrieves the PDF document for this configuration.",
    "code": null,
    "parameters": [],
    "returns": {
      "type": "Promise<Blob>",
      "description": "A promise that resolves with the PDF document"
    }
  }
]
