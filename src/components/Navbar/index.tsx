import { useContext, type Dispatch, type FC, type SetStateAction } from "react";

import { menuItems } from "@/app/admin/utils";
import { AuthContext } from "@/context/authContext";
import type { AuthContextState, MenuIds } from "@/Types";

import NoOutlineButton from "../Buttons/NoOutlineButton";

interface NavbarProps {
	currentTab: MenuIds;
	resetFormsData(): void;
	setShouldDataUpdate: Dispatch<SetStateAction<boolean>>;
	setCurrentSelectedTab: Dispatch<SetStateAction<MenuIds>>;
}

// Navbar Component
export const Navbar: FC<NavbarProps> = ({
	currentTab: currentSelectedTab,
	resetFormsData,
	setShouldDataUpdate,
	setCurrentSelectedTab,
}) => {
	const { setUserAuth } = useContext<AuthContextState>(AuthContext);

	const NavMenuItems = menuItems.map((menuItem) => {
		const isButtonActiveClass =
			currentSelectedTab === menuItem.id ? " text-tertiary" : "";

		const NavMenuButtonClass =
			"p-4 font-bold text-xl hover:bg-secondary hover:text-primary active:text-tertiary rounded-md" +
			isButtonActiveClass;

		return (
			<button
				key={menuItem.id}
				type="button"
				className={NavMenuButtonClass}
				onClick={() => {
					setCurrentSelectedTab(menuItem.id);
					resetFormsData();
					setShouldDataUpdate(false);
				}}
			>
				{menuItem.label}
			</button>
		);
	});

	return (
		<nav
			className="w-[100vw] bg-primaryBg text-onPrimaryBg flex justify-around items-center"
			role="tablist"
		>
			<div>{NavMenuItems}</div>

			<NoOutlineButton
				onClick={() => {
					setUserAuth(false);
					sessionStorage.removeItem("userAuth");
				}}
			>
				Logout
			</NoOutlineButton>
		</nav>
	);
};
