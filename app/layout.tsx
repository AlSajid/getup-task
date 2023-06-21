import Link from "next/link";
import "./globals.css";

export const metadata = {
	title: "GetUp Task",
	description: "GetUp Task"
};

export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<html lang="en">
			<body className=" bg-slate-100">
				<Link href="/">
					<header className="bg-white p-7 text-center text-3xl font-medium">
						<h1>GetUp Task</h1>
					</header>
				</Link>

				{children}
			</body>
		</html>
	);
}
