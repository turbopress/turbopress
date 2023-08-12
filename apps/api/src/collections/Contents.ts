import { CollectionConfig } from "payload/types";
import { Menu } from "../blocks/Menu";

const ContentsField = {
  name: "name",
  slug: "slug",
  description: "description",
};
type ContentsField = (typeof ContentsField)[keyof typeof ContentsField];

const Contents: CollectionConfig = {
  slug: "contents",
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: ContentsField.name,
  },
  fields: [
    {
      name: ContentsField.name,
      type: "text",
      required: true,
    },
    {
      name: ContentsField.slug,
      type: "text",
      unique: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: ContentsField.description,
      type: "text",
    },
    { name: "blocks", type: "blocks", blocks: [Menu] },
  ],
};

export default Contents;
