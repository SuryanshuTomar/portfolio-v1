import mongoose from "mongoose";

const AboutSchema = new mongoose.Schema(
	{
		aboutme: {
			type: String,
			require: true,
		},
		noofprojects: {
			type: Number,
			require: true,
			default: 0,
		},
		yearofexperience: {
			type: Number,
			require: true,
			default: 0,
		},
		noofclients: {
			type: Number,
			require: true,
			default: 0,
		},
		skills: {
			type: Array<String>,
			require: true,
			default: null,
		},
	},
	{
		timestamps: true,
	}
);

const AboutModel =
	mongoose.models.About || mongoose.model("About", AboutSchema);

export default AboutModel;
