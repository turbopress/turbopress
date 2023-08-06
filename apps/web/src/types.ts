import type { FormattedElement, FormattedText } from "@turbopress/api/types";

declare module "slate" {
  interface CustomTypes {
    Element: FormattedElement;
    Text: FormattedText;
  }
}
