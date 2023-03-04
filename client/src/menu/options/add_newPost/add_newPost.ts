import { print, clear, printNewLine, prompt } from "../../../ui/console";
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

			if (postAdded) {
				print("Successfully added the new posts 🥳");
				printNewLine();
			}
		} else {
			print(result);
			printNewLine();
		}
	} else {
		print("⛔️ Error: Please enter the title, post and author name");
		printNewLine();
	}
	return states.MENU;
}
