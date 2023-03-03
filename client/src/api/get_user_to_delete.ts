// get_user_to_delete.ts
import { baseUrl } from "./base_url";
import { errorMessage } from "../ErrorHandling/errorMessage";
import { UserDeletedResponseType } from "../types/response.types";

export async function getUserToDelete(
	username: string
): Promise<UserDeletedResponseType | string> {
	try {
		const response = await fetch(`${baseUrl}/api/delete/${username}`);
		const result = await response.json();
		console.log(result.deleted);
		return result;
	} catch (err) {
		return errorMessage(err);
	}
}
