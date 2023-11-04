import type { Controls } from "@/Types";

export const controls: Controls = {
	home: [
		{
			name: "heading",
			placeholder: "Enter heading text",
			type: "text",
			label: "Enter heading text",
		},
		{
			name: "summary",
			placeholder: "Enter career summary",
			type: "text",
			label: "Enter career summary",
		},
	],
	about: [
		{
			name: "aboutme",
			placeholder: "About Me",
			type: "text",
			label: "About Me",
		},
		{
			name: "noofprojects",
			placeholder: "No of projects",
			type: "number",
			label: "Enter no of projects",
			min: 0,
			max: 50,
			step: 1,
		},
		{
			name: "yearofexperience",
			placeholder: "No of experience",
			type: "number",
			label: "Enter no of experience",
			min: 0,
			max: 20,
			step: 0.5,
		},
		{
			name: "noofclients",
			placeholder: "No of clients",
			type: "number",
			label: "Enter no of clients",
			min: 0,
			max: 100,
			step: 1,
		},
		{
			name: "skills",
			placeholder: "skills",
			type: "text",
			label: "Skills",
		},
	],
	experience: [
		{
			name: "position",
			placeholder: "Position",
			type: "text",
			label: "Position",
		},
		{
			name: "company",
			placeholder: "Company",
			type: "text",
			label: "Company",
		},
		{
			name: "duration",
			placeholder: "Duration",
			type: "text",
			label: "Duration",
		},
		{
			name: "location",
			placeholder: "Location",
			type: "text",
			label: "Location",
		},
		{
			name: "jobprofile",
			placeholder: "Job Profile",
			type: "text",
			label: "Job Profile",
		},
	],
	education: [
		{
			name: "degree",
			placeholder: "Degree Name",
			type: "text",
			label: "Enter Degree Name",
		},
		{
			name: "year",
			placeholder: "Year",
			type: "text",
			label: "Year",
		},
		{
			name: "college",
			placeholder: "College Name",
			type: "text",
			label: "Enter College Name",
		},
	],
	projects: [
		{
			name: "name",
			placeholder: "Project Name",
			type: "text",
			label: "Project Name",
		},
		{
			name: "technologies",
			placeholder: "Enter Technologies",
			type: "text",
			label: "Enter Technologies",
		},
		{
			name: "website",
			placeholder: "Website",
			type: "text",
			label: "Website",
		},
		{
			name: "github",
			placeholder: "Github",
			type: "text",
			label: "github",
		},
	],
	contact: [],
};
