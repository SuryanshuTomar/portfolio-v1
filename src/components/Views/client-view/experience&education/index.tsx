"use client";

import {
	Timeline,
	TimelineConnector,
	TimelineContent,
	TimelineDot,
	TimelineItem,
	TimelineSeparator,
} from "@mui/lab";
import { motion } from "framer-motion";
import type { FC } from "react";

import Heading from "@/components/Heading";
import useWindowSize from "@/hooks/useWindowSize";
import type { ClientViewProps } from "@/Types";

import AnimationWrapper from "../wrapper";

interface ExperienceAndEducationViewProps extends ClientViewProps {}

const ExperienceAndEducationView: FC<ExperienceAndEducationViewProps> = ({
	data: experienceData,
	otherData: educationData,
}) => {
	const { width: windowWidth } = useWindowSize();
	console.log("experienceData", experienceData);
	console.log("educationData", educationData);

	return (
		<div
			className="max-w-screen-xl mt-10 mb-6 sm:mt-20 px-6 sm:px-8 lg:px-16 mx-auto"
			id="experience"
		>
			<div className="grid grid-flow-row sm:grid-flow-col grid-cols-1  gap-8">
				<div className="flex flex-col gap-5">
					<AnimationWrapper className={"py-6 sm:py-16"}>
						<div className="flex flex-col justify-center items-center row-start-2 sm:row-start-1">
							<h1 className="leading-[70px] mb-4 text-3xl lg:text-4xl xl:text-5xl font-medium">
								<Heading text="My Experiences" highlightIndex={1} />
							</h1>
						</div>
					</AnimationWrapper>
					<AnimationWrapper>
						<div className="flex w-full">
							<motion.div className="container">
								<Timeline position="alternate">
									{experienceData !== undefined &&
									experienceData !== null &&
									Array.isArray(experienceData)
										? experienceData.map((experienceItem) => {
												const content =
													windowWidth > 625 ? (
														<TimelineItem
															key={experienceItem._id}
														>
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
																<div className="border-4 p-6 rounded-lg border-primary mt-12 text-onPrimaryBg md:text-lg">
																	<p className="font-bold text-secondary">
																		{experienceItem.duration}
																	</p>
																	<h3 className="font-extrabold mt-2">
																		{experienceItem.company},{" "}
																		{experienceItem.location}
																	</h3>
																	<p className="font-extrabold mt-2">
																		{experienceItem.position}
																	</p>
																	<p className="font-extralight mt-2 text-secondary">
																		{
																			experienceItem.jobprofile
																		}
																	</p>
																</div>
															</TimelineContent>
														</TimelineItem>
													) : (
														<div
															key={experienceItem._id}
															className="border-4 p-4 m-0 rounded-lg border-primary mb-4 text-onPrimaryBg text-sm"
														>
															<p className="font-bold text-secondary">
																{experienceItem.duration}
															</p>
															<h3 className="font-extrabold mt-2">
																{experienceItem.company},{" "}
																{experienceItem.location}
															</h3>
															<p className="font-extrabold mt-2">
																{experienceItem.position}
															</p>
															<p className="font-extralight mt-2 text-secondary">
																{experienceItem.jobprofile}
															</p>
														</div>
													);
												return content;
										  })
										: undefined}
								</Timeline>
							</motion.div>
						</div>
					</AnimationWrapper>
				</div>
			</div>
		</div>
	);
};

export default ExperienceAndEducationView;
