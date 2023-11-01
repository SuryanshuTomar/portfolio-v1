type MenuLabels =
	| "Home"
	| "About"
	| "Experience"
	| "Education"
	| "Projects"
	| "Contact";

type MenuIds = Lowercase<MenuLabels>;

interface MenuItem {
	id: MenuIds;
	label: MenuLabels;
	component: React.FC;
}
