"use client";

import type { FormControlsType, FormDataType } from "@/Types";

export default function FormControls(props: FormControlsType) {
	const { controls, formData, setFormData } = props;

	return controls?.map((controlItem, idx) => (
		<div className="mb-4" key={idx}>
			<label
				className="block text-gray-700 text-sm font-bold mb-2"
				htmlFor=""
			>
				{controlItem.label}
			</label>
			<input
				className="shadow border rounder w-full py-2 px-3 text-gray-700 tracking-wide focus:outline-none focus:shadow-outline"
				type={controlItem.type}
				name={controlItem.name}
				id={controlItem.name}
				placeholder={controlItem.placeholder}
				value={formData[controlItem.name as keyof FormDataType]}
				onChange={(e) => {
					setFormData({
						...formData,
						[controlItem.name]: e.target.value,
					});
				}}
			/>
		</div>
	));
}
