import { Block } from "payload/types";
import enableField from "../fields/enableField";

export const PageContent: Block = {
  slug: "pageContent",
  fields: [enableField()],
};
