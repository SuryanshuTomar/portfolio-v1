import AboutView from "@/components/Views/client-view/about";
import ContactView from "@/components/Views/client-view/contact";
import EducationView from "@/components/Views/client-view/education";
import ExperienceView from "@/components/Views/client-view/experience";
import HomeView from "@/components/Views/client-view/home";
import CommonLayout from "@/components/Views/client-view/layout";
import ProjectsView from "@/components/Views/client-view/projects";
import type { FormDataType, MenuIds } from "@/Types";

export const runtime = "edge";

async function extractData(
	section: MenuIds
): Promise<FormDataType | FormDataType[]> {
	const fetchURI = process.env.FETCH_URI;
	const response = await fetch(`${fetchURI}/${section}/get`, {
		method: "GET",
		cache: "no-store",
	});

	const data = await response.json();
	const isDataPresent = data && data.data && Array.isArray(data.data);
	const cleanData: FormDataType | FormDataType[] = isDataPresent
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
			<HomeView data={homeSectionData as FormDataType} />
			<AboutView data={aboutSectionData as FormDataType} />
			<ExperienceView data={experienceSectionData} />
			<ProjectsView data={projectsSectionData} />
			<EducationView data={educationSectionData} />
			<ContactView data={[]} />
		</CommonLayout>
	);
}
