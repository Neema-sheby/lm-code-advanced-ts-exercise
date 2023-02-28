import { baseUrl } from "./base_url";
import { PostFoundResponseType } from "../types/response.types";
import { errorMessage } from "../ErrorHandling/errorMessage";

export async function fetchPost(
	id: string
): Promise<PostFoundResponseType | string> {
	try {
		const result = await fetch(baseUrl + "/api/posts/" + id);
		const post = await result.json();
		return post;
	} catch (err: unknown) {
		return errorMessage(err);
	}
}
