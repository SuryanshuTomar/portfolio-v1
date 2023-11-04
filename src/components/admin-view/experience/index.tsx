"use client";

import type { FormControlsType } from "@/Types";

import FormControls from "../form-controls";

export default function AdminExperienceView({
	controls,
	formData,
	setFormData,
	handleSaveData,
}: FormControlsType) {
	return (
		<div className="w-full">
			<div className="bg-[#ffffff] shadow-md rounded px-8 pt-6 pb-8 mb-4">
				<FormControls
					controls={controls}
					formData={formData}
					setFormData={setFormData}
				/>
				<button
					className="mt-10 border border-green-600 p-4 font-bold text-[16px]"
					onClick={() => handleSaveData?.("experience")}
				>
					Add Info
				</button>
			</div>
		</div>
	);
}
