import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "apis/configurator/elfsquad-configurator-api",
    },
    {
      type: "category",
      label: "ConfigurationModels",
      items: [
        {
          type: "doc",
          id: "apis/configurator/get-configuration-models",
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
          id: "apis/configurator/open-existing-configuration",
          label: "Open existing configuration",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/configurator/open-multiple-existing-configuration",
          label: "Open multiple existing configuration",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/configurator/update-requirement",
          label: "Update requirement",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "apis/configurator/update-multiple-requirements-at-once",
          label: "Update multiple requirements at once",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "apis/configurator/update-text-value",
          label: "Update text value",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "apis/configurator/update-multiple-text-values",
          label: "Update multiple text values",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "apis/configurator/update-the-cardanlity-of-a-linked-configuration-with-multiple-instances-enabled",
          label: "Update the cardanlity of a linked configuration with multiple instances enabled.",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "apis/configurator/remove-linked-configuration",
          label: "Remove linked configuration.",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "apis/configurator/makes-a-copy-of-one-of-the-linked-configurations-and-adds-it",
          label: "Makes a copy of one of the linked configurations and adds it.",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "apis/configurator/updates-the-multiplier-of-a-linked-configuration",
          label: "Updates the multiplier of a linked configuration.",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "apis/configurator/change-the-order-of-a-linked-configuration",
          label: "Change the order of a linked configuration.",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "apis/configurator/retrieves-the-configuration-overview",
          label: "Retrieves the configuration overview",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/configurator/change-language-of-the-configuration",
          label: "Change language of the configuration",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "apis/configurator/change-language-of-the-configuration",
          label: "Change language of the configuration",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "apis/configurator/generate-pdf",
          label: "Generate PDF",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/configurator/duplicate-configuration",
          label: "Duplicate configuration",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/configurator/retrieve-2-d-image-layout",
          label: "Retrieve 2D image layout",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/configurator/retrieve-3-d-layout",
          label: "Retrieve 3D layout",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/configurator/add-configuration-s-to-quotation",
          label: "Add configuration(s) to quotation",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "apis/configurator/request-a-quote-as-an-anonymous-user",
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
          id: "apis/configurator/starts-a-new-configuration-session",
          label: "Starts a new configuration session",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/configurator/starts-a-new-configuration-session",
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
          id: "apis/configurator/retrieve-settings",
          label: "Retrieve settings",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
