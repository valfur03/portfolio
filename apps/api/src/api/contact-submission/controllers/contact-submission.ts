import { factories } from "@strapi/strapi";
import { errors } from "@strapi/utils";
import { submitSchema } from "../schemas/submit.schema";

interface SubmissionContext {
	name: string;
	email: string;
	message: string;
	ip: string;
}

export default factories.createCoreController(
	"api::contact-submission.contact-submission",
	({ strapi }) => {
		const hmacService = strapi.service("api::hmac.hmac");
		const contactSubmissionService = strapi.service(
			"api::contact-submission.contact-submission",
		);

		async function reject(
			submission: SubmissionContext,
			reason: string,
		): Promise<never> {
			await contactSubmissionService.storeSubmission({
				...submission,
				deliveryStatus: "rejected",
			});
			throw new errors.ApplicationError(reason);
		}

		async function assertNotHoneypot(
			submission: SubmissionContext,
			website: string | undefined,
		) {
			if (website) await reject(submission, "Submission rejected");
		}

		async function assertChallengeValid(
			submission: SubmissionContext,
			challenge: string,
		) {
			if (!contactSubmissionService.verifyChallenge(challenge)) {
				await reject(submission, "Invalid or expired challenge");
			}
		}

		async function assertContentLegitimate(submission: SubmissionContext) {
			const heuristics = await contactSubmissionService.checkContentHeuristics(
				submission.message,
				submission.ip,
			);
			if (heuristics.rejected) {
				await reject(submission, "Submission rejected");
			}
		}

		return {
			async challenge(_ctx) {
				const timestamp = String(Date.now());
				const signature = hmacService.sign(timestamp);

				return { data: { challenge: `${timestamp}.${signature}` } };
			},

			async submit(ctx) {
				const result = submitSchema.safeParse(ctx.request.body);
				if (!result.success) {
					throw new errors.ValidationError("Validation failed", {
						errors: result.error.issues,
					});
				}

				const { name, email, message, challenge, website } = result.data;
				const ip = ctx.request.ip;
				const submission = { name, email, message, ip };

				await assertNotHoneypot(submission, website);
				await assertChallengeValid(submission, challenge);
				await assertContentLegitimate(submission);

				const record = await contactSubmissionService.storeSubmission({
					...submission,
					deliveryStatus: "delivered",
				});

				try {
					await contactSubmissionService.sendNotification(record);
				} catch {
					await contactSubmissionService.updateStatus(
						record.documentId,
						"failed",
					);
					throw new errors.ApplicationError("Failed to send email");
				}

				return { data: { status: "delivered" } };
			},
		};
	},
);
