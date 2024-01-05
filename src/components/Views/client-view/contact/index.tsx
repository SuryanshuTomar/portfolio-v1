"use client";

import Image from "next/image";
import { enqueueSnackbar, SnackbarProvider } from "notistack";
import type { FC } from "react";

import Heading from "@/components/Heading";
import { addData } from "@/services";
import type { ClientViewProps } from "@/Types";

import AnimationWrapper from "../wrapper";

import type { ContactFormType } from "./form";
import ContactForm from "./form";

interface ContactViewProps extends ClientViewProps {}

const ContactView: FC<ContactViewProps> = (props) => {
	const onReadySubmit = async (data: ContactFormType) => {
		const response = await addData("contact", data);

		if (response?.success) {
			enqueueSnackbar("Message sent successfully!", {
				variant: "success",
				autoHideDuration: 1500,
			});
		} else {
			enqueueSnackbar(response?.message, {
				variant: "error",
				autoHideDuration: 1500,
			});
		}
	};

	return (
		<SnackbarProvider
			anchorOrigin={{
				vertical: "bottom",
				horizontal: "center",
			}}
		>
			<div
				className="max-w-screen-xl mt-10 pb-6 sm:mt-20 px-6 sm:px-8 sm:pb-16 lg:px-16 lg:pb-20 mx-auto"
				id="contact"
			>
				<AnimationWrapper className="pt-2 sm:py-10">
					<div className="flex flex-col justify-center items-center row-start-2 sm:row-start-1">
						<h1 className="leading-[70px] mb-4 text-3xl lg:text-4xl xl:text-5xl font-medium">
							<Heading text="Contact Me!" highlightIndex={1} />
						</h1>
					</div>
				</AnimationWrapper>

				<div className="w-full text-onPrimaryBg flex flex-col md:flex-row items-center justify-around">
					<ContactForm onReadySubmit={onReadySubmit} />
					<div>
						<Image
							src={
								"https://media.giphy.com/media/KszkcokOMwO6s2aJ99/giphy.gif"
							}
							alt="About Me"
							quality={100}
							height={425}
							width={425}
							className="md:mx-2 p-1 mt-4 md:mt-0 rounded-xl"
						/>
					</div>
				</div>
			</div>
		</SnackbarProvider>
	);
};

export default ContactView;
