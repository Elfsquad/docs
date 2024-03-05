import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "spec/scim/scim-api",
    },
    {
      type: "category",
      label: "User",
      items: [
        {
          type: "doc",
          id: "spec/scim/get-user-by-id",
          label: "Retrieve user by id",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "spec/scim/list-users",
          label: "List users",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "spec/scim/create-user",
          label: "Create user",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "spec/scim/delete-user",
          label: "Delete user",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "spec/scim/replace-user",
          label: "Fully replace user",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "spec/scim/patch-user",
          label: "Parrtially update user",
          className: "api-method patch",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
