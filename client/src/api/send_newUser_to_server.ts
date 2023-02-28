import { baseUrl } from "./base_url";
import { errorMessage } from "../ErrorHandling/errorMessage";
import { printNewLine } from "../ui/console";
import { UserAddedResponseType } from "../types/response.types";

export async function sendNewUserToServer(
	userName: string
): Promise<UserAddedResponseType | string> {
	try {
		const response = await fetch(baseUrl + "/api/users/add", {
			headers: {
				"Content-Type": "application/json",
			},
			method: "POST",
			body: JSON.stringify({ userName }),
		});

		const result: ResponseType = await response.json();

		return result;
	} catch (err: unknown) {
		printNewLine();
		return errorMessage(err);
	}
}
