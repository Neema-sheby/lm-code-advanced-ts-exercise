// get_user_to_delete.ts
import { baseUrl } from "./base_url";
import { errorMessage } from "../ErrorHandling/errorMessage";
import { UserDeletedResponseType } from "../types/response.types";

export async function getUserToDelete(id: string): Promise<boolean | string> {
	try {
		const response = await fetch(baseUrl + "/api/users/" + id, {
			method: "DELETE",
		});

		const { deleted } = (await response.json()) as UserDeletedResponseType;

		return deleted;
	} catch (err) {
		return errorMessage(err);
	}
}
