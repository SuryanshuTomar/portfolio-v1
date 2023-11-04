import { NextResponse } from "next/server";

import connectDb from "@/database";
import AboutModel from "@/models/About";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
	try {
		await connectDb();
		const responseData = await req.json();
		const saveData = await AboutModel.create(responseData);

		if (saveData !== undefined || saveData !== null) {
			return NextResponse.json({
				success: true,
				message: "Data saved successfully",
				data: saveData,
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
