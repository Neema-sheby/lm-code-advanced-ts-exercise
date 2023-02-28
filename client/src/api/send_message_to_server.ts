import { print, prompt } from "../ui/console";
import { baseUrl } from "./base_url";
import { errorMessage } from "../ErrorHandling/errorMessage";

export async function sendMessageToServer(message: string): Promise<boolean> {
	try {
		const result = await fetch(baseUrl + "/api/send/", {
			headers: {
				"Content-Type": "application/json",
			},
			method: "POST",
			body: JSON.stringify({ message: message }),
		});

		const json = await result.json();

		const { success } = json;

		return success;
	} catch (err: unknown) {
		const errMsg = errorMessage(err);
		print(errMsg, true);
		return false;
	}
}
