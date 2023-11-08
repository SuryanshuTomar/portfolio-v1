import type mongoose from "mongoose";
import { Schema, model, models } from "mongoose";

export interface HomeSchemaDocumentType extends mongoose.Document {
	heading: string;
	summary: string;
	createdAt: Date;
	updatedAt: Date;
}

export type HomeSchemaType = Omit<
	HomeSchemaDocumentType,
	keyof mongoose.Document | "createdAt" | "updatedAt"
>;

const HomeSchema = new Schema<HomeSchemaDocumentType>(
	{
		heading: {
			type: String,
			required: true,
		},
		summary: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const HomeModel =
	models.Home || model<HomeSchemaDocumentType>("Home", HomeSchema);

export default HomeModel;
