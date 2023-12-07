import type { Dispatch, HTMLInputTypeAttribute, SetStateAction } from "react";

// Another Way to create MenuLabels and MenuIds
// export const menuLabels = [
// 	"home",
// 	"about",
// 	"experience",
// 	"education",
// 	"projects",
// 	"contact",
// 	"login",
// ] as const;

// type MenuIds = (typeof menuLabels)[number];
// type MenuLabels = Capitalize<MenuIds>;

export type MenuLabels =
	| "Home"
	| "About"
	| "Experience"
	| "Education"
	| "Projects"
	| "Contact"
	| "Login";

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

export type Controls = {
	[section in MenuIds]: ControlsType[];
};

export interface FormDataType {
	[key: string]: string | number;
}

export interface FormControlsType {
	controls?: ControlsType[];
	formData: FormDataType;
	setFormData: Dispatch<SetStateAction<FormDataType>>;
}

export interface ComponentViewType extends FormControlsType {
	savedData?: FormDataType[];
	handleSaveData: (tabName?: MenuIds) => Promise<ApiResponseType | null>;
}

export interface ApiResponseType {
	data: FormDataType[];
	success: boolean;
	message: string;
}

export type AuthContextState = {
	userAuth: boolean;
	setUserAuth: Dispatch<SetStateAction<boolean>>;
};
