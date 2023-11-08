import type mongoose from "mongoose";
import { Schema, model, models } from "mongoose";

export interface AboutSchemaDocumentType extends mongoose.Document {
	aboutme: string;
	noofprojects: number;
	yearofexperience: number;
	noofclients: number;
	skills: [string];
	createdAt: Date;
	updatedAt: Date;
}

export type AboutSchemaType = Omit<
	AboutSchemaDocumentType,
	keyof mongoose.Document | "createdAt" | "updatedAt"
>;

const AboutSchema = new Schema<AboutSchemaDocumentType>(
	{
		aboutme: {
			type: String,
			required: true,
		},
		noofprojects: {
			type: Number,
			required: true,
			default: 0,
		},
		yearofexperience: {
			type: Number,
			required: true,
			default: 0,
		},
		noofclients: {
			type: Number,
			required: true,
			default: 0,
		},
		skills: {
			type: [String],
			required: true,
			default: null,
		},
	},
	{
		timestamps: true,
	}
);

const AboutModel =
	models.About || model<AboutSchemaDocumentType>("About", AboutSchema);

export default AboutModel;
