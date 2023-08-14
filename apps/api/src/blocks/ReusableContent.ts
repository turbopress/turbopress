import { Block } from "payload/types";
import Contents from "../collections/Contents";

export const ReusableContent: Block = {
  slug: "reusableContent",
  interfaceName: "ReusableContent",
  fields: [
    {
      name: "reference",
      type: "relationship",
      // maxDepth: 0,
      relationTo: [Contents.slug],
    },
  ],
};
