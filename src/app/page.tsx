import AboutView from "@/components/Views/client-view/about";
import ContactView from "@/components/Views/client-view/contact";
import ExperienceAndEducationView from "@/components/Views/client-view/experience&education";
import HomeView from "@/components/Views/client-view/home";
import CommonLayout from "@/components/Views/client-view/layout";
import ProjectsView from "@/components/Views/client-view/projects";
import type { MenuIds } from "@/Types";

async function extractData(section: MenuIds) {
	const response = await fetch(`http://localhost:3000/api/${section}/get`, {
		method: "GET",
		cache: "no-store",
	});

	return response.json();
}

export default async function Home() {
	const homeSectionData = await extractData("home");
	const aboutSectionData = await extractData("about");
	const experienceSectionData = await extractData("experience");
	const educationSectionData = await extractData("education");
	const projectsSectionData = await extractData("projects");

	console.log("data : ", homeSectionData.data);

	return (
		<CommonLayout>
			<div>
				<HomeView data={homeSectionData.data} />
				<AboutView data={aboutSectionData.data} />
				<ExperienceAndEducationView
					data={experienceSectionData.data}
					otherData={educationSectionData.data}
				/>
				<ProjectsView data={projectsSectionData.data} />
				<ContactView />
			</div>
		</CommonLayout>
	);
}
