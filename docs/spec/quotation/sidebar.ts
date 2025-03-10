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
          id: "spec/quotation/create-quotation",
          label: "Create quotation",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "spec/quotation/delete-quotation",
          label: "Delete quotation",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "spec/quotation/invoke-action",
          label: "Invoke action",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "spec/quotation/transfer-quotation",
          label: "Transfer quotation",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "spec/quotation/update-debtor",
          label: "Update debtor",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "spec/quotation/update-seller",
          label: "Update seller",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "spec/quotation/update-ship-to",
          label: "Update ship to",
          className: "api-method put",
        },
      ],
    },
    {
      type: "category",
      label: "Quotation group",
      items: [
        {
          type: "doc",
          id: "spec/quotation/apply-bulk-vat",
          label: "Apply bulk VAT",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "spec/quotation/apply-bulk-delivery-date",
          label: "Apply bulk delivery date",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "spec/quotation/apply-bulk-discount",
          label: "Apply bulk discount",
          className: "api-method put",
        },
      ],
    },
    {
      type: "category",
      label: "Quotation line",
      items: [
        {
          type: "doc",
          id: "spec/quotation/apply-bulk-line-vat",
          label: "Apply bulk line VAT",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "spec/quotation/apply-bulk-line-delivery-date",
          label: "Apply bulk line delivery date",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "spec/quotation/apply-bulk-line-discount",
          label: "Apply bulk line discount",
          className: "api-method put",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
