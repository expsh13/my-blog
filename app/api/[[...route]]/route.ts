import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { handle } from "hono/vercel";
import { z } from "zod";

export const runtime = "edge";

const app = new Hono().basePath("/api");

app.get("/hello", zValidator("query", z.ob), (c) => {
	return c.json({
		message: "Hello Next.js!",
	});
});

export const GET = handle(app);
