export default [
  {
    "methodName": "fetch",
    "description": "Send an API request to the Elfsquad API. The url parameter is always prefixed with the base URL of the Elfsquad API.",
    "example": {
      "content": "import { api } from '@elfsquad/custom-scripting';\nconst { status, body } = await api.fetch('/api/2/features');\n",
      "language": "typescript"
    },
    "parameters": [
      {
        "name": "url",
        "type": "string",
        "description": "The URL to send the request to.",
        "required": true,
        "parameters": []
      },
      {
        "name": "init",
        "type": "unknown",
        "description": "The request options. This will be directly passed on to the native fetch function.",
        "required": true,
        "parameters": []
      }
    ],
    "deprecated": null,
    "returns": {
      "type": "Promise<FetchResponse>",
      "description": ""
    }
  }
]
