import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/css/globals.css";
import { AuthProvider } from "@/context/AuthContext/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Realm",
	description: "aaaaa",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
return (
	<html lang="en">
		<body className={inter.className}>
			<AuthProvider>
				{children}
			</AuthProvider>
		</body>
	</html>
);
}
