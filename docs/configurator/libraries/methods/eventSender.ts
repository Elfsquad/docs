export default [
  {
    "methodName": "constructor",
    "description": "",
    "example": null,
    "parameters": [
      {
        "name": "targetWindow",
        "type": "Window",
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
    "methodName": "sendTriggerConfigurationUpdate",
    "description": "Send a triggerConfigurationUpdate event to the parent window.",
    "example": {
      "content": "const iframe = document.querySelector('iframe');\nconst eventSender = new EventSender(iframe.contentWindow!);\neventSender.sendTriggerConfigurationUpdate();\n",
      "language": "typescript"
    },
    "parameters": [],
    "deprecated": null,
    "returns": {
      "type": "void",
      "description": ""
    }
  },
  {
    "methodName": "sendUpdateRequirement",
    "description": "Send an updateRequirement event to the parent window.",
    "example": {
      "content": "const iframe = document.querySelector('iframe');\nconst eventSender = new EventSender(iframe.contentWindow!);\neventSender.sendUpdateRequirement({\n  configurationId: '00000000-0000-0000-0000-000000000000',\n  nodeId: '00000000-0000-0000-0000-000000000000',\n  value: 10,\n  isSelection: true,\n  ignoreConflicts: false,\n});\n",
      "language": "typescript"
    },
    "parameters": [
      {
        "name": "data",
        "type": "UpdateRequirement",
        "description": "The UpdateRequirement payload.",
        "required": true,
        "parameters": [
          {
            "name": "configurationId",
            "type": "string",
            "description": "",
            "required": false
          },
          {
            "name": "nodeId",
            "type": "string",
            "description": "",
            "required": true
          },
          {
            "name": "value",
            "type": "number",
            "description": "",
            "required": true
          },
          {
            "name": "isSelection",
            "type": "boolean",
            "description": "",
            "required": true
          },
          {
            "name": "ignoreConflicts",
            "type": "boolean",
            "description": "",
            "required": false
          }
        ]
      }
    ],
    "deprecated": null,
    "returns": {
      "type": "void",
      "description": ""
    }
  },
  {
    "methodName": "sendDragStarted",
    "description": "Send a dragStarted event to the parent window.",
    "example": {
      "content": "const iframe = document.querySelector('iframe');\nconst eventSender = new EventSender(iframe.contentWindow!);\neventSender.sendDragStarted(feature);\n",
      "language": "typescript"
    },
    "parameters": [
      {
        "name": "data",
        "type": "ConfigurationFeature",
        "description": "The ConfigurationFeature payload.",
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
    "methodName": "sendUpdateRequirements",
    "description": "Send an updateRequirements event to the parent window.",
    "example": {
      "content": "const iframe = document.querySelector('iframe');\nconst eventSender = new EventSender(iframe.contentWindow!);\neventSender.sendUpdateRequirements({\n  configurationId: '00000000-0000-0000-0000-000000000000',\n  ignoreConflicts: false,\n  includeSearchbarResults: true,\n  requirements: [\n    {\n      nodeId: '00000000-0000-0000-0000-000000000000',\n      value: 10,\n      isSelection: true,\n      ignoreConflicts: false,\n    },\n  ],\n});\n",
      "language": "typescript"
    },
    "parameters": [
      {
        "name": "data",
        "type": "UpdateRequirements",
        "description": "The UpdateRequirements payload.",
        "required": true,
        "parameters": [
          {
            "name": "configurationId",
            "type": "string",
            "description": "",
            "required": false
          },
          {
            "name": "ignoreConflicts",
            "type": "boolean",
            "description": "",
            "required": true
          },
          {
            "name": "includeSearchbarResults",
            "type": "boolean",
            "description": "",
            "required": true
          },
          {
            "name": "requirements",
            "type": "UpdateRequirement[]",
            "description": "",
            "required": true
          }
        ]
      }
    ],
    "deprecated": null,
    "returns": {
      "type": "void",
      "description": ""
    }
  },
  {
    "methodName": "sendUpdateImageValue",
    "description": "Send an updateImageValue event to the parent window.",
    "example": {
      "content": "const iframe = document.querySelector('iframe');\nconst eventSender = new EventSender(iframe.contentWindow!);\neventSender.sendUpdateImageValue({\n  configurationId: '00000000-0000-0000-0000-000000000000',\n  nodeId: '00000000-0000-0000-0000-000000000000',\n  // base64 encoded image\n  image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAFwF52RAAAACXBIWXMAAAsTAAALEwEAmpwYAAABvElEQVQ4jZ2Sv0vDUBiGn2V\n});\n",
      "language": "typescript"
    },
    "parameters": [
      {
        "name": "data",
        "type": "UpdateImageValue",
        "description": "The UpdateImageValue payload.",
        "required": true,
        "parameters": [
          {
            "name": "configurationId",
            "type": "string",
            "description": "",
            "required": true
          },
          {
            "name": "nodeId",
            "type": "string",
            "description": "",
            "required": true
          },
          {
            "name": "image",
            "type": "string",
            "description": "",
            "required": true
          }
        ]
      }
    ],
    "deprecated": null,
    "returns": {
      "type": "void",
      "description": ""
    }
  },
  {
    "methodName": "sendUpdateTextValue",
    "description": "Send an updateTextValue event to the parent window.",
    "example": {
      "content": "const iframe = document.querySelector('iframe');\nconst eventSender = new EventSender(iframe.contentWindow!);\neventSender.sendUpdateTextValue({\n  configurationId: '00000000-0000-0000-0000-000000000000',\n  nodeId: '00000000-0000-0000-0000-000000000000',\n  value: 'Custom text value',\n});\n",
      "language": "typescript"
    },
    "parameters": [
      {
        "name": "data",
        "type": "UpdateTextValue",
        "description": "The UpdateTextValue payload.",
        "required": true,
        "parameters": [
          {
            "name": "configurationId",
            "type": "string",
            "description": "",
            "required": true
          },
          {
            "name": "nodeId",
            "type": "string",
            "description": "",
            "required": true
          },
          {
            "name": "value",
            "type": "string",
            "description": "",
            "required": true
          }
        ]
      }
    ],
    "deprecated": null,
    "returns": {
      "type": "void",
      "description": ""
    }
  },
  {
    "methodName": "sendUpdateLinkedConfigurationCardinality",
    "description": "Send an updateLinkedConfigurationCardinality event to the parent window.",
    "example": {
      "content": "const iframe = document.querySelector('iframe');\nconst eventSender = new EventSender(iframe.contentWindow!);\neventSender.sendUpdateLinkedConfigurationCardinality({\n  parentNodeId: '00000000-0000-0000-0000-000000000000',\n  cardinality: 2,\n  configurationCode: 'XYAZIQWP'\n});\n",
      "language": "typescript"
    },
    "parameters": [
      {
        "name": "data",
        "type": "UpdateLinkedConfigurationCardinality",
        "description": "The UpdateLinkedConfigurationCardinality payload.",
        "required": true,
        "parameters": [
          {
            "name": "configurationId",
            "type": "string",
            "description": "",
            "required": false
          },
          {
            "name": "parentNodeId",
            "type": "string",
            "description": "",
            "required": true
          },
          {
            "name": "cardinality",
            "type": "number",
            "description": "",
            "required": true
          },
          {
            "name": "configurationCode",
            "type": "string",
            "description": "",
            "required": false
          }
        ]
      }
    ],
    "deprecated": null,
    "returns": {
      "type": "void",
      "description": ""
    }
  },
  {
    "methodName": "sendRemoveLinkedConfiguration",
    "description": "Send a removeLinkedConfiguration event to the parent window.",
    "example": {
      "content": "const iframe = document.querySelector('iframe');\nconst eventSender = new EventSender(iframe.contentWindow!);\neventSender.sendRemoveLinkedConfiguration({\n  linkedConfigurationId: '00000000-0000-0000-0000-000000000000',\n});\n",
      "language": "typescript"
    },
    "parameters": [
      {
        "name": "data",
        "type": "RemoveLinkedConfiguration",
        "description": "The RemoveLinkedConfiguration payload.",
        "required": true,
        "parameters": [
          {
            "name": "configurationId",
            "type": "string",
            "description": "",
            "required": false
          },
          {
            "name": "linkedConfigurationId",
            "type": "string",
            "description": "",
            "required": true
          }
        ]
      }
    ],
    "deprecated": null,
    "returns": {
      "type": "void",
      "description": ""
    }
  }
]
