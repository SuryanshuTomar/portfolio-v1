"use client";

import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

import FormControls from "@/components/admin-view/form-controls";
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
		console.log(response);

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
	}, [setUserAuth]);

	const content = userAuth ? (
		router.push("/admin")
	) : (
		<div className="w-full">
			<div className="bg-[#ffffff] shadow-lg shadow-gray-400 rounded px-8 pt-6 pb-8 mb-4">
				<FormControls
					controls={controls["login"]}
					formData={loginFormData}
					setFormData={setLoginFormData}
				/>
				<button
					className="mt-10 border border-green-600 p-4 font-bold text-[16px]"
					onClick={() => handleAdminLogin()}
				>
					Login
				</button>
			</div>
		</div>
	);

	return content;
}
export default Login;
