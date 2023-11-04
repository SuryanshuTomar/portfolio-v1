import mongoose from "mongoose";

const ProjectsSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			require: true,
		},
		website: {
			type: String,
			require: true,
		},
		technologies: {
			type: Array<String>,
			require: true,
		},
		source: {
			type: String,
		},
	},
	{
		timestamps: true,
	}
);

const ProjectsModel =
	mongoose.models.Projects || mongoose.model("Projects", ProjectsSchema);

export default ProjectsModel;
