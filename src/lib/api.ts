import { getToken } from "./auth";

const BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000/api/v1";

export async function apiFetch(
  path: string,
  options: RequestInit = {},
): Promise<Response> {
  const token = getToken();
  const isFormData = options.body instanceof FormData;

  const headers: Record<string, string> = {
    Accept: "application/json",
    // FormData: jangan set Content-Type — browser harus menambah boundary sendiri
    ...(isFormData ? {} : { "Content-Type": "application/json" }),
    ...(options.headers as Record<string, string>),
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  return fetch(`${BASE_URL}${path}`, { ...options, headers });
}

export function getProductImageUrl(url: string | null | undefined): string {
  if (!url) return "";
  const base =
    process.env.NEXT_PUBLIC_API_URL ?? "http://127.0.0.1:8000/api/v1";
  try {
    const origin = new URL(base).origin;
    if (url.startsWith("http://localhost/storage")) {
      return url.replace("http://localhost", origin);
    }
    if (url.startsWith("/storage")) {
      return `${origin}${url}`;
    }

    // Default fallback for relative storage paths like payment_proofs/... or media/...
    return `${origin}/storage/${url.startsWith("/") ? url.slice(1) : url}`;
  } catch (e) {
    // ignore
  }
  return url;
}
