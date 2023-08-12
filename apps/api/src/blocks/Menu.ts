import { Block } from "payload/types";
import linkField from "../fields/linkField";

export const Menu: Block = {
  slug: "menu",
  fields: [
    {
      name: "menuItems",
      type: "array",
      fields: [
        {
          name: "menu",
          type: "group",
          fields: [
            {
              name: "link",
              type: "group",
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
                        condition: (_, siblingData) =>
                          siblingData?.type != "none",
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
                      relationTo: ["pages"],
                      required: true,
                      maxDepth: 0,
                      admin: {
                        condition: (_, siblingData) =>
                          siblingData?.type === "reference",
                        width: "50%",
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
    },
  ],
};