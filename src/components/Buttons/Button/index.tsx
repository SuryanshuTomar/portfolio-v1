import type { FC } from "react";

import type { ButtonContainerProps } from "../ButtonContainer";
import ButtonContainer from "../ButtonContainer";

interface ButtonProps extends ButtonContainerProps {}

const Button: FC<ButtonProps> = ({ onClick, className, children, ...rest }) => {
	const buttonClasses = `bg-tertiary mt-10 rounded p-2 md:p-3 text-xs md:text-[14px] hover:bg-primary border border-tertiary hover:border hover:border-secondary font-bold ${className}`;

	return (
		<ButtonContainer className={buttonClasses} onClick={onClick} {...rest}>
			{children}
		</ButtonContainer>
	);
};

export default Button;
