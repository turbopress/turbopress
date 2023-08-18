import type { CollectionConfig } from "payload/types";

export const PagesField = {
  title: "title",
  slug: "slug",
  author: "author",
  publishedDate: "publishedDate",
  categories: "categories",
  tags: "tags",
  content: "content",
  status: "status",
  layout: "layout",
  createdAt: "createdAt",
  updatedAt: "updatedAt",
};

type PagesField = (typeof PagesField)[keyof typeof PagesField];

const PagesFieldStatus = {
  Draft: "Draft",
  Published: "Published",
};

type PagesFieldStatus =
  (typeof PagesFieldStatus)[keyof typeof PagesFieldStatus];

const Pages: CollectionConfig = {
  slug: "pages",
  admin: {
    defaultColumns: [
      PagesField.title,
      PagesField.slug,
      PagesField.author,
      PagesField.categories,
      PagesField.tags,
      PagesField.status,
    ],
    useAsTitle: PagesField.title,
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: PagesField.title,
      type: "text",
      required: true,
    },
    {
      name: PagesField.slug,
      type: "text",
      required: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: PagesField.author,
      type: "relationship",
      relationTo: "users",
      admin: {
        position: "sidebar",
      },
    },
    {
      name: PagesField.publishedDate,
      type: "date",
      admin: {
        position: "sidebar",
      },
    },
    {
      name: PagesField.categories,
      type: "relationship",
      relationTo: "categories",
      hasMany: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: PagesField.tags,
      type: "relationship",
      relationTo: "tags",
      hasMany: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: PagesField.status,
      type: "select",
      options: Object.entries(PagesFieldStatus).map((e) => {
        return { label: e[0], value: e[1] };
      }),
      defaultValue: PagesFieldStatus.Draft,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: PagesField.layout,
      type: "relationship",
      relationTo: "layouts",
    },
    {
      name: PagesField.content,
      type: "richText",
    },
  ],
};

export default Pages;
