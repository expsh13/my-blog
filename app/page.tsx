import { hc } from "hono/client";
import type { AppType } from "./api/[[...route]]/route";

const fetchData = async () => {
	// httpクライアント作成
	const client = hc<AppType>("http://localhost:3000/");

	const res = await client.api.users.$post({
		json: {
			name: "human",
			age: 22,
		},
	});
	if (res.ok) {
		const data = await res.json();
		return data;
	}
};

export default async function Home() {
	const data = await fetchData();
	console.log(data?.message);
	return <div>page</div>;
}
