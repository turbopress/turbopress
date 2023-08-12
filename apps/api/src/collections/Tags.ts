import type { CollectionConfig } from "payload/types";

const TagsField = {
  name: "name",
};

type TagsField = (typeof TagsField)[keyof typeof TagsField];

const Tags: CollectionConfig = {
  slug: "tags",
  admin: {
    useAsTitle: TagsField.name,
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: TagsField.name,
      type: "text",
    },
  ],
  timestamps: false,
};

export default Tags;
