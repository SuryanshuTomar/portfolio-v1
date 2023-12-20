import type { FC } from "react";

import type { ButtonContainerProps } from "../ButtonContainer";
import ButtonContainer from "../ButtonContainer";

interface NoOutlineButtonProps extends ButtonContainerProps {}

const NoOutlineButton: FC<NoOutlineButtonProps> = ({ children, className }) => {
	const NoOutlineButtonClasses = `bg-neutral text-tertiary font-bold hover:text-primary text-sm md:text-lg h-12 px-4 rounded ${className}`;

	return (
		<ButtonContainer className={NoOutlineButtonClasses}>
			{children}
		</ButtonContainer>
	);
};
export default NoOutlineButton;
