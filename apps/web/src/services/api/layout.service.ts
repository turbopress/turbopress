import type { Layout } from "@turbopress/api/types";
import { getPayloadCollection } from "./api.service";

export async function getLayoutCollection(query: any = null) {
  const url = ` ${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/layouts`;
  return getPayloadCollection<Layout>(url, query);
}

export async function getLayoutSingle(
  name: string,
): Promise<Layout | undefined> {
  const pages = await getLayoutCollection({
    where: { name: { equals: name } },
  });
  if (pages.docs[0]) return pages.docs[0];
}
