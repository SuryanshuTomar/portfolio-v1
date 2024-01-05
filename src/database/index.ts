import mongoose from "mongoose";

export default async function connectDb(): Promise<void> {
	const dbUri = process.env.DB_URI ?? "";

	try {
		await mongoose.connect(dbUri);
	} catch (error) {
		console.log("Failed to connect with DB!", error);
	}
}
