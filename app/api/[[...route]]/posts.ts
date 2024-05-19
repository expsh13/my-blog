import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { z } from "zod";

const schema = z.object({
	name: z.string(),
	age: z.number(),
});

// api
const app = new Hono()
	.post("/", zValidator("json", schema), (c) => {
		// 検証済みのデータ
		const { name, age } = c.req.valid("json");
		return c.json({
			message: `${name} is ${age} years old`,
		});
	})
	.get("/", (c) => c.json("get users"));

export default app;
