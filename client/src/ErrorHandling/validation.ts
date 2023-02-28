// Validate user id (Check if id is a number)
export const validateId = (id: string) => {
	if (id.match(/\d+/g)) return true;
	else false;
};

// Validate username
export function validateName(name: string): boolean {
	let isString = false;
	if (name.match(/^[a-z][a-z\s]*$/)) {
		isString = true;
	}
	return isString;
}
