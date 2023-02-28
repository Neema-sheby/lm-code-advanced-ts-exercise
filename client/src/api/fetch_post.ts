import { baseUrl } from "./base_url";
import { postFoundType, postNotFoundType } from "../types/posts.types";
import { errorMessage } from "../ErrorHandling/errorMessage";

export async function fetchPost(id: string): Promise<postFoundType | string> {
	try {
		const result = await fetch(baseUrl + "/api/posts/" + id);
		const post = await result.json();
		return post;
	} catch (err: unknown) {
		return errorMessage(err);
	}
}
