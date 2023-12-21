"use client";

import { useContext, useState } from "react";
import { FaPalette } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

import type { ThemeValues } from "@/context/themeContext";
import { ThemeContext } from "@/context/themeContext";

import ToggleSwitch from "../ToggleSwitch";

const ThemeToggle = () => {
	const { mode, theme } = useContext(ThemeContext);
	const [currentTheme, setCurrentTheme] = theme;
	const [currentMode, setCurrentMode] = mode;
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	const toggleDarkMode = (value: boolean) => {
		setCurrentMode(value === false ? "theme-light" : "theme-dark");
	};

	return (
		<div>
			{/* Theme toggle button */}
			<div className="fixed bottom-4 right-4 z-50 ">
				<button
					id="themeBtn"
					className={`bg-primaryBg shadow-primary text-tertiary p-4 rounded-full shadow-md relative`}
					onClick={toggleMenu}
				>
					{menuOpen ? <RxCross2 /> : <FaPalette />}
				</button>

				{/* Theme options menu */}
				<div
					id="themeMenu"
					className={`${
						menuOpen ? "" : "hidden"
					} absolute  bottom-14 right-0 p-2 bg-primaryBg rounded-md shadow-md w-24 md:w-40`}
				>
					{/* Theme options */}
					{[1, 2, 3].map((btn) => (
						<button
							key={btn}
							className={`w-full text-center p-2 rounded hover:bg-secondary text-xs md:text-lg ${
								currentTheme === "theme-type-" + btn
									? "text-onPrimaryBg"
									: ""
							}`}
							onClick={() =>
								setCurrentTheme(`theme-type-${btn}` as ThemeValues)
							}
						>
							Theme {btn}
						</button>
					))}

					{/* Dark/light mode toggle switch */}
					<div className="flex flex-col md:flex-row items-center justify-between mt-2">
						<span className="p-2 hidden md:inline-block">Dark Mode</span>
						<ToggleSwitch
							className={`flex items-center cursor-pointer`}
							checked={currentMode === "theme-dark" ? true : false}
							onToggle={toggleDarkMode}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ThemeToggle;
