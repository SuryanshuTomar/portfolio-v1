"use client";

import type { FC, ReactNode } from "react";
import { createContext, useState } from "react";

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

	return (
		<AuthContextProvider value={{ userAuth, setUserAuth }}>
			{children}
		</AuthContextProvider>
	);
};
