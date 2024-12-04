import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "spec/configurator/elfsquad-configurator-api",
    },
    {
      type: "category",
      label: "Checkout",
      items: [
        {
          type: "doc",
          id: "spec/configurator/get-configuration-overview",
          label: "Get configuration overview",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "spec/configurator/add-to-quotation",
          label: "Add to quotation",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "spec/configurator/request-quote",
          label: "Request quote",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Configuration models",
      items: [
        {
          type: "doc",
          id: "spec/configurator/get-configuration-models",
          label: "Get configuration models",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Linked configuration",
      items: [
        {
          type: "doc",
          id: "spec/configurator/update-cardinality",
          label: "Update cardinality",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "spec/configurator/delete-configuration",
          label: "Delete configuration",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "spec/configurator/copy-configuration",
          label: "Copy configuration",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "spec/configurator/update-multiplier",
          label: "Update multiplier",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "spec/configurator/change-order",
          label: "Change order",
          className: "api-method put",
        },
      ],
    },
    {
      type: "category",
      label: "Localization",
      items: [
        {
          type: "doc",
          id: "spec/configurator/change-language",
          label: "Change language",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "spec/configurator/change-currency",
          label: "Change currency",
          className: "api-method put",
        },
      ],
    },
    {
      type: "category",
      label: "Open & start configuration",
      items: [
        {
          type: "doc",
          id: "spec/configurator/open-configuration",
          label: "Open configuration",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "spec/configurator/open-multiple-configurations",
          label: "Open multiple configurations",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "spec/configurator/start-configuration-session",
          label: "Start configuration session",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "spec/configurator/retrieve-settings",
          label: "Retrieve settings",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Update configuration",
      items: [
        {
          type: "doc",
          id: "spec/configurator/update-requirement",
          label: "Update requirement",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "spec/configurator/update-multiple-configurations",
          label: "Update multiple configurations",
          className: "api-method put",
        },   
        {
          type: "doc",
          id: "spec/configurator/update-multiple-requirements",
          label: "Update multiple requirements",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "spec/configurator/update-text-value",
          label: "Update text value",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "spec/configurator/update-multiple-text-values",
          label: "Update multiple text values",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "spec/configurator/update-image-value",
          label: "Update image value",
          className: "api-method put",
        },
      ],
    },
    {
      type: "category",
      label: "Visualization",
      items: [
        {
          type: "doc",
          id: "spec/configurator/generate-pdf",
          label: "Generate PDF",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "spec/configurator/retrieve-2-d-layout",
          label: "Retrieve 2D layout",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "spec/configurator/retrieve-3-d-layout",
          label: "Retrieve 3D layout",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
