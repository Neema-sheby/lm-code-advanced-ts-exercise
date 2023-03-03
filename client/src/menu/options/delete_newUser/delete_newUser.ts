import { print, prompt, printNewLine, clear } from "../../../ui/console";
import { getUserToDelete } from "../../../api/get_user_to_delete";

export async function deleteNewUser(): Promise<void> {
	//clear("yes");
	const username: string = await prompt("Enter the username to delete");
	//printNewLine();

	const result = await getUserToDelete(username);

	if (typeof result === "string") {
		print(result);
		return;
	}

	const { deleted, user } = result;

	if (deleted) print(`🥳 ${user} is deleted`);
	else print(`🥳 ${user} Not Found`);
}
