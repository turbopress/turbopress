import qs from "qs";
import type { PayloadCollection } from "../../types";

export async function apiFetch<T = any>(
  url: string | URL,
  options: RequestInit = {},
) {
  const defaultOptions = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const res = await fetch(url, { ...defaultOptions, ...options });
  if (res.ok) {
    return res.json() as T;
  }
  throw new Error(`Error fetching data: ${res.statusText} (${res.status})}`);
}

export async function getPayloadCollection<CollectionType>(
  url: string | URL,
  query: any = null,
) {
  const stringifiedQuery = qs.stringify(query, { addQueryPrefix: true });
  return apiFetch<PayloadCollection<CollectionType>>(url + stringifiedQuery);
}

export async function getPayloadDocument<CollectionType>(url: string | URL) {
  return apiFetch<CollectionType>(url);
}
