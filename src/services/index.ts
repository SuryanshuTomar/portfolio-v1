import type { ApiResponseType, FormDataType, MenuIds } from "@/Types";

export async function addData(
	currentTab: MenuIds,
	formData: FormDataType
): Promise<ApiResponseType | null> {
	let result: ApiResponseType | null = null;
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

export async function getData(currentTab: MenuIds): Promise<ApiResponseType | null> {
	let result: ApiResponseType | null = null;
	try {
		const response = await fetch(`/api/${currentTab}/get`);
		result = await response.json();
	} catch (error) {
		console.log(error);
	}
	return result;
}

export async function updateData(
	currentTab: MenuIds,
	formData: FormDataType
): Promise<ApiResponseType | null> {
	let result: ApiResponseType | null = null;

	try {
		const response = await fetch(`/api/${currentTab}/update`, {
			method: "PUT",
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
