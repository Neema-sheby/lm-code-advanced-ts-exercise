export function errorMessage(err: unknown): string {
	let errMsg = "";
	if (err instanceof Error) errMsg = "⛔️ Error : " + err.message;
	return errMsg;
}
