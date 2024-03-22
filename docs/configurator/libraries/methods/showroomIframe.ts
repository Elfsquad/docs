export default [
  {
    "methodName": "constructor",
    "description": "Initializes a new instance of the Elfsquad Showroom.",
    "example": {
      "content": "const showroom = new ElfsquadShowroom({ container: '#showroom', url: 'https://automotive.elfsquad.io' });\n",
      "language": "typescript"
    },
    "parameters": [
      {
        "name": "options",
        "type": "ElfsquadShowroomOptions",
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
            "description": "The URL of the Elfsquad showroom, which could be a general showroom URL or a specific product URL.",
            "required": true
          }
        ]
      }
    ],
    "deprecated": null,
    "returns": {
      "type": "void",
      "description": "A new instance of the Elfsquad Showroom."
    }
  },
  {
    "methodName": "getNativeElement",
    "description": "Retrieves the native iframe element.",
    "example": {
      "content": "const showroom = new ElfsquadShowroom({ container: '#showroom', url: 'https://automotive.elfsquad.io' });\nconst iframe = showroom.getNativeElement();\n",
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
    "methodName": "home",
    "description": "Resets the viewer to the home camera position.",
    "example": {
      "content": "const showroom = new ElfsquadShowroom({ container: '#showroom', url: 'https://automotive.elfsquad.io' });\nshowroom.home();\n",
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
    "methodName": "toggleFootprint",
    "description": "Toggles the visibility of the footprint.",
    "example": {
      "content": "const showroom = new ElfsquadShowroom({ container: '#showroom', url: 'https://automotive.elfsquad.io' });\nshowroom.toggleFootprint();\n",
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
    "methodName": "screenshot",
    "description": "Initiates a screenshot of the current view. The screenshot data is returned via the `onScreenshot` callback.",
    "example": {
      "content": "const showroom = new ElfsquadShowroom({ container: '#showroom', url: 'https://automotive.elfsquad.io' });\nshowroom.screenshot();\n",
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
    "methodName": "onScreenshot",
    "description": "Registers a callback function to be invoked when a screenshot is taken.",
    "example": {
      "content": "const showroom = new ElfsquadShowroom({ container: '#showroom', url: 'https://automotive.elfsquad.io' });\nshowroom.onScreenshot(data => {\n console.log(data.image);\n});\n",
      "language": "typescript"
    },
    "parameters": [
      {
        "name": "callback",
        "type": "ScreenshotCallback",
        "description": "The callback function to be called upon screenshot capture.",
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
    "methodName": "onRequestQuote",
    "description": "Registers a callback function to be invoked when a quote is requested.",
    "example": {
      "content": "const showroom = new ElfsquadShowroom({ container: '#showroom', url: 'https://automotive.elfsquad.io' });\nshowroom.onRequestQuote(data => {\n console.log(data.configurationId);\n});\n",
      "language": "typescript"
    },
    "parameters": [
      {
        "name": "callback",
        "type": "RequestQuoteCallback",
        "description": "The callback function to be called upon quote request.",
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
