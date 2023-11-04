import { NextResponse, type NextRequest } from "next/server";

import connectDb from "@/database";
import EducationModel from "@/models/Education";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
	try {
		await connectDb();
		const responseData = await EducationModel.find({});

		if (responseData !== undefined && responseData.length > 0) {
			return NextResponse.json({
				success: true,
				message: "Data saved successfully",
				data: responseData,
			});
		}

		return NextResponse.json({
			success: false,
			message: "Something went wrong! Please try again",
		});
	} catch (error) {
		console.log(error);

		return NextResponse.json({
			success: false,
			message: "Something went wrong! Please try again",
		});
	}
}
