export default [
  {
    methodName: "parameters",
    description: "The parameters object contains context about the current page. This is available on all pages, but the properties will vary depending on the page.",
    code: `async function logParameters() {
  console.log('The parameters object:', parameters);
}`,
  parameters: [],
  },
  {
    methodName: "api.fetch",
    description: "The fetch method is a wrapper around the native fetch method. The wrapper adds the necessary headers and authentication for the Elfsquad API to the request.",
    code: `async function fetchData() {
  const response = await api.fetch('https://api.elfsquad.io/data/1/quotations/');
  const data = await response.json();
  console.log('The data:', data);
}`,
    parameters: [
      {
        name: "url",
        type: "string",
        description: "The URL to fetch.",
        required: true,
      },
      {
        name: "options",
        type: "object",
        description: "The options object to pass to the fetch method.",
        required: false,
      },
    ],
  },
  {
    methodName: "ui.openDialog",
    description: "The ui.openDialog function allows you to open a dialog and embed one or more scripts in that dialog. These scripts can be used to add your own custom behavior and content to the dialog.",
    code: `openDialog = () => {
  ui.openDialog({
    title: 'Dialog Title',
    width: '80vw',
    height: '80vh',
    scripts: ['script 1'],
    parameters: {param1: 'value1', param2: 'value2'},
  });
}`,
    parameters: [
      {
        name: "options",
        type: "object",
        description: "The options object to pass to the openDialog method.",
        parameters: [
          {
            name: "title",
            type: "string",
            description: "The title of the dialog.",
            required: true,
          },
          {
            name: "width",
            type: "string",
            description: "The width of the dialog.",
            required: true,
          },
          {
            name: "height",
            type: "string",
            description: "The height of the dialog.",
            required: true,
          },
          {
            name: "scripts",
            type: "array",
            description: "An array of scripts to embed in the dialog.",
            required: true,
          },
          {
            name: "parameters",
            type: "object",
            description: "An object containing parameters to pass to the scripts.",
            required: false,
          },
        ],
        required: true,
      },
    ],
  },
  {
    methodName: "ui.reload",
    description: "The ui.reload method allows you to reload the current page. Note: this method is only implemented on the quotation & order entry pages.",
    code: `reload = () => {
  ui.reload();
}`,
    parameters: [],
  },
  {
    methodName: 'dialog.close',
    description: 'The dialog.close method allows you to close the current dialog. This method is only available in dialogs.',
    code: `closeDialog = () => {
  dialog.close();
}`,
    parameters: [],
  },
]

