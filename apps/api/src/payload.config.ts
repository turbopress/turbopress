import { cloudStorage } from "@payloadcms/plugin-cloud-storage";
import { s3Adapter } from "@payloadcms/plugin-cloud-storage/s3";
import seo from "@payloadcms/plugin-seo";
import { GenerateTitle } from "@payloadcms/plugin-seo/dist/types";
import path from "path";
import { buildConfig } from "payload/config";
import Categories from "./collections/Categories";
import Contents from "./collections/Contents";
import Layouts from "./collections/Layouts";
import Media from "./collections/Media";
import Pages from "./collections/Pages";
import Tags from "./collections/Tags";
import Users from "./collections/Users";
const generateTitle: GenerateTitle = ({ slug, doc }) => {
  let title = "TurboPress";
  if (slug == "pages") {
    const page = doc as any;
    return (title = `TurboPress - ${page?.title?.value}`);
  }
  return title;
};

const adapter = s3Adapter({
  config: {
    credentials: {
      accessKeyId: process.env.S3_ACCESS_KEY_ID,
      secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
    },
    region: process.env.S3_REGION,
    endpoint: process.env.S3_ENDPOINT,
  },
  bucket: process.env.S3_BUCKET,
});

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL ?? "http://localhost:3000",
  admin: {
    user: Users.slug,
  },
  collections: [Categories, Contents, Layouts, Media, Pages, Tags, Users],
  typescript: {
    outputFile: path.join(__dirname, "../types", "payload.ts"),
  },
  plugins: [
    seo({
      collections: ["pages"],
      uploadsCollection: "media",
      generateTitle: generateTitle,
    }),
    cloudStorage({
      collections: {
        media: {
          adapter: adapter,
        },
      },
    }),
  ],
  cors: "*",
});
