import type { PaginationModel } from "../types";

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

export async function payloadFetchMany<T>(
  url: string | URL,
  options: RequestInit = {},
) {
  return apiFetch<PaginationModel<T>>(url, options);
}
