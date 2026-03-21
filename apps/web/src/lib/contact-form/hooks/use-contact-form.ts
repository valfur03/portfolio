import { useState } from "react";
import { submitContact } from "../../api/contact/submit-contact.ts";
import { useContactFormChallenge } from "./use-contact-form-challenge.ts";

export type FormStatus =
	| { state: "idle" }
	| { state: "submitting" }
	| { state: "success" }
	| { state: "error"; message: string; cooldownMs: number };

export function useContactForm() {
	const challenge = useContactFormChallenge();
	const [status, setStatus] = useState<FormStatus>({ state: "idle" });

	async function submitFormValues(
		values: { name: string; email: string; message: string },
		honeypot: string,
	) {
		if (status.state === "submitting") return;
		setStatus({ state: "submitting" });

		const result = await submitContact({
			...values,
			challenge: challenge.getCurrentChallenge(),
			website: honeypot,
		});

		if (result.ok) {
			setStatus({ state: "success" });
			return;
		}

		await challenge.refetch();

		setStatus({
			state: "error",
			message:
				"Something went wrong. Please try again, or reach out via LinkedIn.",
			cooldownMs: 3000,
		});
	}

	function resetStatus() {
		setStatus({ state: "idle" });
	}

	return {
		status,
		formDisabled: challenge.rateLimited,
		submitFormValues,
		resetStatus,
	};
}
