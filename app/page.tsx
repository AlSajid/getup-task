import Posts from "./Posts";
import Products from "./Products";

export default async function Page() {
	return (
		<div className="container mx-auto grid grid-cols-2 gap-3 p-3">
			<main>
				<Products />
			</main>
			<aside>{/* <Posts /> */}</aside>
		</div>
	);
}
