import type { FormattedElement, FormattedText } from "@turbopress/api/types";

declare module "slate" {
  interface CustomTypes {
    Element: FormattedElement;
    Text: FormattedText;
  }
}

export type PayloadCollection<CollectionType = any> = {
  totalDocs?: number;
  limit?: number;
  totalPages?: number;
  page?: number;
  pagingCounter?: number;
  hasPrevPage?: boolean;
  hasNextPage?: boolean;
  prevPage?: number;
  nextPage?: number;
  hasMore?: boolean;
  docs: CollectionType[];
};
