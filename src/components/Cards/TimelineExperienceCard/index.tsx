import type { FC } from "react";

import type { FormDataType } from "@/Types";

interface TimelineExperienceCardProps {
	dataItem: FormDataType;
}

const TimelineExperienceCard: FC<TimelineExperienceCardProps> = ({
	dataItem,
}) => {
	return (
		<div className="border-4 p-6 rounded-lg border-primary mt-12 text-onPrimaryBg md:text-lg">
			<p className="font-bold text-secondary">{dataItem.duration}</p>
			<h3 className="font-extrabold mt-2">
				{dataItem.company}, {dataItem.location}
			</h3>
			<p className="font-extrabold mt-2">{dataItem.position}</p>
			<p className="font-extralight mt-2 text-secondary">
				{dataItem.jobprofile}
			</p>
		</div>
	);
};

export default TimelineExperienceCard;
