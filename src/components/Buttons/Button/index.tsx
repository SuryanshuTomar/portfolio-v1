import type { FC } from "react";

import type { ButtonContainerProps } from "../ButtonContainer";
import ButtonContainer from "../ButtonContainer";

interface ButtonProps extends ButtonContainerProps {
	type?: "type-1" | "type-2" | "type-3";
}

const Button: FC<ButtonProps> = ({
	type = "type-1",
	className,
	children,
	onClick,
	...rest
}) => {
	let buttonStyle = "";
	switch (type) {
		case "type-1":
			buttonStyle =
				"bg-tertiary mt-4 rounded p-2 md:p-3 text-xs md:text-[14px] hover:bg-primary border border-tertiary hover:border hover:border-secondary font-bold ";
			break;
		case "type-2":
			buttonStyle =
				"bg-secondary mt-4 rounded py-1 px-3 text-xs text-onPrimaryBg md:text-[14px] hover:bg-tertiary border border-secondary hover:border hover:border-secondary hover:text-neutralBg font-bold ";
			break;
		case "type-3":
			buttonStyle =
				"bg-primary mt-4 rounded p-2 md:p-3 text-xs md:text-[14px] hover:bg-primaryBg border border-primary hover:border hover:border-tertiary hover:text-primary font-bold ";
			break;
	}

	const buttonClasses = " " + buttonStyle + className;

	return (
		<ButtonContainer className={buttonClasses} onClick={onClick} {...rest}>
			{children}
		</ButtonContainer>
	);
};

export default Button;
