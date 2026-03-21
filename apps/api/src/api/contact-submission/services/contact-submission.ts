import { factories } from "@strapi/strapi";

const MIN_AGE_MS = 3_000; // 3 seconds
const MAX_AGE_MS = 30 * 60_000; // 30 minutes
const MAX_URL_COUNT = 3;
const SPAM_PATTERN =
	/\b(buy now|click here|free money|act now|limited time|winner|congratulations)\b/i;

export default factories.createCoreService(
	"api::contact-submission.contact-submission",
	({ strapi }) => {
		const hmacService = strapi.service("api::hmac.hmac");
		const emailTo = strapi.config.get<string>("contact.emailTo");
		const windowMs = strapi.config.get<number>("contact.rateLimit.windowMs");

		return {
			async getSubmissionsInRateLimitWindow(ip: string) {
				const windowStart = new Date(Date.now() - windowMs).toISOString();

				return strapi
					.documents("api::contact-submission.contact-submission")
					.findMany({
						filters: {
							senderIp: ip,
							createdAt: { $gte: windowStart },
						},
						sort: "createdAt:asc",
					});
			},

			verifyChallenge(challenge: string): boolean {
				const dotIndex = challenge.indexOf(".");
				if (dotIndex === -1) return false;

				const timestamp = challenge.slice(0, dotIndex);
				const signature = challenge.slice(dotIndex + 1);

				if (!hmacService.verify(timestamp, signature)) return false;

				const age = Date.now() - Number(timestamp);
				return age >= MIN_AGE_MS && age <= MAX_AGE_MS;
			},

			async checkContentHeuristics(
				message: string,
				ip: string,
			): Promise<{ rejected: boolean; reason?: string }> {
				const urlCount = (message.match(/https?:\/\//gi) || []).length;
				if (urlCount > MAX_URL_COUNT) {
					return { rejected: true, reason: "Too many URLs" };
				}

				if (SPAM_PATTERN.test(message)) {
					return { rejected: true, reason: "Spam pattern detected" };
				}

				const windowStart = new Date(Date.now() - windowMs).toISOString();
				const duplicates = await strapi
					.documents("api::contact-submission.contact-submission")
					.findMany({
						filters: {
							senderIp: ip,
							message,
							createdAt: { $gte: windowStart },
						},
						limit: 1,
					});
				if (duplicates.length > 0) {
					return { rejected: true, reason: "Duplicate submission" };
				}

				return { rejected: false };
			},

			async storeSubmission(data: {
				name: string;
				email: string;
				message: string;
				ip: string;
				status: "delivered" | "rejected" | "failed";
			}) {
				return strapi
					.documents("api::contact-submission.contact-submission")
					.create({
						data: {
							name: data.name,
							email: data.email,
							message: data.message,
							senderIp: data.ip,
							status: data.status,
						},
					});
			},

			async updateStatus(
				documentId: string,
				status: "delivered" | "rejected" | "failed",
			) {
				return strapi
					.documents("api::contact-submission.contact-submission")
					.update({
						documentId,
						data: { status },
					});
			},

			async sendNotification(submission: {
				name: string;
				email: string;
				message: string;
			}) {
				const emailService = strapi.plugin("email").service("email");
				await emailService.send({
					to: emailTo,
					replyTo: submission.email,
					subject: `Portfolio contact: ${submission.name}`,
					text: [
						`From: ${submission.name} <${submission.email}>`,
						"",
						submission.message,
					].join("\r\n"),
					html: [
						`<p><strong>From:</strong> ${submission.name} &lt;${submission.email}&gt;</p>`,
						`<p>${submission.message.replace(/\n/g, "<br>")}</p>`,
					].join(""),
				});
			},
		};
	},
);
