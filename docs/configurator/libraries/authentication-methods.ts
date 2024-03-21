export default [
  {
    "methodName": "constructor",
    "description": "Creates an instance of AuthenticationContext & initializes with the provided authentication options.",
    "code": "const authenticationContext = new AuthenticationContext({\n  clientId: 'your-client-id',\n  redirectUri: 'https://example.com',\n  scope: 'Elfskot.Api offline_access',\n  responseMode: 'fragment',\n  loginUrl: 'https://login.elfsquad.io'\n});\n",
    "parameters": [
      {
        "name": "options",
        "type": "IAuthenticationOptions",
        "description": "",
        "required": true,
        "parameters": [
          {
            "name": "clientId",
            "type": "string",
            "description": "The client ID of your OpenID Connect application.",
            "required": true
          },
          {
            "name": "redirectUri",
            "type": "string",
            "description": "The url to redirect to after a login.",
            "required": true
          },
          {
            "name": "scope",
            "type": "string | undefined",
            "description": "The oauth scopes to request, defaults to 'Elfskot.Api offline_access'.",
            "required": false
          },
          {
            "name": "loginUrl",
            "type": "string | undefined",
            "description": "The login url to use, defaults to 'login.elfsquad.io'.",
            "required": false
          },
          {
            "name": "responseMode",
            "type": "'query' | 'fragment' | undefined",
            "description": "The response mode to use, defaults to 'fragment'.",
            "required": false
          }
        ]
      }
    ],
    "returns": {
      "type": "void",
      "description": ""
    }
  },
  {
    "methodName": "onSignIn",
    "description": "This method can be used for executing logic after the user has signed in. For example, you can use this method to fetch & set the access token, change the UI, etc.",
    "code": "const authenticationContext = new AuthenticationContext();\nasync function onSignIn() {\n  console.log('User has signed in');\n};\nauthenticationContext.onSignIn().then(onSignIn);\n",
    "parameters": [],
    "returns": {
      "type": "Promise<void>",
      "description": "promise that resolves when the user has signed in. If the user is already signed in, the promise resolves immediately."
    }
  },
  {
    "methodName": "signIn",
    "description": "This method starts the login flow & redirects the user to the login page.",
    "code": "const authenticationContext = new AuthenticationContext();\nauthenticationContext.signIn();\n",
    "parameters": [
      {
        "name": "options",
        "type": "IOauthOptions",
        "description": "oauth options that will be passed on to the authorization request. This can be used, for example, to perform a silent login.",
        "required": true,
        "parameters": [
          {
            "name": "prompt",
            "type": "'none' | 'login' | 'consent' | 'select_account'",
            "description": "Is used to set the prompt parameter in the authorization request. By setting this parameter to none, the user will not be prompted to login, but instead be redirected back to the redirectUri with an error.",
            "required": false
          },
          {
            "name": "nonce",
            "type": "string",
            "description": "Is used to set the nonce parameter.",
            "required": false
          },
          {
            "name": "display",
            "type": "'page' | 'popup' | 'touch' | 'wap'",
            "description": "",
            "required": false
          },
          {
            "name": "max_age",
            "type": "number",
            "description": "The max_age parameter is used to set the maximum age of the authentication session in seconds. If the user has been authenticated for longer than this time, the user will be prompted to login again.",
            "required": false
          },
          {
            "name": "ui_locales",
            "type": "string",
            "description": "",
            "required": false
          },
          {
            "name": "id_token_hint",
            "type": "string",
            "description": "",
            "required": false
          },
          {
            "name": "login_hint",
            "type": "string",
            "description": "The login_hint parameter is used to pre-fill the username field in the login form. This can be used to make the login process easier for the user.",
            "required": false
          },
          {
            "name": "acr_values",
            "type": "string",
            "description": "",
            "required": false
          }
        ]
      }
    ],
    "returns": {
      "type": "Promise<void>",
      "description": ""
    }
  },
  {
    "methodName": "signOut",
    "description": "This method signs the user out & revokes the tokens. After signing out, the user will be redirected to the postLogoutRedirectUri. If no postLogoutRedirectUri is provided, the user will be redirected to the login page.",
    "code": "const authenticationContext = new AuthenticationContext();\nconst postLogoutRedirectUri = 'https://example.com';\nauthenticationContext.signOut(postLogoutRedirectUri);\n",
    "parameters": [
      {
        "name": "postLogoutRedirectUri",
        "type": "string | null",
        "description": "the uri where the user will be redirected to after signing out.",
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
    "methodName": "isSignedIn",
    "description": "This method can be used to check if the user is signed in, for example to show a login/logout button.",
    "code": "const authenticationContext = new AuthenticationContext();\nasync function isSignedIn(value: boolean) {\n  console.log('User is signed in:', value);\n}\nauthenticationContext.isSignedIn().then(isSignedIn);\n",
    "parameters": [],
    "returns": {
      "type": "Promise<boolean>",
      "description": "promise that resolves with a boolean indicating if the user is signed in."
    }
  },
  {
    "methodName": "getAccessToken",
    "description": "This method can be used to get the access token. This method will automatically refresh the access token if it has expired and a valid refresh token is available.",
    "code": "const authenticationContext = new AuthenticationContext();\nauthenticationContext.getAccessToken().then(accessToken => {\n  console.log('Access token:', accessToken);\n});\n",
    "parameters": [],
    "returns": {
      "type": "Promise<string>",
      "description": "promise that resolves with the access token."
    }
  },
  {
    "methodName": "getIdToken",
    "description": "This method can be used to get the id token. Similar to the getAccessToken method, this method will automatically refresh the id (and access) token if it has expired and a valid refresh token is available.",
    "code": "const authenticationContext = new AuthenticationContext();\nauthenticationContext.getIdToken().then(idToken => {\n  console.log('Id token:', idToken);\n});\n",
    "parameters": [],
    "returns": {
      "type": "Promise<string>",
      "description": "promise that resolves with the id token."
    }
  },
  {
    "methodName": "setState",
    "description": "This method can be used to persist date in local storage, which can be used to save data between sign in attempts. This can be useful, for example, to save the url the current url before the user is redirected to the login page.",
    "code": "const authenticationContext = new AuthenticationContext();\n\nauthenticationContext.setState({ url: window.location.href });\nauthenticationContext.onSignIn().then(() => {\n  const { url } = authenticationContext.getState();\n  window.location.href = url;\n});\n\nauthenticationContext.signIn();\n",
    "parameters": [
      {
        "name": "data",
        "type": "any",
        "description": "the data that will be persisted in local storage.",
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
    "methodName": "getState",
    "description": "This method can be used to retrieve data that was persisted in local storage using the setState method.",
    "code": "const authenticationContext = new AuthenticationContext();\n\nauthenticationContext.setState({ url: window.location.href });\nauthenticationContext.onSignIn().then(() => {\n  const { url } = authenticationContext.getState();\n  window.location.href = url;\n});\n\nauthenticationContext.signIn();\n",
    "parameters": [],
    "returns": {
      "type": "any | null",
      "description": "the data that was persisted in local storage."
    }
  }
]
