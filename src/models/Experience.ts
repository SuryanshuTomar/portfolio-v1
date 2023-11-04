import mongoose from "mongoose";

const ExperienceSchema = new mongoose.Schema(
	{
		postion: {
			type: String,
			require: true,
		},
		company: {
			type: String,
			require: true,
		},
		duration: {
			type: Number,
			require: true,
			default: 0,
		},
		location: {
			type: String,
			require: true,
		},
		jobprofile: {
			type: String,
			require: true,
		},
	},
	{
		timestamps: true,
	}
);

const ExperienceModel =
	mongoose.models.Experience || mongoose.model("Experience", ExperienceSchema);

export default ExperienceModel;
