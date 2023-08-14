import { Block } from "payload/types";

export const PageContent: Block = {
  slug: "pageContent",
  interfaceName: "PageContent",
  fields: [
    {
      name: "description",
      type: "textarea",
      defaultValue:
        "This block will display the content of the page (if any). Please edit the original page change the value.",
      admin: {
        readOnly: true,
      },
    },
  ],
};
