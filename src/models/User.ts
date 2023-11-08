import type mongoose from "mongoose";
import { Schema, model, models } from "mongoose";

export interface UserSchemaDocumentType extends mongoose.Document {
	username: string;
	password: string;
	createdAt: Date;
	updatedAt: Date;
}

export type UserSchemaType = Omit<
	UserSchemaDocumentType,
	keyof mongoose.Document | "createdAt" | "updatedAt"
>;

const UserSchema = new Schema<UserSchemaDocumentType>(
	{
		username: {
			type: String,
			require: true,
			unique: true,
		},
		password: {
			type: String,
			require: true,
		},
	},
	{
		timestamps: true,
	}
);

const UserModel =
	models.User || model<UserSchemaDocumentType>("User", UserSchema);

export default UserModel;
