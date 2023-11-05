"use client";

import type { ComponentViewType, FormControlsType } from "@/Types";

import FormControls from "../form-controls";

export default function AdminAboutView({
	controls,
	formData,
	setFormData,
	handleSaveData,
}: ComponentViewType) {
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
					onClick={() => handleSaveData?.("about")}
				>
					Add Info
				</button>
			</div>
		</div>
	);
}
