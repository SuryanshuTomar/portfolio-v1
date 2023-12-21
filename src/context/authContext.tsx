"use client";

import type { FC, ReactNode } from "react";
import { createContext, useEffect, useState } from "react";

import type { AuthContextState } from "@/Types";

const initialAuthState: AuthContextState = {
	userAuth: false,
	setUserAuth: () => {},
};

export const AuthContext = createContext(initialAuthState);
const AuthContextProvider = AuthContext.Provider;

export const AuthContextProviderComp: FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [userAuth, setUserAuth] = useState(false);

	useEffect(() => {
		const authUserParsed = sessionStorage.getItem("userAuth");
		const authUserValue: boolean = authUserParsed
			? JSON.parse(authUserParsed)
			: false;
		setUserAuth(authUserValue);
	}, [setUserAuth]);

	return (
		<AuthContextProvider value={{ userAuth, setUserAuth }}>
			{children}
		</AuthContextProvider>
	);
};
