"use client";

import { initialProjectsFormData } from "@/app/admin/utils";
import type { ComponentViewType } from "@/Types";

import FormControls from "../form-controls";

export default function AdminProjectsView({
	controls,
	formData,
	setFormData,
	handleSaveData,
	savedData,
}: ComponentViewType) {
	return (
		<div className="w-full">
			<div className="bg-[#ffffff] shadow-lg shadow-gray-400 rounded px-8 pt-6 pb-8 mb-4">
				<h3 className="text-lg my-5 font-bold">Add New Project :</h3>
				<FormControls
					controls={controls}
					formData={formData}
					setFormData={setFormData}
				/>
				<button
					className="mt-10 border border-green-600 p-4 font-bold text-[16px]"
					onClick={() => handleSaveData("projects")}
				>
					Add Info
				</button>

				<div className="my-10">
					<hr className="h-1 bg-gray-200 rounded-md" />
					<h3 className="text-lg my-5 font-bold">Previous Projects :</h3>
					{savedData && savedData.length > 0
						? savedData.map((dataItem) => (
								<div
									key={dataItem._id}
									className="flex flex-col border gap-4 p-4 border-green-400 rounded-md"
								>
									{Object.keys(initialProjectsFormData).map((item) => (
										<p key={item}>{dataItem[item]}</p>
									))}
								</div>
						  ))
						: undefined}
				</div>
			</div>
		</div>
	);
}
