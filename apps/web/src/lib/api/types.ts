export interface ApiError<N extends string = string> {
	status: number;
	name: N;
	message: string;
}

export interface ApiValidationError extends ApiError<"ValidationError"> {
	details: { errors: Array<{ path: string[]; message: string }> };
}
