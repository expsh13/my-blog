import { hc } from "hono/client";
import type { AppType } from "./api/[[...route]]/route";

export default async function Home() {
	const data = (async () => {
		const client = hc<AppType>("http://localhost:3000/");
		const res = await client.api.hello.$get({
			query: {
				name: "client",
			},
		});
		const data = await res.json();
		console.log(data);
	})();
	return <div>page</div>;
}
