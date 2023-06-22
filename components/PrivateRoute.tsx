"use client";
import {useSession} from "next-auth/react";

export default function PrivateRoute({children}: {children: React.ReactNode}) {
	const {data, status} = useSession();

	if (status === "authenticated") {
		return <>{children}</>;
	} else {
		return (
			<div className="flex justify-center items-center h-96">
				<div className="m-3 bg-white p-3 w-96 shadow rounded-xl">
					<h1>You must login first</h1>
				</div>
			</div>
		);
	}
}
