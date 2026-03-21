import crypto from "node:crypto";
import type { Core } from "@strapi/strapi";

export default ({ strapi }: { strapi: Core.Strapi }) => {
	function getKeys(): string[] {
		return strapi.config.get("server.app.keys") as string[];
	}

	return {
		sign(data: string): string {
			const key = getKeys()[0];
			return crypto.createHmac("sha256", key).update(data).digest("hex");
		},

		verify(data: string, signature: string): boolean {
			return getKeys().some((key) => {
				const expected = crypto
					.createHmac("sha256", key)
					.update(data)
					.digest("hex");
				if (expected.length !== signature.length) return false;
				return crypto.timingSafeEqual(
					Buffer.from(expected),
					Buffer.from(signature),
				);
			});
		},
	};
};
