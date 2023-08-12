import path from "path";
import { buildConfig } from "payload/config";

import Categories from "./collections/Categories";
import Layouts from "./collections/Layouts";
import Media from "./collections/Media";
import Pages from "./collections/Pages";
import Tags from "./collections/Tags";
import Users from "./collections/Users";

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL ?? "http://localhost:3000",
  admin: {
    user: Users.slug,
  },
  collections: [Categories, Layouts, Media, Pages, Tags, Users],
  typescript: {
    outputFile: path.join(__dirname, "../types", "payload.ts"),
  },
});
