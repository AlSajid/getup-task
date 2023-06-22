import PrivateRoute from "@/components/PrivateRoute";

async function getPost(id: number) {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
	if (!res.ok) throw new Error("Failed to fetch data");
	return res.json();
}

async function getUser(id: number) {
	const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
	if (!res.ok) throw new Error("Failed to fetch data");
	return res.json();
}

export default async function Page({params}: {params: {id: number}}) {
	const post = await getPost(params.id);
	const user = await getUser(post.userId);

	return (
		<PrivateRoute>
			<div className="flex justify-center items-center h-96">
				<div className="m-3 bg-white p-3 w-96 shadow rounded-xl">
					<h3 className="p-3">
						<span className="font-bold">Title:</span>
						<span className="ml-3">{post.title}</span>
					</h3>

					<h3 className="p-3">
						<span className="font-bold">Author:</span>
						<span className="ml-3">{user.name}</span>
					</h3>
					<hr />
					<p className="p-3 text-justify">
						<span className="font-bold">Post:</span>
						<span className="ml-3">{post.body}</span>
					</p>
				</div>
			</div>
		</PrivateRoute>
	);
}
