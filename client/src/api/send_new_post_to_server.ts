import { errorMessage } from "../ErrorHandling/errorMessage";
import { Post } from "../types/posts.types";
import { PostAddedResponseType } from "../types/response.types";
import { baseUrl } from "./base_url";

export async function sendNewPostToServer(
	title: string,
	text: string,
	author: string
): Promise<PostAddedResponseType | string> {
	try {
		const response = await fetch(baseUrl + "/api/posts/add", {
			headers: { "Content-Type": "application/json" },
			method: "POST",
			body: JSON.stringify({ title: title, text: text, author: author }),
		});

		const result = await response.json();
		return result;
	} catch (err) {
		return errorMessage(err);
	}
}
