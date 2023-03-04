import { fetchPost } from "../../../api/fetch_post";
import { print, prompt, printNewLine, clear } from "../../../ui/console";
import { Post } from "../../../types/posts.types";
import { PostFoundResponseType } from "../../../types/response.types";
import { states } from "../../../states/states";
import { validateId } from "../../../ErrorHandling/validation";

export async function browsePosts(): Promise<void | string> {
	clear();

	const desiredPostId: string = await prompt("Enter Post ID");

	// Checking if id is a number
	if (validateId(desiredPostId)) {
		print(`📨 Fetching post "${desiredPostId}...`);

		const result = await fetchPost(desiredPostId);

		print(`🥳 Received post:`);

		// Checking if result is not an error message
		if (typeof result !== "string") {
			// Checking if result has postFound === true or false
			if (result.postFound) {
				const data: Post = {
					id: result.id,
					title: result.title,
					text: result.text,
					author: result.author,
				};

				printNewLine();
				await prompt("⌨️ Press [ENTER] to return to the main menu! 🕶️");
			} else {
				clear();
				print(`😮 There are no posts with id: ${desiredPostId}`);
				printNewLine();
				await prompt("⌨️ Press [ENTER] to return to the main menu! 🕶️");
			}
		} else {
			clear();
			console.log(result);
			printNewLine();
			await prompt("⌨️ Press [ENTER] to return to the main menu! 🕶️");
		}
	} else {
		clear();
		print("😮 Enter a valid number for the id");
		printNewLine();
		await prompt("⌨️ Press [ENTER] to return to the main menu! 🕶️");
		return states.UNKNOWN;
	}
}
