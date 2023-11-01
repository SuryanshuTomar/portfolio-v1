"use client";

import { useState } from "react";
import { menuItems } from "./utils";

export default function AdminView() {
	const [currentSelectedTab, setCurrentSelectedTab] =
		useState<MenuIds>("home");

	// Navbar Component
	const Navbar = () =>
		menuItems.map((menuItem) => (
			<button
				key={menuItem.id}
				type="button"
				className="p-4 font-bold text-xl text-black"
				onClick={() => setCurrentSelectedTab(menuItem.id)}
			>
				{menuItem.label}
			</button>
		));

	// View Component
	const ViewComponent = () =>
		menuItems.map((menuItem) =>
			menuItem.id === currentSelectedTab ? (
				<menuItem.component key={menuItem.id} />
			) : undefined
		);

	return (
		<div className="border-b border-gray-200">
			<nav className="-mb-0.5 flex justify-center space-x-6" role="tablist">
				{/* Rendering Navbar */}
				<Navbar />
			</nav>

				{/* Rendering View Components */}
				<div className="mt-10 p-10">
					<ViewComponent />
				</div>
		</div>
	);
}
