import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export const socialIcons = [
	{
		id: "twitter",
		icon: (
			<FaTwitter className="w-7 h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9 text-primary" />
		),
	},
	{
		id: "linkedin",
		icon: (
			<FaLinkedinIn className="w-7 h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9 text-primary" />
		),
	},
	{
		id: "github",
		icon: (
			<FaGithub className="w-7 h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9 text-primary" />
		),
	},
	{
		id: "instagram",
		icon: (
			<FaInstagram className="w-7 h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9 text-primary" />
		),
	},
];
