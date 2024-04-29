import { Hono } from "hono";
import { handle } from "hono/vercel";

const app = new Hono().basePath("/api");

app
	.get("/hello", (c) => {
		return c.json({
			message: "Hello get!",
		});
	})
	.post("/hello", (c) => {
		return c.json({
			message: "Hello post!",
		});
	});

export const GET = handle(app);
export const POST = handle(app);
