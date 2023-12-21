import type { FC, HTMLAttributes } from "react";

interface CardsViewContainerProps extends HTMLAttributes<HTMLDivElement> {}

const CardsViewContainer: FC<CardsViewContainerProps> = ({
	children,
	className,
	...rest
}) => {
	const cardsViewContainerClasses =
		"flex flex-wrap justify-center md:justify-around p-2 rounded-lg " +
		className;

	return (
		<div className={cardsViewContainerClasses} {...rest}>
			{children}
		</div>
	);
};
export default CardsViewContainer;
