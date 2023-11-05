import type { Dispatch, HTMLInputTypeAttribute, SetStateAction } from "react";

export type MenuLabels =
	| "Home"
	| "About"
	| "Experience"
	| "Education"
	| "Projects"
	| "Contact";

export type MenuIds = Lowercase<MenuLabels>;

export interface MenuItem {
	id: MenuIds;
	label: MenuLabels;
	component: React.FC<ComponentViewType>;
}

export interface ControlsType {
	name: string;
	placeholder: string;
	type: HTMLInputTypeAttribute;
	label: string;
	min?: number;
	max?: number;
	step?: number;
}

export type Controls = Record<string, ControlsType[]>;

export interface FormDataType {
	[key: string]: string | number | readonly string[] | undefined;
}

export interface FormControlsType {
	controls?: ControlsType[];
	formData: FormDataType;
	setFormData: Dispatch<SetStateAction<FormDataType>>;
}

export interface ComponentViewType extends FormControlsType {
	savedData: Response[];
	handleSaveData: (tabName?: MenuIds) => Promise<ApiResponseType | null>;
}

export interface ApiResponseType {
	data: Response[];
	success: boolean;
	message: string;
}
