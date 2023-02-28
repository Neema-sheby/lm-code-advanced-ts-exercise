import { User } from "./posts.types";

export interface PostFoundResponseType {
	postFound: boolean;
	id: string;
	title: string;
	text: string;
	author: User;
}

export interface PostAddedResponseType {
	postAdded: boolean;
}

export interface UserAddedResponseType {
	userAdded: boolean;
}
