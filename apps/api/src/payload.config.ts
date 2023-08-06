import path from "path";
import { buildConfig } from "payload/config";

import Categories from "./collections/Categories";
import Media from "./collections/Media";
import Posts from "./collections/Posts";
import Tags from "./collections/Tags";
import Users from "./collections/Users";

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL ?? "http://localhost:3000",
  admin: {
    user: Users.slug,
  },
  collections: [Categories, Posts, Tags, Users, Media],
  typescript: {
    outputFile: path.join(__dirname, "../types", "payload.ts"),
  },
});
