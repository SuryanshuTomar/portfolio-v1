"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect, useContext } from "react";

import Loader from "@/components/Loading";
import { Navbar } from "@/components/Navbar";
import { AuthContext } from "@/context/authContext";
import { addData, getData, updateData } from "@/services";
import type {
	ApiResponseType,
	AuthContextState,
	FormDataType,
	MenuIds,
} from "@/Types";
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
	const router = useRouter();
	const { userAuth, setUserAuth } = useContext<AuthContextState>(AuthContext);

	// Set the current selected tab
	const [currentSelectedTab, setCurrentSelectedTab] =
		useState<MenuIds>("home");

	// Set all tabs data.
	const [allTabsData, setAllTabsData] = useState<
		Record<string, FormDataType[]>
	>({});

	// Flag for checking if there is already some previous data stored for tabs like projects, education and experience
	const [shouldDataUpdate, setShouldDataUpdate] = useState(false);

	// Set the initial FormData for the all the tabs
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
					setShouldDataUpdate(true);
				} else if (currentTab === "about") {
					setAboutViewFormData(response.data[0]);
					setShouldDataUpdate(true);
				}
			}

			const updatedTabsData = {
				...allTabsData,
				[currentTab]: response?.data,
			};

			setAllTabsData(updatedTabsData);
		}
	}

	// This function will be called to save the form data
	async function handleSaveData(
		tabName?: MenuIds
	): Promise<ApiResponseType | null> {
		const currentTab = tabName ?? currentSelectedTab;
		const response =
			shouldDataUpdate === true
				? await updateData(currentTab, getFormData(currentTab))
				: await addData(currentTab, getFormData(currentTab));

		if (response !== null && response !== undefined) {
			resetFormsData();
			getTabsData(currentSelectedTab);
		}

		return response;
	}

	// View Component
	const ViewComponent = menuItems.map((menuItem) =>
		menuItem.id === currentSelectedTab ? (
			<menuItem.component
				key={menuItem.id}
				controls={controls[menuItem.id]}
				formData={getFormData(menuItem.id)}
				setFormData={getSetFormData(menuItem.id)}
				handleSaveData={handleSaveData}
				savedData={allTabsData[menuItem.id]}
			/>
		) : undefined
	);

	useEffect(() => {
		if (!userAuth) {
			return router.push("/login", { scroll: false });
		}
	}, [router, userAuth, setUserAuth]);

	useEffect(() => {
		getTabsData(currentSelectedTab);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentSelectedTab]);

	const content = userAuth ? (
		<div className="h-content min-h-screen border-b border-gray-200 bg-tertiary ">
			{/* Rendering Navbar */}
			<Navbar
				currentTab={currentSelectedTab}
				resetFormsData={resetFormsData}
				setCurrentSelectedTab={setCurrentSelectedTab}
				setShouldDataUpdate={setShouldDataUpdate}
			/>

			{/* Rendering View Components */}
			<div className="mt-10 sm:p-10">{ViewComponent}</div>
		</div>
	) : (
		<Loader />
	);

	return content;
}
