import { CollectionConfig } from "payload/types";

const Layouts: CollectionConfig = {
  slug: "layouts",
  admin: {
    defaultColumns: ["name"],
    useAsTitle: "title",
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
      unique: true,
    },
  ],
};

export default Layouts;
