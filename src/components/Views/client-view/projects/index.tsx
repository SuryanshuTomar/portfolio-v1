"use client";

import { motion, useScroll } from "framer-motion";
import { useMemo, useRef } from "react";
import type { FC } from "react";

import Button from "@/components/Buttons/Button";
import Heading from "@/components/Heading";
import type { ClientViewProps } from "@/Types";
import { getVariants } from "@/utils";

import AnimationWrapper from "../wrapper";

interface ProjectsViewProps extends ClientViewProps {}

const ProjectsView: FC<ProjectsViewProps> = ({ data }) => {
	const scrollRef = useRef(null);

	const { scrollXProgress } = useScroll({ container: scrollRef });
	const memoisedVariants = useMemo(() => getVariants(), []);

	// const updatedData = [...data, ...data, ...data];

	return (
		<div
			className="max-w-screen-xl mt-10 mb-6 sm:mt-20 px-6 sm:px-8 lg:px-16 mx-auto"
			id="projects"
		>
			<AnimationWrapper className="py-6 sm:py-16">
				<motion.div
					variants={memoisedVariants}
					className="flex flex-col justify-center items-center row-start-2 sm:row-start-1"
				>
					<h1 className="leading-[70px] mb-4 text-3xl lg:text-4xl xl:text-5xl font-medium">
						<Heading text="My Projects" highlightIndex={1} />
					</h1>
					<svg width="100" height="100" viewBox="0 0 100 100">
						<circle
							r="40"
							cx="50"
							cy="50"
							fill="transparent"
							className="stroke-primaryBg"
							stroke-width="12px"
						></circle>
						<motion.circle
							r="40"
							cx="50"
							cy="50"
							fill="transparent"
							stroke-width="12px"
							className="stroke-onPrimaryBg"
							style={{ pathLength: scrollXProgress }}
						></motion.circle>
					</svg>
				</motion.div>
			</AnimationWrapper>
			<AnimationWrapper>
				<ul
					className="flex list-none h-72 overflow-x-scroll md:px-10"
					ref={scrollRef}
				>
					{data && Array.isArray(data)
						? data.map((item) => (
								<li
									key={item._id}
									className="w-full flex items-stretch cursor-pointer"
								>
									<div className="mx-4 border-2 w-full relative border-primary transition-all rounded-lg flex flex-col overflow-y-scroll no-scrollbar items-center">
										<div className="mx-4 w-36 sm:48 md:w-96 flex p-4 flex-col xl:flex-row items-center xl:items-center">
											<div className=" flex order-2 xl:order-1">
												<div className="flex flex-col">
													<h3 className="text-lg md:text-xl xl:text-2xl capitalize font-extrabold">
														{item.name}
													</h3>
													<p className="text-sm capitalize font-bold">
														{
															(item.createdAt as string).split(
																"T"
															)[0]
														}
													</p>
													<div className="grid gap-2 mt-5 grid-cols-1 md:grid-cols-3 h-full max-h-[250px] w-full">
														{(item.technologies as string)
															.split(",")
															.map((item, idx) => (
																<button
																	key={idx}
																	className="p-2 border-2 border-primary font-semibold rounded-lg text-sm md:text-lg text-onPrimaryBg tracking-widest hover:shadow-tertiary transition-all overflow-hidden whitespace-nowrap"
																>
																	{item}
																</button>
															))}
													</div>
												</div>
											</div>
										</div>
										<div className="w-full bottom-0 justify-center flex flex-col sm:flex-row gap-2 items-center">
											<Button className="p-2 sm:mb-4 w-24 text-white-500 font-semibold text-[14px] tracking-widest bg-green-main transition-all outline-none">
												<a
													href={item.website as string}
													target="_blank"
													rel="noopener noreferrer"
												>
													Website
												</a>
											</Button>
											<Button className="p-2 sm:mb-4 w-24 text-white-500 font-semibold text-[14px] tracking-widest bg-green-main transition-all outline-none">
												<a
													href={item.sourcelink as string}
													target="_blank"
													rel="noopener noreferrer"
												>
													Source
												</a>
											</Button>
										</div>
									</div>
								</li>
						  ))
						: undefined}
				</ul>
			</AnimationWrapper>
		</div>
	);
};

export default ProjectsView;
