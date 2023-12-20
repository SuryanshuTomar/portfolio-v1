"use client";

import { useContext } from "react";

import Button from "@/components/Buttons/Button";
import ViewContainer from "@/components/ViewContainer";
import { ThemeContext } from "@/context/themeContext";
import type { ComponentViewType } from "@/Types";

import FormControls from "../../../FormControls";

export default function AdminHomeView({
	controls,
	formData,
	setFormData,
	handleSaveData,
}: ComponentViewType) {
	return (
		<ViewContainer>
			<FormControls
				controls={controls}
				formData={formData}
				setFormData={setFormData}
			/>
			<Button onClick={() => handleSaveData("home")}>Add Info</Button>
		</ViewContainer>
	);
}
