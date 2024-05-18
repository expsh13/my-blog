import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { handle } from "hono/vercel";
import { z } from "zod";

const app = new Hono().basePath("/api");

const schema = z.object({
	name: z.string(),
	age: z.number(),
});

// api
const route = app.post("/users", zValidator("json", schema), (c) => {
	// 検証済みのデータ
	const { name, age } = c.req.valid("json");
	return c.json({
		message: `${name} is ${age} years old`,
	});
});

// 型作成
export type AppType = typeof route;

export const POST = handle(route);
