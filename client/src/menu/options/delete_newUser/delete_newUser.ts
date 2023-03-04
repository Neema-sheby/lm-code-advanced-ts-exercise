import { print, prompt, printNewLine, clear } from "../../../ui/console";
import { getUserToDelete } from "../../../api/get_user_to_delete";

export async function deleteNewUser(): Promise<void> {
	clear("yes");
	const id: string = await prompt("Enter the user id");

	if (id) {
		printNewLine();
		const response = await getUserToDelete(id);

		if (typeof response !== "string") {
			if (response) {
				print("🥳 user deleted successfully");
			} else {
				print("🤪 user id Not Found");
			}
		}
	} else {
		print("😅 Please enter the user id");
	}
}
