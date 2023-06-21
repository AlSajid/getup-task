"use client";
import {product} from "@/types/products";
import {useEffect, useState} from "react";

export default function Products() {
	const [products, setProducts]: any = useState([]);
	const [loading, setLoading] = useState(true);
	const [page, setPage] = useState(1);
	const [hasMore, setHasMore] = useState(true);

	const loadMore = (page: number) => {
		setLoading(true);
		fetch(`https://app-area.bestu.com.bd/api/nextjs/products?page=${page}`, {
			headers: {
				Authorization: "GETUPLTD2023NEXTJS"
			}
		})
			.then((res) => res.json())
			.then((data) => {
				data.data.data.length === 0 && setHasMore(false);
				setProducts([...products, ...data.data.data]);
			})
			.finally(() => setLoading(false));
	};

	useEffect(() => {
		loadMore(1);
	}, []);

	return (
		<div className="grid grid-cols-1 gap-3	">
			<h1 className="text-center my-1 text-3xl">Products</h1>
			{products?.map((product: product) => (
				<div key={product.id} className="bg-white shadow p-3 rounded">
					<h2 className="bg-gray-950 text-white p-1 my-3">{product.flag_name}</h2>
					<h2>
						<span className="font-bold">Product:</span>
						<span className="ml-3">{product.name}</span>
					</h2>
					<h2>
						<span className="font-bold">Brand:</span>
						<span className="ml-3">{product.brand_name}</span>
					</h2>
					<h2>
						<span className="font-bold">Category:</span>
						<span className="ml-3">{product.category_name}</span>
					</h2>
					<h2>
						<span className="font-bold">Price:</span>
						<span className="ml-3">
							<span>৳{product.discount_price}</span>
							<del className="ml-3">{product.price}</del>
						</span>
					</h2>

					<p dangerouslySetInnerHTML={{__html: product.short_description}} />
				</div>
			))}
			{loading ? (
				<h1>Loading...</h1>
			) : (
				<button
					disabled={!hasMore}
					onClick={() => {
						setPage(page + 1);
						loadMore(page + 1);
					}}>
					Load More
				</button>
			)}
		</div>
	);
}
