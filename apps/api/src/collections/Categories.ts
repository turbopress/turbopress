import type { CollectionConfig } from "payload/types";

const CategoriesField = {
  name: "name",
};

type CategoriesField = (typeof CategoriesField)[keyof typeof CategoriesField];

const Categories: CollectionConfig = {
  slug: "categories",
  admin: {
    useAsTitle: CategoriesField.name,
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: CategoriesField.name,
      type: "text",
    },
  ],
  timestamps: false,
};

export default Categories;
