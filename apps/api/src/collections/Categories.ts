import type { CollectionConfig } from "payload/types";

const CategoriesField = {
  name: "name",
  slug: "slug",
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
      required: true,
    },
    {
      name: CategoriesField.slug,
      type: "text",
      required: true,
      unique: true,
      admin: {
        position: "sidebar",
      },
    },
  ],
  timestamps: false,
};

export default Categories;
