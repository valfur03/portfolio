import type { Core } from "@strapi/strapi";

const config = ({ env }: Core.Config.Shared.ConfigParams) => ({
	emailTo: env("EMAIL_TO"),
	rateLimit: {
		windowMs: 24 * 60 * 60_000, // 24 hours
		maxSubmissions: 3,
	},
});

export default config;
