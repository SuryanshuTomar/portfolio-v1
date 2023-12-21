import { useState } from "react";
import { useContext } from "react";
import type { FC, Dispatch, SetStateAction } from "react";
import { RiMenu5Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

import { menuItems } from "@/app/admin/utils";
import { AuthContext } from "@/context/authContext";
import type { AuthContextState, MenuIds } from "@/Types";

import NoOutlineButton from "../Buttons/NoOutlineButton";
import Logo from "../Logo";

interface NavbarProps {
	currentTab?: MenuIds;
	resetFormsData?: () => void;
	setShouldDataUpdate?: Dispatch<SetStateAction<boolean>>;
	setCurrentSelectedTab?: Dispatch<SetStateAction<MenuIds>>;
	showButton?: boolean;
}

export const Navbar: FC<NavbarProps> = ({
	currentTab: currentSelectedTab,
	resetFormsData,
	setShouldDataUpdate,
	setCurrentSelectedTab,
	showButton = false,
}) => {
	const { setUserAuth } = useContext<AuthContextState>(AuthContext);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleClick = () => {
		setUserAuth(false);
		sessionStorage.removeItem("userAuth");
	};

	const NavMenuItems = menuItems.map((menuItem) => {
		const isButtonActiveClass =
			currentSelectedTab === menuItem.id ? " text-tertiary" : "";

		const NavMenuButtonClass =
			"px-2 font-bold text-xl h-8 hover:bg-secondary hover:text-primary active:text-tertiary rounded-md transition-all " +
			isButtonActiveClass;

		return (
			<button
				key={menuItem.id}
				type="button"
				className={NavMenuButtonClass}
				onClick={() => {
					setCurrentSelectedTab?.(menuItem.id);
					setShouldDataUpdate?.(false);
					resetFormsData?.();
					setIsMenuOpen(false);
				}}
			>
				{menuItem.label}
			</button>
		);
	});

	const button = showButton ? (
		<NoOutlineButton onClick={handleClick}>Logout</NoOutlineButton>
	) : undefined;

	return (
		<nav className="px-16 w-full min-h-20 bg-primaryBg text-onPrimaryBg flex justify-around items-center">
			<Logo />

			{/* Show this Navbar items on mobile devices */}
			<div className="md:hidden relative">
				{!isMenuOpen ? (
					<button
						type="button"
						className="md:hidden bg-primaryBg shadow-primary text-primary p-4 text-2xl"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
					>
						<RiMenu5Line />
					</button>
				) : (
					<button
						className="md:hidden bg-primaryBg shadow-primary text-primary p-4 text-2xl"
						onClick={() => setIsMenuOpen(false)}
					>
						<RxCross2 />
					</button>
				)}

				{/* Show this menu on mobile devices */}
				<div
					className={`${
						isMenuOpen ? "absolute" : "hidden"
					} bg-primaryBg top-20 left-0 -translate-x-1/3 p-2 flex flex-col justify-center items-center rounded-lg`}
				>
					{NavMenuItems}
				</div>
			</div>

			{/* Show this menu on larger devices */}
			<div className={"hidden md:flex flex-row"}>{NavMenuItems}</div>

			{button}
		</nav>
	);
};
