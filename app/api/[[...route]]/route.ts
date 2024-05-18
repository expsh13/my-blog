import { Hono } from "hono";
import { handle } from "hono/vercel";
import users from "./users";

const app = new Hono().basePath("/api");

const routes = app.route("/users", users);

// 型作成
export default app;
export type AppType = typeof routes;
export const POST = handle(app);
export const GET = handle(app);
