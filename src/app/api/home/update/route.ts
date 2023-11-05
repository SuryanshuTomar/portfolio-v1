import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import connectDb from "@/database";
import HomeModel from "@/models/Home";
import type { FormDataType } from "@/Types";

export const dynamic = "force-dynamic";

export async function PUT(req: NextRequest) {
	try {
		await connectDb();

		const responseData: FormDataType = await req.json();
		const { _id, heading, summary } = responseData;

		const updatedData = await HomeModel.findOneAndUpdate(
			{
				_id,
			},
			{ heading, summary },
			{ new: true }
		);

		if (updatedData) {
			return NextResponse.json({
				success: true,
				message: "Updated successfully!",
			});
		}

		return NextResponse.json({
			success: false,
			message: "Something went wrong! Please try again",
		});
	} catch (error) {
		return NextResponse.json({
			success: false,
			message: "Something went wrong! Please try again",
		});
	}
}
