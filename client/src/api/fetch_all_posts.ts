import { baseUrl } from "./base_url";
import { Post } from "../types/posts.types";
import { errorMessage } from "../ErrorHandling/errorMessage";
import { print } from "../ui/console";

export async function fetchAllPosts(): Promise<Array<Post>> {
	try {
		const result = await fetch(baseUrl + "/api/posts/all");
		const posts = await result.json();
		return posts;
	} catch (err: unknown) {
		const errMsg = errorMessage(err);
		print(errMsg, true);
		return [];
	}
}
