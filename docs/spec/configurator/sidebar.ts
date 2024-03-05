import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "spec/configurator/elfsquad-configurator-api",
    },
    {
      type: "category",
      label: "ConfigurationModels",
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
      label: "Configurator",
      items: [
        {
          type: "doc",
          id: "spec/configurator/open-existing-configuration",
          label: "Open existing configuration",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "spec/configurator/open-multiple-existing-configuration",
          label: "Open multiple existing configuration",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "spec/configurator/update-requirement",
          label: "Update requirement",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "spec/configurator/update-multiple-requirements-at-once",
          label: "Update multiple requirements at once",
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
          id: "spec/configurator/update-the-cardanlity-of-a-linked-configuration-with-multiple-instances-enabled",
          label: "Update the cardanlity of a linked configuration with multiple instances enabled.",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "spec/configurator/remove-linked-configuration",
          label: "Remove linked configuration.",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "spec/configurator/makes-a-copy-of-one-of-the-linked-configurations-and-adds-it",
          label: "Makes a copy of one of the linked configurations and adds it.",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "spec/configurator/updates-the-multiplier-of-a-linked-configuration",
          label: "Updates the multiplier of a linked configuration.",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "spec/configurator/change-the-order-of-a-linked-configuration",
          label: "Change the order of a linked configuration.",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "spec/configurator/retrieves-the-configuration-overview",
          label: "Retrieves the configuration overview",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "spec/configurator/change-language-of-the-configuration",
          label: "Change language of the configuration",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "spec/configurator/change-language-of-the-configuration",
          label: "Change language of the configuration",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "spec/configurator/generate-pdf",
          label: "Generate PDF",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "spec/configurator/duplicate-configuration",
          label: "Duplicate configuration",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "spec/configurator/retrieve-2-d-image-layout",
          label: "Retrieve 2D image layout",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "spec/configurator/retrieve-3-d-layout",
          label: "Retrieve 3D layout",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "spec/configurator/add-configuration-s-to-quotation",
          label: "Add configuration(s) to quotation",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "spec/configurator/request-a-quote-as-an-anonymous-user",
          label: "Request a quote as an anonymous user",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "NewConfiguration",
      items: [
        {
          type: "doc",
          id: "spec/configurator/starts-a-new-configuration-session",
          label: "Starts a new configuration session",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "spec/configurator/starts-a-new-configuration-session",
          label: "Starts a new configuration session.",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Settings",
      items: [
        {
          type: "doc",
          id: "spec/configurator/retrieve-settings",
          label: "Retrieve settings",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
