import type mongoose from "mongoose";
import { Schema, model, models } from "mongoose";

export interface ContactSchemaDocumentType extends mongoose.Document {
	name: string;
	email: string;
	message: string;
	createdAt: Date;
	updatedAt: Date;
}

export type ContactSchemaType = Omit<
	ContactSchemaDocumentType,
	keyof mongoose.Document | "createdAt" | "updatedAt"
>;

const ContactSchema = new Schema<ContactSchemaDocumentType>(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		message: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const ContactModel =
	models.Contact || model<ContactSchemaDocumentType>("Contact", ContactSchema);

export default ContactModel;
