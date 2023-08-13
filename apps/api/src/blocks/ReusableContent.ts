import { Block } from "payload/types";

export const ReusableContent: Block = {
  slug: "reusableContent",
  interfaceName: "ReusableContent",
  fields: [
    {
      name: "reference",
      type: "relationship",
      // maxDepth: 0,
      relationTo: ["contents"],
    },
  ],
};
