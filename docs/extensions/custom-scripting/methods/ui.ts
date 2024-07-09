export default [
  {
    "methodName": "openDialog",
    "description": "",
    "example": null,
    "parameters": [
      {
        "name": "parameters",
        "type": "OpenDialogParameters",
        "description": "",
        "required": true,
        "parameters": [
          {
            "name": "title",
            "type": "string",
            "description": "",
            "required": true
          },
          {
            "name": "src",
            "type": "string",
            "description": "",
            "required": true
          }
        ]
      }
    ],
    "deprecated": null,
    "returns": {
      "type": "Promise<OpenDialogResponse>",
      "description": ""
    }
  },
  {
    "methodName": "reload",
    "description": "",
    "example": null,
    "parameters": [],
    "deprecated": null,
    "returns": {
      "type": "void",
      "description": ""
    }
  }
]
