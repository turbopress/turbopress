import payload from "payload";
import { Block } from "payload/types";
import Pages from "../collections/Pages";
import linkField from "../fields/linkField";

export const Menu: Block = {
  slug: "menu",
  interfaceName: "Menu",
  fields: [
    {
      name: "type",
      type: "select",
      options: ["default"],
      required: true,
      defaultValue: "default",
    },
    {
      name: "menus",
      type: "array",
      fields: [
        {
          name: "mainMenu",
          type: "group",
          interfaceName: "MainMenu",
          fields: [
            {
              type: "row",
              fields: [
                {
                  name: "type",
                  type: "radio",
                  options: [
                    {
                      label: "Internal link",
                      value: "reference",
                    },
                    {
                      label: "Custom URL",
                      value: "custom",
                    },
                    {
                      label: "None",
                      value: "none",
                    },
                  ],
                  defaultValue: "reference",
                  admin: {
                    layout: "horizontal",
                    width: "50%",
                  },
                },
                {
                  name: "newTab",
                  label: "Open in new tab",
                  type: "checkbox",
                  admin: {
                    condition: (_, siblingData) => siblingData?.type != "none",
                    width: "50%",
                    style: {
                      alignSelf: "flex-end",
                    },
                  },
                },
                {
                  name: "reference",
                  label: "Document to link to",
                  type: "relationship",
                  relationTo: [Pages.slug],
                  required: true,
                  maxDepth: 0,
                  admin: {
                    condition: (_, siblingData) =>
                      siblingData?.type === "reference",
                    width: "50%",
                  },
                  hooks: {
                    afterRead: [
                      async ({ value, siblingData }) => {
                        if (value && siblingData.type === "reference") {
                          const id = value.value;
                          const page = await payload.findByID({
                            collection: "pages",
                            id: id,
                            depth: 0,
                          });
                          siblingData.url = page.slug;
                        }
                      },
                    ],
                  },
                },
                {
                  name: "url",
                  label: "Custom URL",
                  type: "text",
                  required: true,
                  admin: {
                    condition: (_, siblingData) =>
                      siblingData?.type === "custom",
                    width: "50%",
                  },
                },
                {
                  name: "label",
                  label: "Label",
                  type: "text",
                  required: true,
                  admin: {
                    width: "50%",
                  },
                },
              ],
            },
            {
              name: "subMenu",
              type: "array",
              fields: [linkField()],
            },
          ],
        },
      ],
    },
  ],
};
