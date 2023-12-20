"use client";

import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

import Button from "@/components/Buttons/Button";
import FormControls from "@/components/FormControls";
import ViewContainer from "@/components/ViewContainer";
import { AuthContext } from "@/context/authContext";
import { login } from "@/services";
import type { AuthContextState, FormDataType } from "@/Types";
import { controls } from "@/utils";

import { initialLoginFormData } from "../admin/utils";

function Login() {
	const router = useRouter();
	const { userAuth, setUserAuth } = useContext<AuthContextState>(AuthContext);

	const [loginFormData, setLoginFormData] =
		useState<FormDataType>(initialLoginFormData);

	// This function will handle the admin login service
	async function handleAdminLogin(): Promise<void> {
		const response = await login(loginFormData);

		if (response?.success) {
			setUserAuth(true);
			sessionStorage.setItem("userAuth", JSON.stringify(true));
		}
	}

	useEffect(() => {
		const authUserParsed = sessionStorage.getItem("userAuth");
		const authUserValue: boolean = authUserParsed
			? JSON.parse(authUserParsed)
			: false;
		setUserAuth(authUserValue);

		if (authUserValue) {
			return router.push("/admin");
		}
	}, [router, userAuth, setUserAuth]);

	return (
		<div className="w-full h-screen flex justify-center items-center bg-secondary">
			<ViewContainer className="md:w-[50%]">
				<h1 className="text-center my-2 mb-8 font-bold text-xl text-onPrimaryBg">
					Admin Login
				</h1>
				<FormControls
					controls={controls["login"]}
					formData={loginFormData}
					setFormData={setLoginFormData}
				/>
				<Button onClick={() => handleAdminLogin()}>Login</Button>
			</ViewContainer>
		</div>
	);
}
export default Login;
