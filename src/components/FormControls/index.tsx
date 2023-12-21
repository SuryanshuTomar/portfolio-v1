"use client";

import type { FormControlsType, FormDataType } from "@/Types";

export default function FormControls(props: FormControlsType) {
	const { controls, formData, setFormData } = props;

	return controls?.map((controlItem, idx) => (
		<div className="mb-4" key={idx}>
			<label
				className="block text-secondary text-sm font-bold mb-2"
				htmlFor=""
			>
				{controlItem.label}
			</label>
			<input
				className="shadow border rounded-xl w-full py-2 px-3 text-gray-800 tracking-wide focus:outline-none focus:shadow-outline hover:ring-1 hover:ring-tertiary active:ring-2 active:ring-tertiary"
				type={controlItem.type}
				name={controlItem.name}
				id={controlItem.name}
				placeholder={controlItem.placeholder}
				min={controlItem.min}
				max={controlItem.max}
				step={controlItem.step}
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
