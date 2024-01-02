import AboutView from "@/components/Views/client-view/about";
import ContactView from "@/components/Views/client-view/contact";
import ExperienceAndEducationView from "@/components/Views/client-view/experience&education";
import HomeView from "@/components/Views/client-view/home";
import CommonLayout from "@/components/Views/client-view/layout";
import ProjectsView from "@/components/Views/client-view/projects";
import type { FormDataType, MenuIds } from "@/Types";

async function extractData(section: MenuIds): Promise<FormDataType> {
	const response = await fetch(`http://localhost:3000/api/${section}/get`, {
		method: "GET",
		cache: "no-store",
	});

	const data = await response.json();
	const isDataPresent = data && data.data && Array.isArray(data.data);
	const cleanData: FormDataType = isDataPresent
		? section === "home" || section === "about"
			? data.data[0]
			: data.data
		: {};
	return cleanData;
}

export default async function Home() {
	const homeSectionData = await extractData("home");
	const aboutSectionData = await extractData("about");
	const experienceSectionData = await extractData("experience");
	const educationSectionData = await extractData("education");
	const projectsSectionData = await extractData("projects");

	return (
		<CommonLayout className={"bg-neutralBg"}>
			<div>
				<HomeView data={homeSectionData} />
				<AboutView data={aboutSectionData} />
				<ExperienceAndEducationView
					data={experienceSectionData}
					otherData={educationSectionData}
				/>
				<ProjectsView data={projectsSectionData} />
				<ContactView />
			</div>
		</CommonLayout>
	);
}
