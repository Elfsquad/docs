import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "spec/quotation/elfsquad-web-quotationapi",
    },
    {
      type: "category",
      label: "Quotation",
      items: [
        {
          type: "doc",
          id: "spec/quotation/creates-a-new-quotation-the-quotation-number-status-will-be-automatically-filled",
          label: "Creates a new quotation. The quotation number & status will be automatically filled.",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "UpdateQuotationCrm",
      items: [
        {
          type: "doc",
          id: "spec/quotation/updates-debtor-for-a-quotation",
          label: "Updates debtor for a quotation",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "spec/quotation/updates-seller-for-a-quotation",
          label: "Updates seller for a quotation",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "spec/quotation/updates-shipping-address-for-a-quotation",
          label: "Updates shipping address for a quotation",
          className: "api-method put",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
