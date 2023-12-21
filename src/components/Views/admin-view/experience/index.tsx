"use client";

import { initialExperienceFormData } from "@/app/admin/utils";
import Button from "@/components/Buttons/Button";
import Card from "@/components/Cards/Card";
import CardsViewContainer from "@/components/Cards/CardsViewContainer";
import ViewContainer from "@/components/ViewContainer";
import type { ComponentViewType } from "@/Types";

import FormControls from "../../../FormControls";

export default function AdminExperienceView({
	controls,
	formData,
	setFormData,
	handleSaveData,
	savedData,
}: ComponentViewType) {
	return (
		<ViewContainer>
			<h3 className="text-lg my-5 font-bold text-tertiary">
				Add New Experience :
			</h3>
			<FormControls
				controls={controls}
				formData={formData}
				setFormData={setFormData}
			/>
			<Button onClick={() => handleSaveData("experience")}>Add Info</Button>
			<hr className="mt-10 h-1 bg-tertiary rounded-md" />
			<h3 className="text-lg my-5 font-bold text-tertiary">
				Previous Experiences :
			</h3>

			<CardsViewContainer className="my-10">
				{savedData && savedData.length > 0
					? savedData.map((dataItem) => (
							<Card
								key={dataItem._id}
								dataItem={dataItem}
								cardItemData={initialExperienceFormData}
							/>
					  ))
					: undefined}
			</CardsViewContainer>
		</ViewContainer>
	);
}
