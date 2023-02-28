import * as express from "express";
import { Express } from "express";
import { getAllPosts, posts } from "../services/posts_service";
import { getAllUsers, users } from "../services/users_service";

/*

	This file hooks up routes such as `/` or `/users` with methods that can handle their response

	Normally we'd put those methods in a Controller layer, to keep them separate...

	... but for this little project we'll bypass that and keep the logic all in this one file.

*/

export function initialiseRoutes(app: Express) {
	console.log("🏗️  Setting up routers...");

	addBaseRouter(app);

	addAPIRoutes(app);
}

function addBaseRouter(app: Express) {
	console.log("🛠️  Creating base router...");

	const baseRouter = express.Router();

	baseRouter.use((req, res, next) => {
		res.header("Access-Control-Allow-Methods", "GET");
		console.log(`📨 ${req.url}`);
		next();
	});

	console.log("🏠❤️‍🩹  Adding home health check route...");
	baseRouter.get("/", (req, res) => {
		res.status(200).send("👍 Okay! The server is responding! 🙌");
	});

	console.log("🛠️  Applying base router to Express server...");
	app.use("/", baseRouter);
}

// this function adds all the routes we can access by going to /api/[someRoute]
function addAPIRoutes(app: Express) {
	console.log("🛠️  Creating API router...");

	const apiRouter = express.Router();
	apiRouter.use((req, res, next) => {
		// we'll use this router to return specifically JSON
		res.setHeader("Content-Type", "application/json");
		next();
	});

	// this route allows the client to "send a message" to the server
	console.log("📨  Adding messaging route...");
	apiRouter.post("/send/", (req, res) => {
		const { body } = req;

		// reply with a success boolean
		console.log(`👋 Received : "${body.message}"`);
		res.status(200).send({
			success: true,
		});
	});

	// now we'll add some routes that let us browse some blog posts
	console.log("✍️  Adding blog post routes...");
	apiRouter.get("/posts/all", (req, res) => {
		res.status(200).send(JSON.stringify(getAllPosts()));
	});

	apiRouter.get("/posts/:id", (req, res) => {
		const post = getAllPosts().find((p) => p.id === req.params.id);
		if (post !== undefined)
			res.status(200).send(JSON.stringify({ postFound: true, ...post }));
		else res.status(200).send(JSON.stringify({ postFound: false }));
	});

	console.log("✍️  Adding user routes...");
	apiRouter.get("/users/all", (req, res) => {
		res.status(200).send(JSON.stringify(getAllUsers()));
	});

	// ❗ [1] See README

	// this route allows the client to add user
	console.log("✍️ Adding new user to existing Users");
	apiRouter.post("/users/add", (req, res) => {
		const { body } = req;
		const { userName } = body;
		users.push({
			id: (users.length + 1).toString(),
			name: userName,
			creationDate: new Date(),
		});
		res.status(200).send(JSON.stringify({ userAdded: true }));
	});

	// this route allows the client to add posts
	console.log("✍️ Adding new posts to existing Posts");
	apiRouter.post("/posts/add", (req, res) => {
		const { body } = req;
		const { title, text, author } = body;
		posts.push({
			id: (posts.length + 1).toString(),
			title: title,
			text: text,
			author: author,
		});

		res.status(200).send(JSON.stringify({ postAdded: true }));
	});

	apiRouter.get("/users/:id", (req, res) => {
		res
			.status(200)
			.send(
				JSON.stringify(getAllUsers().filter((u) => u.id === req.params.id))
			);
	});

	console.log("🛠️  Applying API router to Express server...");
	app.use("/api", apiRouter);
}
