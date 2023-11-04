import config from "config";
import mongoose from "mongoose";

export default async function connectDb(): Promise<void> {
	const dbUri = config.get<string>("dbUri");

	try {
		await mongoose.connect(dbUri);
	} catch (error) {
		console.log("Failed to connect with DB!", error);
	}
}
