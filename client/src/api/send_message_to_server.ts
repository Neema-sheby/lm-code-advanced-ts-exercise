import { print, prompt } from "../ui/console.js";
import { baseUrl } from "./base_url.mjs";

export async function sendMessageToServer(message) {
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
	} catch (e) {
		console.error(e);
		return false;
	}
}
