import type { Core } from "@strapi/strapi";

export default ({
	env,
}: Core.Config.Shared.ConfigParams): Core.Config.Middlewares => [
	"strapi::logger",
	"strapi::errors",
	"strapi::security",
	{
		name: "strapi::cors",
		config: {
			origin: env("CORS_ORIGIN", "http://localhost:4321").split(","),
		},
	},
	"strapi::poweredBy",
	"strapi::query",
	"strapi::body",
	"strapi::session",
	"strapi::favicon",
	"strapi::public",
];
