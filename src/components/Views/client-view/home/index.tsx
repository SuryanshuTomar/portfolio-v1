"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useMemo, useRef } from "react";
import type { FC } from "react";

import ProfilePic from "@/../public/mypic-bg-removed.png";
import type { ClientViewProps, FormDataType } from "@/Types";
import { getVariants } from "@/utils";

import { socialIcons } from "../../utils";
import AnimationWrapper from "../wrapper";

interface HomeViewProps extends ClientViewProps {
	data: FormDataType;
}

const HomeView: FC<HomeViewProps> = ({ data }) => {
	const dpContainerRef = useRef<HTMLDivElement>(null);
	const memoisedVariants = useMemo(() => getVariants(), []);

	// const isDataPresent = data && Array.isArray(data);
	const headingData = data?.heading;
	const summaryData = data?.summary;

	const heading =
		typeof headingData === "string"
			? headingData.split(" ").map((item, index) => (
					<span
						key={index}
						className={`${
							index === 2 || index === 3
								? "text-tertiary"
								: "text-primary"
						}`}
					>
						{item}{" "}
					</span>
			  ))
			: null;

	return (
		<div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto" id="home">
			<AnimationWrapper>
				<motion.div
					className="flex flex-col-reverse md:flex-row justify-around items-center gap-x-16 "
					variants={memoisedVariants}
				>
					<div className="flex flex-col justify-center items-start pt-20">
						<h1 className="mb-4 text-3xl lg:text-4xl xl:text-6xl font-medium leading-normal">
							{heading}
						</h1>
						<p className="text-secondary mt-4 mb-8 font-bold">
							{summaryData}
						</p>
						<motion.div className="flex gap-3 cursor-pointer">
							{socialIcons.map((item) => (
								<motion.div
									key={item.id}
									initial={{ scale: 0 }}
									animate={{ rotate: 360, scale: 1 }}
									transition={{
										type: "spring",
										damping: 20,
										stiffness: 80,
										duration: 4,
									}}
									whileHover={{ scale: 1.2, rotate: 360 }}
									whileTap={{
										scale: 0.4,
										rotate: -360,
										borderRadius: "100%",
									}}
								>
									<a href={item.url} target="_blank">
										{item.icon}
									</a>
								</motion.div>
							))}
						</motion.div>
					</div>
					<motion.div
						ref={dpContainerRef}
						className="flex w-full justify-center"
					>
						<motion.div
							drag
							dragConstraints={dpContainerRef}
							className="w-52 h-52 sm:w-80 sm:h-96 md:w-96 md:h-96 relative rounded-lg bg-primary"
						>
							<div className="w-52 h-52 sm:w-80 sm:h-96 md:w-96 md:h-96 top-5 -left-5 rounded-lg border-[6px] border-secondary absolute flex justify-center items-center pl-6 ">
								<div className="w-full h-full rounded border-6 border-secondary overflow-hidden ">
									<Image
										src={ProfilePic}
										alt="Profile Pic"
										height={450}
										width={450}
										priority
									/>
									<div className="absolute top-0 left-0 w-full h-full bg-transparent z-10"></div>
								</div>
							</div>
						</motion.div>
					</motion.div>
				</motion.div>
			</AnimationWrapper>
		</div>
	);
};

export default HomeView;
