import { Hono } from "hono";
import { handle } from "hono/vercel";
import posts from "./posts";

const app = new Hono().basePath("/api");

const routes = app.route("/posts", posts);

// 型作成
export default app;
export type AppType = typeof routes;
export const POST = handle(app);
export const GET = handle(app);
