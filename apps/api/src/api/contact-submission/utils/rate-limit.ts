export function secondsUntilOldestExpires(
	oldestCreatedAt: string,
	windowMs: number,
): number {
	const oldestMs = new Date(oldestCreatedAt).getTime();
	return Math.ceil((oldestMs + windowMs - Date.now()) / 1000);
}
