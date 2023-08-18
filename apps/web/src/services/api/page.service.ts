import type { Page } from "@turbopress/api/types";
import { getPayloadCollection } from "./api.service";

export async function getPageCollection(query: any = null) {
  const url = `${import.meta.env.PAYLOAD_PUBLIC_SERVER_URL}/api/pages`;
  return getPayloadCollection<Page>(url, query);
}

export async function getPageSingle(slug: string): Promise<Page | undefined> {
  const pages = await getPageCollection({
    where: { slug: { equals: slug } },
  });
  if (pages.docs[0]) return pages.docs[0];
}
