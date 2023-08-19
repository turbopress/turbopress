import type { CollectionConfig } from "payload/types";

const Media: CollectionConfig = {
  slug: "media",
  access: {
    read: () => true,
  },
  upload: {
    disableLocalStorage: true,
    adminThumbnail: "thumbnail",
    imageSizes: [
      {
        height: 400,
        width: 400,
        crop: "center",
        name: "thumbnail",
      },
      {
        width: 900,
        height: 450,
        crop: "center",
        name: "sixteenByNineMedium",
      },
    ],
  },
  fields: [],
};

export default Media;
