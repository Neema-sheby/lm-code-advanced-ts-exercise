import { baseUrl } from "./base_url";
import { User } from "../types/posts.types";
import { errorMessage } from "../ErrorHandling/errorMessage";
import { print } from "../ui/console";

export async function fetchAllUsers(): Promise<Array<User>> {
	try {
		const result = await fetch(baseUrl + "/api/users/all");
		const users = await result.json();
		return users;
	} catch (err: unknown) {
		const errMsg = errorMessage(err);
		print(errMsg, true);
		return [];
	}
}
