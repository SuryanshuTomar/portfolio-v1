import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import ScrollTopButton from "@/components/Buttons/ScrollTopButton";
import ThemeToggle from "@/components/Buttons/ThemeToggle";
import { AuthContextProviderComp } from "@/context/authContext";
import { ThemeContextProviderComp } from "@/context/themeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Suryanshu Tomar",
	description: "Portfolio for Suryanshu Tomar, A full stack developer",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${inter.className} no-scrollbar`}>
				<ThemeContextProviderComp>
					<AuthContextProviderComp>
						<ScrollTopButton />
						<ThemeToggle />
						{children}
					</AuthContextProviderComp>
				</ThemeContextProviderComp>
			</body>
		</html>
	);
}
