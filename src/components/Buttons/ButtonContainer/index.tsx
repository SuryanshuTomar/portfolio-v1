import type { FC, HTMLAttributes } from "react";

export interface ButtonContainerProps
	extends HTMLAttributes<HTMLButtonElement> {}

const ButtonContainer: FC<ButtonContainerProps> = ({
	children,
	className,
	...rest
}) => {
	return (
		<button className={className} {...rest}>
			{" "}
			{children}
		</button>
	);
};
export default ButtonContainer;
