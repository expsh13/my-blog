import { client } from "./lib/hono";

const fetchData = async () => {
	// httpクライアント作成

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
	return <div>message：{data?.message}</div>;
}
