"use client";

import type { TimelineProps } from "@mui/lab";
import {
	Timeline,
	TimelineConnector,
	TimelineContent,
	TimelineDot,
	TimelineItem,
	TimelineSeparator,
} from "@mui/lab";

import useWindowSize from "@/hooks/useWindowSize";
import type { FormDataType } from "@/Types";

import TimelineEducationCard from "../Cards/TimelineEducationCard";
import TimelineExperienceCard from "../Cards/TimelineExperienceCard";

interface TimeLineProps {
	data: FormDataType[];
	card: "education" | "experience";
	position?: TimelineProps["position"];
}

const TimeLine = ({ data, card, position }: TimeLineProps) => {
	const { width: windowWidth } = useWindowSize();

	const content =
		data !== null &&
		data !== undefined &&
		Array.isArray(data) &&
		windowWidth > 625 ? (
			<Timeline position={position}>
				{data.map((dataItem) => (
					<TimelineItem key={dataItem._id}>
						<TimelineSeparator>
							<TimelineDot
								className="bg-tertiary"
								color="inherit"
								sx={{
									width: "15px",
									height: "15px",
								}}
							/>
							<TimelineConnector />
						</TimelineSeparator>
						<TimelineContent>
							{card === "education" ? (
								<TimelineEducationCard dataItem={dataItem} />
							) : (
								<TimelineExperienceCard dataItem={dataItem} />
							)}
						</TimelineContent>
					</TimelineItem>
				))}
			</Timeline>
		) : (
			data.map((dataItem) =>
				card === "education" ? (
					<TimelineEducationCard key={dataItem._id} dataItem={dataItem} />
				) : (
					<TimelineExperienceCard key={dataItem._id} dataItem={dataItem} />
				)
			)
		);

	return content;
};

export default TimeLine;
