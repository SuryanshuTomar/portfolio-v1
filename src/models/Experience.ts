import type mongoose from "mongoose";
import { Schema, model, models } from "mongoose";

export interface ExperienceSchemaDocumentType extends mongoose.Document {
	position: string;
	company: string;
	duration: string;
	location: string;
	jobprofile: string;
	createdAt: Date;
	updatedAt: Date;
}

export type ExperienceSchemaType = Omit<
	ExperienceSchemaDocumentType,
	keyof mongoose.Document | "createdAt" | "updatedAt"
>;

const ExperienceSchema = new Schema<ExperienceSchemaDocumentType>(
	{
		position: {
			type: String,
			required: true,
		},
		company: {
			type: String,
			required: true,
		},
		duration: {
			type: String,
			required: true,
			default: "-",
		},
		location: {
			type: String,
			required: true,
		},
		jobprofile: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const ExperienceModel =
	models.Experience ||
	model<ExperienceSchemaDocumentType>("Experience", ExperienceSchema);

export default ExperienceModel;
