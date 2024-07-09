export default [
  {
    "methodName": "openDialog",
    "description": "Open a dialog with a specific title and source URL.",
    "example": {
      "content": "import { ui } from '@elfsquad/custom-scripting';\nui.openDialog({\n  title: 'My dialog',\n  src: 'https://your-website.com/dialog.html'\n});\n",
      "language": "typescript"
    },
    "parameters": [
      {
        "name": "parameters",
        "type": "OpenDialogParameters",
        "description": "The parameters to open the dialog with.",
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
    "description": "Reload the data in the current view.",
    "example": {
      "content": "import { ui } from '@elfsquad/custom-scripting';\nui.reload();\n",
      "language": "typescript"
    },
    "parameters": [],
    "deprecated": null,
    "returns": {
      "type": "void",
      "description": ""
    }
  }
]
