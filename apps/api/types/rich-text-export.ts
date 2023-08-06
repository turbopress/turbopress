import type {
  RichTextElement,
  RichTextLeaf,
} from "payload/dist/fields/config/types";
import type { RichTextCustomElement, RichTextCustomLeaf } from "payload/types";

type DefaultRichTextLeaf = Exclude<RichTextLeaf, RichTextCustomLeaf>;
export type FormattedText = {
  [key in DefaultRichTextLeaf]?: boolean;
} & {
  text: string;
};

type DefaultRichTextElement =
  | Exclude<RichTextElement, RichTextCustomElement>
  | "li"
  | "quote";
export type FormattedElement = {
  type: DefaultRichTextElement;
  url?: string;
  children: FormattedText[];
};
