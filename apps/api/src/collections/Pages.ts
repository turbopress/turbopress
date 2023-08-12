import type { CollectionConfig } from "payload/types";

const PagesField = {
  title: "title",
  slug: "slug",
  author: "author",
  publishedDate: "publishedDate",
  categories: "categories",
  tags: "tags",
  content: "content",
  status: "status",
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
    },
    {
      name: PagesField.author,
      type: "relationship",
      relationTo: "users",
    },
    {
      name: PagesField.publishedDate,
      type: "date",
    },
    {
      name: PagesField.categories,
      type: "relationship",
      relationTo: "categories",
      hasMany: true,
    },
    {
      name: PagesField.tags,
      type: "relationship",
      relationTo: "tags",
      hasMany: true,
    },
    {
      name: PagesField.content,
      type: "richText",
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
  ],
};

export default Pages;
