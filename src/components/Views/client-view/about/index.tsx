"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useMemo, type FC } from "react";

import AboutMeImage from "@/../public/code.svg";
import type { ClientViewProps } from "@/Types";
import { getVariants } from "@/utils";

import AnimationWrapper from "../wrapper";

interface AboutViewProps extends ClientViewProps {}

const AboutView: FC<AboutViewProps> = ({ data }) => {
	const memoisedVariants = useMemo(() => getVariants(), []);

	const aboutDataInfo = [
		{
			label: "Clients",
			value: data?.noofclients || "0",
		},
		{
			label: "Projects",
			value: data?.noofprojects || "0",
		},
		{
			label: "Experience",
			value: data?.yearofexperience || "0",
		},
	];

	const heading = "Why hire me for your next project?"
		.split(" ")
		.map((item, index) => (
			<span
				key={index}
				className={`${index === 6 ? "text-tertiary" : "text-primary"}`}
			>
				{item}{" "}
			</span>
		));

	return (
		<div className="max-w-screen-xl mt-24 mb-6 sm:mt-14 px-6 sm:px-8 lg:px-16 mx-auto">
			<div className="w-full flex">
				<AnimationWrapper className="w-full grid-flow-row grid grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-tertiary bg-white-500 z-10">
					{aboutDataInfo.map((infoItem, index) => (
						<motion.div
							key={infoItem.label}
							custom={{ duration: 2 + index }}
							variants={memoisedVariants}
							className={`flex items-center justify-start 
						${
							index === 0
								? "sm:justify-start"
								: index === 1
								? "sm:justify-center"
								: "sm:justify-end"
						}
						py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0
					`}
						>
							<div className="flex m-0 w-40 sm:w-auto">
								<div className="flex flex-col">
									<p className="text-6xl text-primary font-bold">
										{infoItem.value}+
									</p>
									<p className="text-3xl text-onPrimaryBg font-bold">
										{infoItem.label}
									</p>
								</div>
							</div>
						</motion.div>
					))}
				</AnimationWrapper>
			</div>

			<AnimationWrapper className="pt-5">
				<div className="flex flex-col justify-center items-center row-start-2 sm:row-start-1">
					<h1 className="leading-[70px] mb-4 text-3xl lg:text-4xl xl:text-5xl font-medium">
						{heading}
					</h1>
					<p className="text-secondary mt-4 mb-8 font-bold">
						{data?.aboutme}
					</p>
				</div>
			</AnimationWrapper>

			<div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8">
				<AnimationWrapper className="flex w-full">
					<motion.div
						variants={memoisedVariants}
						className="h-full w-full p-4"
					>
						<Image
							src={AboutMeImage}
							alt="About Me"
							layout="responsive"
							quality={100}
							height={414}
							width={500}
						/>
					</motion.div>
				</AnimationWrapper>
				<AnimationWrapper className="flex items-center w-full p-4">
						
				</AnimationWrapper>
			</div>
		</div>
	);
};

export default AboutView;
