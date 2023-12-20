"use client";

import { useEffect, useState } from "react";

import type { ModeValues, ThemeValues } from "@/context/themeContext";

type Themes<T extends ThemeValues | ModeValues> = T;
export type UseStickyStateReturnType<Themes> = [
	Themes,
	(value: Themes) => void
];

export function useStickyTheme<T extends ThemeValues | ModeValues>(
	defaultValue: T,
	key: "theme" | "mode"
): UseStickyStateReturnType<Themes<T>> {
	const [value, setValue] = useState<Themes<T>>(defaultValue);

	const setStickyState = (value: Themes<T>) => {
		localStorage.setItem(key, value);
		setValue(value);
	};

	useEffect(() => {
		const stickyValue = localStorage.getItem(key) as Themes<T> | null;
		if (stickyValue !== null) {
			setValue(stickyValue);
		}
	}, [key, setValue]);

	const returnState: UseStickyStateReturnType<Themes<T>> = [
		value,
		setStickyState,
	];
	return returnState;
}
