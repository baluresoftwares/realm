import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/css/globals.css";

import PageFrame from "@/components/PageFrame/PageFrame";
import { AuthProvider } from "@/context/AuthContext";

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
				<PageFrame>
					{children}
				</PageFrame>
			</AuthProvider>
		</body>
	</html>
);
}
