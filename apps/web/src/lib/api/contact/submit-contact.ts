import { fetchApi } from "../fetch-api.ts";

export function submitContact(body: {
	name: string;
	email: string;
	message: string;
	challenge: string;
	website?: string;
}) {
	return fetchApi<{ status: string }>("/api/contact", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(body),
	});
}
