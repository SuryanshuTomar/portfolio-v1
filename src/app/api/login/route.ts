import { compare, hash } from "bcryptjs";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import connectDb from "@/database";
import UserModel from "@/models/User";
import type { FormDataType } from "@/Types";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
	try {
		await connectDb();
		const { username, password } = (await req.json()) as FormDataType;

		const user = await UserModel.findOne({ username });

		if (!user) {
			return NextResponse.json({
				success: false,
				message: "Wrong Username or Password!",
			});
		}

		const hashPassword = await hash(user.password, 12);
		const comparePasswords = await compare(password.toString(), hashPassword);

		if (comparePasswords === false) {
			return NextResponse.json({
				success: false,
				message: "Wrong Username or Password!",
			});
		}

		return NextResponse.json({
			success: true,
			message: "Login successful!",
		});
	} catch (error) {
		console.log(error);

		return NextResponse.json({
			success: false,
			message: "Something went wrong! Please try again",
		});
	}
}
