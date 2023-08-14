import type { Media } from "@turbopress/api/types";
import { getPayloadCollection, getPayloadDocument } from "./api.service";

export async function getMediaCollection(query: any = null) {
  const url = `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/medias`;
  return getPayloadCollection<Media>(url, query);
}

export async function getMediaSingle(slug: string): Promise<Media | undefined> {
  const medias = await getMediaCollection({
    where: { slug: { equals: slug } },
  });
  if (medias.docs[0]) return medias.docs[0];
}

export async function getMediaById(id: string): Promise<Media | undefined> {
  const url = `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/media/` + id;
  return getPayloadDocument<Media>(url);
}
