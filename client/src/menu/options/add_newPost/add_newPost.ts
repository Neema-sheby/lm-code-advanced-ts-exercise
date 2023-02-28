import { clear, printNewLine, prompt } from "../../../ui/console";
import { sendNewPostToServer } from "../../../api/send_new_post_to_server";
import { states } from "../../../states/states";

export async function addNewPost(): Promise<string> {
	clear();
	const title: string = await prompt("Enter title of post");
	printNewLine();
	const post: string = await prompt("Enter the post");
	printNewLine();
	const author: string = await prompt("Enter the name of Author");
	printNewLine();

	if (title && post && author) {
		const result = await sendNewPostToServer(title, post, author);

		if (typeof result !== "string") {
			const { postAdded } = result;

			/// do validation here

			if (postAdded) {
				console.log("Successfully added the new posts 🥳");
				printNewLine();
			}
		} else {
			console.log(result);
			printNewLine();
		}
	} else {
		printNewLine();
		console.log("⛔️ Error: Please enter a valid data");
		printNewLine();
	}
	return states.MENU;
}
