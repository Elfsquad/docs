import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "apis/quotation/elfsquad-web-quotationapi",
    },
    {
      type: "category",
      label: "Quotation",
      items: [
        {
          type: "doc",
          id: "apis/quotation/",
          label: "Missing summary",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/quotation/",
          label: "Missing summary",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "apis/quotation/",
          label: "Missing summary",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "apis/quotation/",
          label: "Missing summary",
          className: "api-method put",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
