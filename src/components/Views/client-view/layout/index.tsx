"use client";

import { useContext, useEffect, useState } from "react";
import type { FC, HTMLAttributes, ReactNode } from "react";

import Loader from "@/components/Loading";
import { Navbar } from "@/components/Navbar";
import { ThemeContext } from "@/context/themeContext";
import type { MenuIds } from "@/Types";

interface CommonLayoutProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
}

const CommonLayout: FC<CommonLayoutProps> = ({ children, className }) => {
	const { loading } = useContext(ThemeContext);
	// Set the current selected tab
	const [currentSelectedTab, setCurrentSelectedTab] =
		useState<MenuIds>("home");
	const [scrollActive, setScrollActive] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			setScrollActive(window.screenY > 20);
		});
	}, []);

	const content = !loading ? (
		<div className={className}>
			<Navbar
				currentTab="home"
				setCurrentSelectedTab={setCurrentSelectedTab}
			/>
			{children}
		</div>
	) : (
		<Loader />
	);

	return content;
};
export default CommonLayout;
