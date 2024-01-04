"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useMemo } from "react";
import type { FC } from "react";

import Heading from "@/components/Heading";
import type { ClientViewProps, FormDataType } from "@/Types";
import { getVariants } from "@/utils";

import AnimationWrapper from "../wrapper";

const skillItemVariant = {
	hidden: { y: 20, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
	},
};

interface AboutViewProps extends ClientViewProps {
	data: FormDataType;
}

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

	return (
		<div
			className="max-w-screen-xl mt-10 mb-6 sm:mt-20 px-6 sm:px-8 lg:px-16 mx-auto"
			id="about"
		>
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
									<p className="text-2xl sm:text-4xl md:text-6xl text-primary font-bold">
										{infoItem.value}+
									</p>
									<p className="text-xl sm:text-2xl md:text-3xl text-onPrimaryBg font-bold">
										{infoItem.label}
									</p>
								</div>
							</div>
						</motion.div>
					))}
				</AnimationWrapper>
			</div>

			<AnimationWrapper className="pt-6">
				<div className="flex flex-col justify-center items-center row-start-2 sm:row-start-1">
					<h1 className="leading-[70px] mb-4 text-3xl lg:text-4xl xl:text-5xl font-medium">
						<Heading
							text="Why hire me for your next Project?"
							highlightIndex={6}
						/>
					</h1>
					<p className="text-secondary mt-4 mb-8 font-bold">
						{data?.aboutme}
					</p>
				</div>
			</AnimationWrapper>

			<div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8">
				<AnimationWrapper className="flex w-full">
					<motion.div
						className="flex justify-center sm:justify-start h-full w-full p-4"
						variants={memoisedVariants}
					>
						<Image
							src={
								"https://media.giphy.com/media/6ib6KPmkeAjDTxMxij/giphy.gif"
							}
							alt="About Me"
							quality={100}
							height={425}
							width={425}
							className="rounded-lg"
						/>
					</motion.div>
				</AnimationWrapper>
				<AnimationWrapper className="flex justify-center items-center w-full p-4">
					<motion.div
						className="flex flex-wrap -m-2"
						variants={memoisedVariants}
					>
						{(data?.skills as string).split(", ").map((skill, idx) => (
							<motion.div
								key={idx}
								className="m-2"
								variants={skillItemVariant}
							>
								<button className="py-2 px-4 border-2 border-primary font-semibold rounded-lg text-sm md:text-xl text-onPrimaryBg tracking-widest hover:shadow-tertiary transition-all overflow-hidden whitespace-nowrap">
									{skill}
								</button>
							</motion.div>
						))}
					</motion.div>
				</AnimationWrapper>
			</div>
		</div>
	);
};

export default AboutView;
