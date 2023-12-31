"use client";

import { useContext, useState } from "react";
import type { FC, HTMLAttributes, ReactNode } from "react";

import Loader from "@/components/Loading";
import { Navbar } from "@/components/Navbar";
import { ThemeContext } from "@/context/themeContext";
import type { MenuIds } from "@/Types";

interface CommonLayoutProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
}

const CommonLayout: FC<CommonLayoutProps> = ({ children, className }) => {
	const { loading } = useContext(
		ThemeContext ?? {
			theme: ["theme-type-1", () => {}],
			mode: ["theme-light", () => {}],
			loading: true,
		}
	);

	const [currentSelectedTab, setCurrentSelectedTab] =
		useState<MenuIds>("home");

	const content = !loading ? (
		<div className={className}>
			<Navbar
				currentTab={currentSelectedTab}
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
