"use client";

export default function AdminView() {
	const menuItems = [
		{
			id: "home",
			label: "Home",
		},
		{
			id: "about",
			label: "About",
		},
		{
			id: "experience",
			label: "Experience",
		},
		{
			id: "education",
			label: "Education",
		},
		{
			id: "projects",
			label: "Projects",
		},
		{
			id: "contact",
			label: "Contact",
		},
	];

	return (
		<div className="border-b border-gray-200">
			<nav className="-mb-0.5 flex justify-center space-x-6" role="tablist">
				{menuItems.map((menuItem) => (
					<button
						key={menuItem.id}
						type="button"
						className="p-4 font-bold text-xl text-black"
					>
						{menuItem.label}
					</button>
				))}
			</nav>
		</div>
	);
}
