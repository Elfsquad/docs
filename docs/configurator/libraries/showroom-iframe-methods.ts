export default [
  {
    "methodName": "constructor",
    "description": "Initializes a new instance of the Elfsquad Showroom.",
    "code": "const showroom = new ElfsquadShowroom({ container: '#showroom', url: 'https://automotive.elfsquad.io' });\n",
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
    "returns": {
      "type": "void",
      "description": "A new instance of the Elfsquad Showroom."
    }
  },
  {
    "methodName": "getNativeElement",
    "description": "Retrieves the native iframe element.",
    "code": "const showroom = new ElfsquadShowroom({ container: '#showroom', url: 'https://automotive.elfsquad.io' });\nconst iframe = showroom.getNativeElement();\n",
    "parameters": [],
    "returns": {
      "type": "HTMLIFrameElement",
      "description": "The native iframe element."
    }
  },
  {
    "methodName": "home",
    "description": "Resets the viewer to the home camera position.",
    "code": "const showroom = new ElfsquadShowroom({ container: '#showroom', url: 'https://automotive.elfsquad.io' });\nshowroom.home();\n",
    "parameters": [],
    "returns": {
      "type": "void",
      "description": ""
    }
  },
  {
    "methodName": "toggleFootprint",
    "description": "Toggles the visibility of the footprint.",
    "code": "const showroom = new ElfsquadShowroom({ container: '#showroom', url: 'https://automotive.elfsquad.io' });\nshowroom.toggleFootprint();\n",
    "parameters": [],
    "returns": {
      "type": "void",
      "description": ""
    }
  },
  {
    "methodName": "screenshot",
    "description": "Initiates a screenshot of the current view. The screenshot data is returned via the `onScreenshot` callback.",
    "code": "const showroom = new ElfsquadShowroom({ container: '#showroom', url: 'https://automotive.elfsquad.io' });\nshowroom.screenshot();\n",
    "parameters": [],
    "returns": {
      "type": "void",
      "description": ""
    }
  },
  {
    "methodName": "onScreenshot",
    "description": "Registers a callback function to be invoked when a screenshot is taken.",
    "code": "const showroom = new ElfsquadShowroom({ container: '#showroom', url: 'https://automotive.elfsquad.io' });\nshowroom.onScreenshot(data => {\n console.log(data.image);\n});\n",
    "parameters": [
      {
        "name": "callback",
        "type": "ScreenshotCallback",
        "description": "The callback function to be called upon screenshot capture.",
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
    "methodName": "onRequestQuote",
    "description": "Registers a callback function to be invoked when a quote is requested.",
    "code": "const showroom = new ElfsquadShowroom({ container: '#showroom', url: 'https://automotive.elfsquad.io' });\nshowroom.onRequestQuote(data => {\n console.log(data.configurationId);\n});\n",
    "parameters": [
      {
        "name": "callback",
        "type": "RequestQuoteCallback",
        "description": "The callback function to be called upon quote request.",
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
