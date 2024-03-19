import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    { type: 'doc', id: 'customization/index' },
    { type: 'doc', id: 'customization/getting-started' },
    { type: 'doc', id: 'customization/custom-scripting-api' },
    { type: 'doc', id: 'customization/examples' },
  ],
};

export default sidebar.apisidebar;

