import Link from "next/link";

export type post = {
	id: number;
	title: string;
	body: string;
};

async function getPosts() {
	const res = await fetch("https://jsonplaceholder.typicode.com/posts");
	if (!res.ok) throw new Error("Failed to fetch data");
	return res.json();
}

export default async function Posts() {
	const posts = await getPosts();

	return (
		<>
			<h2 className="text-center my-3 text-3xl">100 Posts</h2>
			{posts.map((post: post) => (
				<Link href={`/post/${post.id}`} key={post.id}>
					<div className=" bg-white p-3 shadow rounded my-1">
						<span className="font-medium">{post.id}:</span>
						<span className="ml-3">{post.title}</span>
					</div>
				</Link>
			))}
		</>
	);
}
