import type mongoose from "mongoose";
import { model, models } from "mongoose";
import { Schema } from "mongoose";

export interface EducationSchemaDocumentType extends mongoose.Document {
	degree: string;
	year: string;
	college: string;
	createdAt: Date;
	updatedAt: Date;
}

export type EducationSchemaType = Omit<
	EducationSchemaDocumentType,
	keyof mongoose.Document | "createdAt" | "updatedAt"
>;

const EducationSchema = new Schema<EducationSchemaDocumentType>(
	{
		degree: {
			type: String,
			required: true,
		},
		year: {
			type: String,
			required: true,
		},
		college: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const EducationModel =
	models.Education ||
	model<EducationSchemaDocumentType>("Education", EducationSchema);

export default EducationModel;
