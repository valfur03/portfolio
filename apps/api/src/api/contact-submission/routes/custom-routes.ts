export default {
	routes: [
		{
			method: "GET",
			path: "/contact/challenge",
			handler: "contact-submission.challenge",
			config: {
				auth: false,
				middlewares: ["api::contact-submission.rate-limit"],
			},
		},
		{
			method: "POST",
			path: "/contact",
			handler: "contact-submission.submit",
			config: {
				auth: false,
				middlewares: ["api::contact-submission.rate-limit"],
			},
		},
	],
};
