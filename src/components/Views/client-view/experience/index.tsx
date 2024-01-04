"use client";

import { motion } from "framer-motion";
import { useMemo, type FC } from "react";

import Heading from "@/components/Heading";
import TimeLine from "@/components/Timeline";
import type { ClientViewProps, FormDataType } from "@/Types";
import { getVariants } from "@/utils";

import AnimationWrapper from "../wrapper";

interface ExperienceViewProps extends ClientViewProps {}

const ExperienceView: FC<ExperienceViewProps> = ({ data: experienceData }) => {
	const memoisedVariants = useMemo(() => getVariants(), []);

	return (
		<div
			className="max-w-screen-xl mt-10 mb-6 sm:mt-20 px-6 sm:px-8 lg:px-16 mx-auto"
			id="experience"
		>
			<motion.div
				variants={memoisedVariants}
				className="grid grid-flow-row sm:grid-flow-col grid-cols-1  gap-8"
			>
				<div className="flex flex-col sm:gap-5">
					<AnimationWrapper className="pt-2 sm:py-10">
						<motion.div
							variants={memoisedVariants}
							className="flex flex-col justify-center items-center row-start-2 sm:row-start-1"
						>
							<h1 className="leading-[70px] mb-4 text-3xl lg:text-4xl xl:text-5xl font-medium">
								<Heading text="My Experience" highlightIndex={1} />
							</h1>
						</motion.div>
					</AnimationWrapper>
					<AnimationWrapper>
						<div className="flex w-full">
							<motion.div className="container">
								<TimeLine
									data={experienceData as FormDataType[]}
									position="alternate"
									card="experience"
								/>
							</motion.div>
						</div>
					</AnimationWrapper>
				</div>
			</motion.div>
		</div>
	);
};

export default ExperienceView;
