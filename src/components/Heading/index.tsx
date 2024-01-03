import type { FC, HTMLAttributes, ReactNode } from "react";

interface HeadingProps extends HTMLAttributes<HTMLSpanElement> {
	text?: string;
	highlightIndex?: number;
	children?: ReactNode;
}

const Heading: FC<HeadingProps> = ({
	text,
	highlightIndex,
	children,
	className,
	...rest
}) => {
	const divClassName = `  ${className}`;

	if (text !== undefined && text !== null) {
		return text.split(" ").map((item, index) => (
			<span
				key={index}
				className={`${
					index === (highlightIndex || 0)
						? "text-tertiary"
						: "text-primary"
				} ${divClassName}`}
			>
				{item}{" "}
			</span>
		));
	} else {
		return (
			<span className={divClassName} {...rest}>
				{children}
			</span>
		);
	}
};

export default Heading;
