"use client";

import type { FC, ReactNode } from "react";
import { createContext, useEffect, useState } from "react";

import { useStickyTheme } from "@/hooks/useStickyTheme";
import type { UseStickyStateReturnType } from "@/hooks/useStickyTheme";

const themeValues = ["theme-type-1", "theme-type-2", "theme-type-3"] as const;
const modeValues = ["theme-light", "theme-dark"] as const;

export type ThemeValues = (typeof themeValues)[number];
export type ModeValues = (typeof modeValues)[number];

type ThemeContextState = {
	theme: UseStickyStateReturnType<ThemeValues>;
	mode: UseStickyStateReturnType<ModeValues>;
	loading: boolean;
};

const initialThemeState: ThemeContextState = {
	theme: [themeValues[0], () => {}], // Set your default theme here
	mode: [modeValues[0], () => {}], // Set your default mode here,
	loading: false,
};

export const ThemeContext = createContext(initialThemeState);
const ThemeContextProvider = ThemeContext.Provider;

export const ThemeContextProviderComp: FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [loading, setLoading] = useState(true);

	const themeState = useStickyTheme<ThemeValues>(
		initialThemeState.theme[0],
		"theme"
	);
	const modeState = useStickyTheme<ModeValues>(
		initialThemeState.mode[0],
		"mode"
	);

	useEffect(() => {
		setLoading(false);
	}, []);

	return (
		<ThemeContextProvider
			value={{ theme: themeState, mode: modeState, loading }}
		>
			{/* This is div is added so that we can add the themseState class and modeState class that we have defined in the "globals.css" file (like - .theme-type-1, .theme-type-2, .theme-type-3 and .theme-dark, .theme-light). */}
			{/* In this way, we don't have to re-use these classes again and again in each component and in this way only we can use our defined classes. */}
			<div className={`${themeState[0]} ${modeState[0]}`}>{children}</div>
		</ThemeContextProvider>
	);
};
