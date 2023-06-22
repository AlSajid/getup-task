import Link from "next/link";
import "./globals.css";
import AuthProvider from "@/components/AuthProvider";

import Header from "@/components/Header";
import {Toaster} from "react-hot-toast";

export const metadata = {
	title: "GetUp Task",
	description: "GetUp Task"
};

export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<html lang="en">
			<AuthProvider>
				<body className=" bg-slate-100">
					<Toaster />
					<Header />
					{children}
				</body>
			</AuthProvider>
		</html>
	);
}
