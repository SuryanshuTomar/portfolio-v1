import type { FC } from "react";

import type { ButtonContainerProps } from "../ButtonContainer";
import ButtonContainer from "../ButtonContainer";

interface NoOutlineButtonProps extends ButtonContainerProps {}

const NoOutlineButton: FC<NoOutlineButtonProps> = ({
	children,
	className,
	...rest
}) => {
	const NoOutlineButtonClasses = `bg-neutral text-tertiary font-bold hover:text-primary  h-12 px-4 rounded ${className}`;

	return (
		<ButtonContainer className={NoOutlineButtonClasses} {...rest}>
			{children}
		</ButtonContainer>
	);
};
export default NoOutlineButton;
