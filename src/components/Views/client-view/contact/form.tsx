import { zodResolver } from "@hookform/resolvers/zod";
import type { FC } from "react";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { z } from "zod";

import Button from "@/components/Buttons/Button";

const ContactFormSchema = z.object({
	name: z
		.string()
		.min(2, { message: "Name cannot be less than 2 charachters" })
		.max(50, { message: "Name cannot be less than 50 charachters" }),
	email: z.string().email(),
	message: z
		.string()
		.min(10, { message: "Name cannot be less than 10 charachters" })
		.max(250, { message: "Name cannot be less than 250 charachters" }),
});

export type ContactFormType = z.infer<typeof ContactFormSchema>;

interface ContactFormProps {
	onReadySubmit: (data: ContactFormType) => void;
}

const ContactForm: FC<ContactFormProps> = ({ onReadySubmit }) => {
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm<ContactFormType>({
		resolver: zodResolver(ContactFormSchema),
	});

	const formHandler: SubmitHandler<ContactFormType> = (data) => {
		onReadySubmit(data);
		reset();
	};

	return (
		<form
			onSubmit={handleSubmit(formHandler)}
			className="w-full md:w-[50%] border-4 border-primary rounded-lg p-4 md:p-6"
		>
			<div className="mb-4">
				<label htmlFor="name">
					<span className="font-bold md:text-lg text-secondary">
						Name :{" "}
					</span>
				</label>
				<br />
				<input
					type="text"
					id="name"
					placeholder="Enter your name..."
					{...register("name")}
					className="mt-2 w-full p-2 rounded-lg text-onPrimaryBg"
				/>
				<p>{errors.name?.message as string}</p>
			</div>

			<div className="mb-4">
				<label htmlFor="email">
					<span className="font-bold md:text-lg text-secondary">
						Email :{" "}
					</span>
				</label>
				<br />
				<input
					type="text"
					id="email"
					placeholder="Enter your email..."
					{...register("email")}
					className="mt-2 w-full p-2 rounded-lg text-onPrimaryBg"
				/>
				<p>{errors.email?.message as string}</p>
			</div>

			<div className="mb-4">
				<label htmlFor="message">
					<span className="font-bold md:text-lg text-secondary">
						Message :{" "}
					</span>
				</label>
				<br />
				<textarea
					id="message"
					placeholder="Write your message..."
					{...register("message")}
					className="mt-2 w-full p-2 rounded-lg text-onPrimaryBg"
				/>
				<p>{errors.message?.message as string}</p>
			</div>

			<Button type="type-1">Send Message</Button>
		</form>
	);
};

export default ContactForm;
