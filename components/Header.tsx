"use client";
import Link from "next/link";
import {useSession, signIn, signOut} from "next-auth/react";

export default function Header() {
	const {data, status} = useSession();

	return (
		<Link href="/">
			<header className="bg-white p-7 text-center text-3xl font-medium">
				<h1 className="inline">GetUp Task</h1>

				{status === "authenticated" ? (
					<button onClick={() => signOut()} className="float-right bg-grey-900 hover:bg-grey-950 w-64 text-lg m-0">
						({data?.user?.name}) Logout
					</button>
				) : (
					<button onClick={() => signIn("google")} className="float-right bg-grey-900 hover:bg-grey-950 w-36 text-lg m-0">
						Login
					</button>
				)}
			</header>
		</Link>
	);
}
