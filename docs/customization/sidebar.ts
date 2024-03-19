import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";
import methods from "./methods";

const methodEntries = methods.map(({methodName}) => ({
  type: 'link',
  href: `/docs/customization/custom-scripting-api#${methodName}`,
  label: methodName,
}));

const sidebar: SidebarsConfig = {
  apisidebar: [
    { type: 'doc', id: 'customization/index' },
    { type: 'doc', id: 'customization/getting-started' },
    {
      type: "category",
      label: "Custom Scripting API",
      items: [
        { type: 'doc', id: 'customization/custom-scripting-api' },
        ...methodEntries,
      ],
    },
    { type: 'doc', id: 'customization/examples' },
  ],
};

export default sidebar.apisidebar;

