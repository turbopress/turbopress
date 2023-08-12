import { GroupField } from "payload/types";

function linkField(fieldOverrides?: Partial<GroupField>): GroupField {
  return {
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
              condition: (_, siblingData) => siblingData?.type === "reference",
              width: "50%",
            },
          },
          {
            name: "url",
            label: "Custom URL",
            type: "text",
            required: true,
            admin: {
              condition: (_, siblingData) => siblingData?.type === "custom",
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
    ],
    ...fieldOverrides,
  };
}

export default linkField;