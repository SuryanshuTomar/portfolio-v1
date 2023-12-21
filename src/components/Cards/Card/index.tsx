import type { FC, HTMLAttributes } from "react";

import Button from "@/components/Buttons/Button";
import type { FormDataType } from "@/Types";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
	dataItem: FormDataType;
	cardItemData: FormDataType;
}

const Card: FC<CardProps> = ({ dataItem, cardItemData, className }) => {
	const cardClasses = `w-96 my-2 mx-4 flex flex-col justify-between items-center border border-4 gap-2 p-4 border-secondary rounded-xl text-onPrimaryBg ${className}`;

	return (
		<div key={dataItem._id} className={cardClasses}>
			{Object.keys(cardItemData).map((item) => (
				<p key={item}>
					{item.toUpperCase()} :{" "}
					<span className="text-onNeutralBg">{dataItem[item]}</span>
				</p>
			))}
			<div className="w-full flex justify-around">
				<Button type="type-1">Edit</Button>

				<Button type="type-3">Delete</Button>
			</div>
		</div>
	);
};
export default Card;
