import { useEffect, useRef, useState } from "react";
import { fetchChallenge } from "../../api/contact/fetch-challenge.ts";

export function useContactFormChallenge() {
	const challengeRef = useRef<string | null>(null);
	const [rateLimited, setRateLimited] = useState(false);

	useEffect(() => {
		fetchChallenge().then((result) => {
			if (result.ok) {
				challengeRef.current = result.data.challenge;
			} else if (result.error.name === "TooManyRequestsError") {
				setRateLimited(true);
			}
		});
	}, []);

	async function refetch() {
		const result = await fetchChallenge();
		if (result.ok) {
			challengeRef.current = result.data.challenge;
		}
	}

	function getCurrentChallenge() {
		return challengeRef.current ?? "";
	}

	return { rateLimited, refetch, getCurrentChallenge };
}
