import { Block } from "payload/types";
import Categories from "../collections/Categories";
import { PagesField } from "../collections/Pages";
import Tags from "../collections/Tags";

const PageListField = {
  numberOfItems: "numberOfItems",
  filterByCategories: "filterByCategories",
  filterByTags: "filterByTags",
  sortBy: "sortBy",
  pages: "pages",
};

type PageListField = (typeof PageListField)[keyof typeof PageListField];

export const PageList: Block = {
  slug: "pageList",
  interfaceName: "PageList",
  fields: [
    {
      name: PageListField.numberOfItems,
      type: "number",
      defaultValue: 5,
    },
    {
      name: PageListField.filterByCategories,
      type: "relationship",
      relationTo: [Categories.slug],
      maxDepth: 0,
      hasMany: true,
    },
    {
      name: PageListField.filterByTags,
      type: "relationship",
      relationTo: [Tags.slug],
      hasMany: true,
      maxDepth: 0,
    },
    {
      name: PageListField.sortBy,
      type: "select",
      options: [
        PagesField.title,
        PagesField.createdAt,
        PagesField.updatedAt,
        `-${PagesField.title}`,
        `-${PagesField.createdAt}`,
        `-${PagesField.updatedAt}`,
      ],
    },
  ],
};
