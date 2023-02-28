import { states } from "./states";

export class State {
	#state: string = states.MENU;

	get() {
		return this.#state;
	}

	set(newState: string) {
		this.#state = newState;
	}
}
