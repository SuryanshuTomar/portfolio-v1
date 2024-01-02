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
