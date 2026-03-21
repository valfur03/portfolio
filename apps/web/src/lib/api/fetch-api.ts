import { apiConfig } from "../../config/api.ts";
import type { ApiError } from "./types.ts";

const NETWORK_ERROR: ApiError = {
	status: 0,
	name: "NetworkError",
	message: "A network error occurred. Please check your connection.",
};

export async function fetchApi<T>(
	path: string,
	options?: RequestInit,
): Promise<{ ok: true; data: T } | { ok: false; error: ApiError }> {
	try {
		const res = await fetch(`${apiConfig.baseUrl}${path}`, options);
		const json = await res.json();
		if (!res.ok) {
			return { ok: false, error: json.error ?? NETWORK_ERROR };
		}
		return { ok: true, data: json.data };
	} catch {
		return { ok: false, error: NETWORK_ERROR };
	}
}
