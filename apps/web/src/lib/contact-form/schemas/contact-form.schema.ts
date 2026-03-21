import { CONTACT } from "@portfolio/config";
import { z } from "zod/mini";

export const contactFormSchema = z.object({
	name: z.string().check(
		z.minLength(CONTACT.name.minLength, {
			message: "Name must be at least 1 character long.",
		}),
	),
	email: z.email({ message: "Invalid email address." }),
	message: z.string().check(
		z.minLength(CONTACT.message.minLength, {
			message: `Message must be at least ${CONTACT.message.minLength} characters long.`,
		}),
		z.maxLength(CONTACT.message.maxLength, {
			message: `Message must be at most ${CONTACT.message.maxLength} characters long.`,
		}),
	),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
