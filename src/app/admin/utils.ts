import AdminAboutView from "@/components/Views/admin-view/about";
import AdminContactView from "@/components/Views/admin-view/contact";
import AdminEducationView from "@/components/Views/admin-view/education";
import AdminExperienceView from "@/components/Views/admin-view/experience";
import AdminHomeView from "@/components/Views/admin-view/home";
import AdminProjectsView from "@/components/Views/admin-view/projects";
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
		id: "projects",
		label: "Projects",
		component: AdminProjectsView,
	},
	{
		id: "education",
		label: "Education",
		component: AdminEducationView,
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
