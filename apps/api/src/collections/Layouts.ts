import { CollectionConfig } from "payload/types";

const LayoutsField = {
  name: "name",
  description: "description",
};
type LayoutsField = (typeof LayoutsField)[keyof typeof LayoutsField];

const Layouts: CollectionConfig = {
  slug: "layouts",
  admin: {
    useAsTitle: LayoutsField.name,
  },
  fields: [
    {
      name: LayoutsField.name,
      type: "text",
      required: true,
      unique: true,
    },
    {
      name: LayoutsField.description,
      type: "text",
    },
  ],
};

export default Layouts;
