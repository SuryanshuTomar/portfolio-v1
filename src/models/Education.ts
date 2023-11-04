import mongoose from "mongoose";

const EducationSchema = new mongoose.Schema(
	{
		degree: {
			type: String,
			require: true,
		},
		year: {
			type: String,
			require: true,
		},
		college: {
			type: String,
			require: true,
		},
	},
	{
		timestamps: true,
	}
);

const EducationModel =
	mongoose.models.Education || mongoose.model("Education", EducationSchema);

export default EducationModel;
