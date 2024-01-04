import type { FC } from "react";

import type { FormDataType } from "@/Types";

interface TimelineEducationCardProps {
	dataItem: FormDataType;
}

const TimelineEducationCard: FC<TimelineEducationCardProps> = ({
	dataItem,
}) => {
	return (
		<div className="border-4 p-6 rounded-lg border-primary mt-12 text-onPrimaryBg md:text-lg">
			<p className="font-bold text-secondary">{dataItem.year}</p>
			<p className="font-extrabold mt-2"> {dataItem.degree}</p>
			<h3 className="font-extrabold mt-2">{dataItem.college}</h3>
		</div>
	);
};

export default TimelineEducationCard;
