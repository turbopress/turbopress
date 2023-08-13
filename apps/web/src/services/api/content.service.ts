import type { Layout } from "@turbopress/api/types";
import { getPayloadCollection } from "./api.service";

export async function getContentCollection(query: any = null) {
  const url = ` ${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/layouts`;
  return getPayloadCollection<Layout>(url, query);
}

export async function getContentSingle(
  name: string,
): Promise<Layout | undefined> {
  const pages = await getContentCollection({
    where: { name: { equals: name } },
  });
  if (pages.docs[0]) return pages.docs[0];
}
