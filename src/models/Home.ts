import mongoose from "mongoose";

const HomeSchema = new mongoose.Schema(
	{
		heading: {
			type: String,
			require: true,
		},
		summary: {
			type: String,
			require: true,
		},
	},
	{
		timestamps: true,
	}
);

const HomeModel = mongoose.models.Home || mongoose.model("Home", HomeSchema);

export default HomeModel;
