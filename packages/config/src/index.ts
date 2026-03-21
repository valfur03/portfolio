export const CONTACT = {
	name: {
		minLength: 1,
	},
	message: {
		minLength: 10,
		maxLength: 2500,
	},
} as const;
