import type { Core } from "@strapi/strapi";
import { secondsUntilOldestExpires } from "../utils/rate-limit";

export default (_config: unknown, { strapi }: { strapi: Core.Strapi }) => {
	const contactSubmissionService = strapi.service(
		"api::contact-submission.contact-submission",
	);
	const windowMs = strapi.config.get<number>("contact.rateLimit.windowMs");
	const maxSubmissions = strapi.config.get<number>(
		"contact.rateLimit.maxSubmissions",
	);

	return async (ctx, next) => {
		const ip = ctx.request.ip;

		const recent =
			await contactSubmissionService.getSubmissionsInRateLimitWindow(ip);

		if (recent.length >= maxSubmissions) {
			ctx.set(
				"Retry-After",
				String(secondsUntilOldestExpires(recent[0].createdAt, windowMs)),
			);
			ctx.status = 429;
			ctx.body = {
				data: null,
				error: {
					status: 429,
					name: "TooManyRequestsError",
					message: "Rate limit exceeded",
				},
			};
			return;
		}

		await next();
	};
};
