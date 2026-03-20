import type { Core } from "@strapi/strapi";

const config = ({
	// biome-ignore lint/correctness/noUnusedFunctionParameters: scaffolding code
	env,
}: Core.Config.Shared.ConfigParams): Core.Config.Plugin => ({});

export default config;
