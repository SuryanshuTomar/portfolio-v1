"use client";

import type { HTMLAttributes, FC, ReactNode } from "react";

interface ViewContainerProps extends HTMLAttributes<HTMLDivElement> {
	children?: ReactNode;
}

const ViewContainer: FC<ViewContainerProps> = ({ children, className }) => {
	const containerClass = [
		"bg-primaryBg shadow-lg shadow-primary rounded px-4 md:px-8 pt-6 pb-8 mb-4",
		className,
	]
		.filter(Boolean)
		.join(" ");

	return <div className={containerClass}>{children}</div>;
};
export default ViewContainer;
