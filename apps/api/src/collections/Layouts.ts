import { CollectionConfig } from "payload/types";
import { Menu } from "../blocks/Menu";
import { PageContent } from "../blocks/PageContent";
import { PageList } from "../blocks/PageList";
import { ReusableContent } from "../blocks/ReusableContent";
import { SiteTitle } from "../blocks/SiteTitle";

const LayoutsField = {
  name: "name",
  slug: "slug",
  description: "description",
};
type LayoutsField = (typeof LayoutsField)[keyof typeof LayoutsField];

const blocks = [PageContent, PageList, ReusableContent];

const Layouts: CollectionConfig = {
  slug: "layouts",
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: LayoutsField.name,
  },
  fields: [
    {
      name: LayoutsField.name,
      type: "text",
      required: true,
    },
    {
      name: LayoutsField.slug,
      type: "text",
      unique: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: LayoutsField.description,
      type: "text",
    },
    {
      name: "header",
      type: "group",
      fields: [
        {
          name: "blocks",
          type: "blocks",
          blocks: [...blocks, Menu, SiteTitle],
        },
      ],
    },
    {
      name: "body",
      type: "group",
      fields: [
        {
          name: "blocks",
          type: "blocks",
          blocks: blocks,
        },
      ],
    },
    {
      name: "footer",
      type: "group",
      fields: [
        {
          name: "blocks",
          type: "blocks",
          blocks: blocks,
        },
      ],
    },
  ],
};

export default Layouts;
