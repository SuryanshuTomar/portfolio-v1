import AdminAboutView from "@/components/admin-view/about";
import AdminContactView from "@/components/admin-view/contact";
import AdminEducationView from "@/components/admin-view/education";
import AdminExperienceView from "@/components/admin-view/experience";
import AdminHomeView from "@/components/admin-view/home";
import AdminProjectsView from "@/components/admin-view/projects";
import type { FormDataType, MenuItem } from "@/Types";

export const menuItems: MenuItem[] = [
	{
		id: "home",
		label: "Home",
		component: AdminHomeView,
	},
	{
		id: "about",
		label: "About",
		component: AdminAboutView,
	},
	{
		id: "experience",
		label: "Experience",
		component: AdminExperienceView,
	},
	{
		id: "education",
		label: "Education",
		component: AdminEducationView,
	},
	{
		id: "projects",
		label: "Projects",
		component: AdminProjectsView,
	},
	{
		id: "contact",
		label: "Contact",
		component: AdminContactView,
	},
];

export const initialHomeFormData: FormDataType = {
	heading: "",
	summary: "",
};

export const initialAboutFormData: FormDataType = {
	aboutme: "",
	noofprojects: "",
	yearofexperience: "",
	noofclients: "",
	skills: "",
};

export const initialExperienceFormData: FormDataType = {
	position: "",
	company: "",
	duration: "",
	location: "",
	jobprofile: "",
};

export const initialEducationFormData: FormDataType = {
	degree: "",
	year: "",
	college: "",
};

export const initialProjectsFormData: FormDataType = {
	name: "",
	website: "",
	technologies: "",
	sourcelink: "",
};

export const initialLoginFormData: FormDataType = {
	username: "",
	password: "",
};
