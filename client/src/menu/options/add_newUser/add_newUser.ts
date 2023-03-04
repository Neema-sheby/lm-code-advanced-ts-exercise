import { print, printNewLine, prompt } from "../../../ui/console";
import { clear } from "../../../ui/console";
import { sendNewUserToServer } from "../../../api/send_newUser_to_server";
import { states } from "../../../states/states";
import { validateName } from "../../../ErrorHandling/validation";

export async function addNewUser(): Promise<string> {
	clear();
	const name: string = await prompt("Enter your name");

	if (name && validateName(name)) {
		const result = await sendNewUserToServer(name);

		if (typeof result !== "string") {
			printNewLine();
			const { userAdded } = result;
			if (userAdded) {
				print("Successfully added user details 🥳");
				printNewLine();
			}
		} else {
			print(result);
			printNewLine();
		}
	} else {
		printNewLine();
		print("⛔️ Error: Please enter a valid string");
		printNewLine();
	}
	return states.MENU;
}
