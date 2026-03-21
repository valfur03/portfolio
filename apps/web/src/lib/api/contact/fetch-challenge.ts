import { fetchApi } from "../fetch-api.ts";

export function fetchChallenge() {
	return fetchApi<{ challenge: string }>("/api/contact/challenge");
}
