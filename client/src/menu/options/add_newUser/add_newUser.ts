import { printNewLine, prompt } from "../../../ui/console";
import { clear } from "../../../ui/console";
import { User } from "../../../types/posts.types";
import { sendNewUserToServer } from "../../../api/send_newUser_to_server";
import { states } from "../../../states/states";
import { validateName } from "../../../ErrorHandling/validation";

export async function addNewUser(): Promise<string> {
	clear();
	const name: string = await prompt("Enter your name");

	if (validateName(name)) {
		const result = await sendNewUserToServer(name);

		if (typeof result !== "string") {
			printNewLine();
			const { success } = result;
			if (success) {
				console.log("Successfully added user details 🥳");
				printNewLine();
			}
			return states.SHOW_USERS;
		} else {
			console.log(result);
			printNewLine();
			return states.MENU;
		}
	} else {
		printNewLine();
		console.log("⛔️ Error: Please enter a valid string");
		printNewLine();
		return states.ADD_USER;
	}
}
