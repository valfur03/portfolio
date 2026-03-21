import { CONTACT } from "@portfolio/config";
import { z } from "zod";

export const submitSchema = z.object({
	name: z.string().min(CONTACT.name.minLength),
	email: z.email(),
	message: z
		.string()
		.min(CONTACT.message.minLength)
		.max(CONTACT.message.maxLength),
	challenge: z.string().min(1),
	website: z.string().optional(),
});

export type SubmitInput = z.infer<typeof submitSchema>;
