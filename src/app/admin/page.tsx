"use client";

import { useState } from "react";

import type { FormDataType, MenuIds } from "@/Types";
import { controls } from "@/utils";

import {
	initialAboutFormData,
	initialEducationFormData,
	initialExperienceFormData,
	initialHomeFormData,
	initialProjectsFormData,
} from "./utils";
import { menuItems } from "./utils";

export default function AdminView() {
	const [currentSelectedTab, setCurrentSelectedTab] =
		useState<MenuIds>("home");

	const [homeViewFormData, setHomeViewFormData] =
		useState<FormDataType>(initialHomeFormData);
	const [aboutViewFormData, setAboutViewFormData] =
		useState<FormDataType>(initialAboutFormData);
	const [experienceViewFormData, setExperienceViewFormData] =
		useState<FormDataType>(initialExperienceFormData);
	const [educationViewFormData, setEducationViewFormData] =
		useState<FormDataType>(initialEducationFormData);
	const [projectsViewFormData, setProjectsViewFormData] =
		useState<FormDataType>(initialProjectsFormData);
	const [contactViewFormData, setContactViewFormData] = useState<FormDataType>(
		{
			email: "",
			contactInfo: "",
		}
	);

	// Navbar Component
	const Navbar = menuItems.map((menuItem) => (
		<button
			key={menuItem.id}
			type="button"
			className="p-4 font-bold text-xl text-black"
			onClick={() => setCurrentSelectedTab(menuItem.id)}
		>
			{menuItem.label}
		</button>
	));

	const getFormData = (id: string) => {
		let result = homeViewFormData;
		switch (id) {
			case "home":
				result = homeViewFormData;
			case "about":
				result = aboutViewFormData;
			case "experience":
				result = experienceViewFormData;
			case "education":
				result = educationViewFormData;
			case "projects":
				result = projectsViewFormData;
			case "contact":
				result = contactViewFormData;
		}
		return result;
	};

	const getSetFormData = (id: string) => {
		let result = setHomeViewFormData;
		switch (id) {
			case "home":
				result = setHomeViewFormData;
			case "about":
				result = setAboutViewFormData;
			case "experience":
				result = setExperienceViewFormData;
			case "education":
				result = setEducationViewFormData;
			case "projects":
				result = setProjectsViewFormData;
			case "contact":
				result = setContactViewFormData;
		}
		return result;
	};

	// View Component
	const ViewComponent = menuItems.map((menuItem) =>
		menuItem.id === currentSelectedTab ? (
			<menuItem.component
				key={menuItem.id}
				controls={controls[menuItem.id]}
				formData={getFormData(menuItem.id)}
				setFormData={getSetFormData(menuItem.id)}
			/>
		) : undefined
	);

	return (
		<div className="border-b border-gray-200">
			<nav className="-mb-0.5 flex justify-center space-x-6" role="tablist">
				{/* Rendering Navbar */}
				{Navbar}
			</nav>

			{/* Rendering View Components */}
			<div className="mt-10 p-10">{ViewComponent}</div>
		</div>
	);
}
