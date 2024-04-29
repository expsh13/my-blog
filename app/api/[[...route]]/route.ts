import { Hono } from "hono";
import { handle } from "hono/vercel";

const app = new Hono();

app.get("/hello", (c) => {
	return c.json({
		message: "Hello!",
	});
});

export const GET = handle(app);
