"use client";

import { initialEducationFormData } from "@/app/admin/utils";
import Button from "@/components/Buttons/Button";
import ViewContainer from "@/components/ViewContainer";
import type { ComponentViewType } from "@/Types";

import FormControls from "../../../FormControls";

export default function AdminEducationView({
	controls,
	formData,
	setFormData,
	handleSaveData,
	savedData,
}: ComponentViewType) {
	return (
		<ViewContainer>
			<h3 className="text-lg my-5 font-bold text-tertiary">
				Add New Education :
			</h3>
			<FormControls
				controls={controls}
				formData={formData}
				setFormData={setFormData}
			/>
			<Button onClick={() => handleSaveData("education")}>Add Info</Button>

			<div className="my-10">
				<hr className="h-1 bg-gray-200 rounded-md" />
				<h3 className="text-lg my-5 font-bold text-tertiary">
					Previous Educations :
				</h3>
				{savedData && savedData.length > 0
					? savedData.map((dataItem) => (
							<div
								key={dataItem._id}
								className="flex flex-col border gap-4 p-4 border-green-400 rounded-md"
							>
								{Object.keys(initialEducationFormData).map((item) => (
									<p key={item}>{dataItem[item]}</p>
								))}
							</div>
					  ))
					: undefined}
			</div>
		</ViewContainer>
	);
}
