import { baseUrl } from "./base_url.mjs";

export async function fetchPost(id) {
	try {
		const result = await fetch(baseUrl + "/api/posts/" + id);
		const post = await result.json();
		return post;
	} catch {
		return [];
	}
}
