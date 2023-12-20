"use client";

import Button from "@/components/Buttons/Button";
import ViewContainer from "@/components/ViewContainer";
import type { ComponentViewType } from "@/Types";

import FormControls from "../../../FormControls";

export default function AdminAboutView({
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
			<Button onClick={() => handleSaveData("about")}>Add Info</Button>
		</ViewContainer>
	);
}
