import type mongoose from "mongoose";
import { Schema, model, models } from "mongoose";

export interface ProjectsSchemaDocumentType extends mongoose.Document {
	name: string;
	website: string;
	technologies: string;
	sourcelink: string;
	createdAt: Date;
	updatedAt: Date;
}

export type ProjectsSchemaType = Omit<
	ProjectsSchemaDocumentType,
	keyof mongoose.Document | "createdAt" | "updatedAt"
>;

const ProjectsSchema = new Schema<ProjectsSchemaDocumentType>(
	{
		name: {
			type: String,
			required: true,
		},
		website: {
			type: String,
			required: true,
		},
		technologies: {
			type: String,
			required: true,
		},
		sourcelink: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const ProjectsModel =
	models.Projects ||
	model<ProjectsSchemaDocumentType>("Projects", ProjectsSchema);

export default ProjectsModel;
