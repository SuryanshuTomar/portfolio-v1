import type { FormDataType, MenuIds } from "@/Types";

export async function addData(
	currentTab: MenuIds,
	formData: FormDataType
): Promise<FormDataType | null> {
	let result: FormDataType | null = null;
	try {
		const response = await fetch(`/api/${currentTab}/add`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData),
		});

		result = await response.json();
	} catch (error) {
		console.log(error);
	}
	return result;
}

export async function getData(
	currentTab: MenuIds
): Promise<FormDataType | null> {
	let result: FormDataType | null = null;
	try {
		const response = await fetch(`/api/${currentTab}/get`);
		result = await response.json();
	} catch (error) {
		console.log(error);
	}
	return result;
}
