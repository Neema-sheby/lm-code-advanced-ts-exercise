import { baseUrl } from "./base_url";
import { errorMessage } from "../ErrorHandling/errorMessage";
import { printNewLine } from "../ui/console";
import { User } from "../types/posts.types";

interface successNewUserResponseType {
	success: boolean;
	allUsers: Array<User>;
}

export async function sendNewUserToServer(
	userName: string
): Promise<successNewUserResponseType | string> {
	try {
		const response = await fetch(baseUrl + "/api/users/add", {
			headers: {
				"Content-Type": "application/json",
			},
			method: "POST",
			body: JSON.stringify({ userName }),
		});

		const result = await response.json();

		return result;
	} catch (err: unknown) {
		printNewLine();
		return errorMessage(err);
	}
}
