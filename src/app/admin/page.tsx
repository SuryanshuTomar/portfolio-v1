"use client";

import { useState, useEffect } from "react";

import { addData, getData } from "@/services";
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

	const [allTabsData, setAllTabsData] = useState({});

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

	const getFormData = (id: MenuIds) => {
		let result = homeViewFormData;
		switch (id) {
			case "home":
				result = homeViewFormData;
				break;
			case "about":
				result = aboutViewFormData;
				break;
			case "experience":
				result = experienceViewFormData;
				break;
			case "education":
				result = educationViewFormData;
				break;
			case "projects":
				result = projectsViewFormData;
				break;
			case "contact":
				result = contactViewFormData;
				break;
		}
		return result;
	};

	const getSetFormData = (id: MenuIds) => {
		let result = setHomeViewFormData;
		switch (id) {
			case "home":
				result = setHomeViewFormData;
				break;
			case "about":
				result = setAboutViewFormData;
				break;
			case "experience":
				result = setExperienceViewFormData;
				break;
			case "education":
				result = setEducationViewFormData;
				break;
			case "projects":
				result = setProjectsViewFormData;
				break;
			case "contact":
				result = setContactViewFormData;
				break;
		}
		return result;
	};

	// Reset Forms
	function resetFormsData() {
		setHomeViewFormData(initialHomeFormData);
		setAboutViewFormData(initialAboutFormData);
		setExperienceViewFormData(initialExperienceFormData);
		setEducationViewFormData(initialEducationFormData);
		setProjectsViewFormData(initialProjectsFormData);
		setContactViewFormData({
			email: "",
			contactInfo: "",
		});
	}

	// This function will get the selected tab data and save it to the allTabsData state.
	async function getTabsData(currentTab: MenuIds) {
		const response = await getData(currentTab);

		if (
			response !== null &&
			response !== undefined &&
			response?.data !== null &&
			response?.data !== undefined
		) {
			if (Array.isArray(response?.data) && response?.data.length > 0) {
				if (currentTab === "home") {
					setHomeViewFormData(response.data[0]);
				} else if (currentTab === "about") {
					setAboutViewFormData(response.data[0]);
				}
			}
		}

		if (response !== null || response !== undefined) {
			setAllTabsData({
				...allTabsData,
				[currentTab]: response?.data,
			});
		}
	}
	// This function will be called to save the form data
	async function handleSaveData(
		tabName?: MenuIds
	): Promise<FormDataType | null> {
		const currentTab = tabName ?? currentSelectedTab;
		const response = await addData(currentTab, getFormData(currentTab));

		if (response !== null && response !== undefined) {
			resetFormsData();
			getTabsData(currentSelectedTab);
		}

		return response;
	}

	// Navbar Component
	const Navbar = menuItems.map((menuItem) => (
		<button
			key={menuItem.id}
			type="button"
			className="p-4 font-bold text-xl text-black"
			onClick={() => {
				setCurrentSelectedTab(menuItem.id);
				resetFormsData();
			}}
		>
			{menuItem.label}
		</button>
	));

	// View Component
	const ViewComponent = menuItems.map((menuItem) =>
		menuItem.id === currentSelectedTab ? (
			<menuItem.component
				key={menuItem.id}
				controls={controls[menuItem.id]}
				formData={getFormData(menuItem.id)}
				setFormData={getSetFormData(menuItem.id)}
				handleSaveData={handleSaveData}
			/>
		) : undefined
	);

	useEffect(() => {
		getTabsData(currentSelectedTab);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentSelectedTab]);

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
