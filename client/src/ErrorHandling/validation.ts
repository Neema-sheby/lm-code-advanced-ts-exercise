// Validate user id (Check if id is a number)
export const validateId = (id: string) => {
	if (id.match(/\d+/g)) return true;
	else false;
};

// Validate username
export function validateName(name: string): boolean {
	let isString = false;
	if (!name.match(/[^$A-Za-z]/g)) {
		isString = true;
	}
	return isString;
}
