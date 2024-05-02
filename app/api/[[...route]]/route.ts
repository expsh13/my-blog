import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { handle } from "hono/vercel";
import { z } from "zod";

const app = new Hono().basePath("/api");

const schema = z.object({
	id: z.string(),
	title: z.string(),
});

const route = app
	.get(
		"/hello",
		zValidator(
			"query",
			z.object({
				name: z.string(),
			}),
		),
		(c) => {
			const { name } = c.req.valid("query");
			return c.json({
				message: `Hello! ${name}`,
			});
		},
	)
	.post("/hello", (c) => {
		return c.json({
			message: "Hello post!",
		});
	});

export type AppType = typeof route;

export const GET = handle(app);
export const POST = handle(app);
