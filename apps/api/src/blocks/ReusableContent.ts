import { Block } from "payload/types";

export const ReusableContent: Block = {
  slug: "reusableContent",
  fields: [
    {
      name: "reference",
      type: "relationship",
      maxDepth: 0,
      relationTo: ["contents"],
    },
  ],
};
