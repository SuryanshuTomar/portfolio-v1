"use client";

import { formatRelative, subDays } from "date-fns";

import Loader from "@/components/Loading";
import ViewContainer from "@/components/ViewContainer";
import type { ComponentViewType } from "@/Types";

export default function AdminContactView({ savedData }: ComponentViewType) {
	return (
		<ViewContainer>
			{savedData && Array.isArray(savedData) ? (
				savedData.map((data) => (
					<div
						key={data._id}
						className="my-4 p-4 border-2 border-onPrimaryBg rounded-lg flex justify-between"
					>
						<div className="font-bold text-onPrimaryBg">
							<h4>
								Name:{" "}
								<span className="font-normal text-onNeutralBg">
									{data.name}
								</span>
							</h4>
							<h4>
								Email:{" "}
								<span className="font-normal text-onNeutralBg">
									{data.email}
								</span>
							</h4>
							<p>
								Message:{" "}
								<span className="font-normal text-onNeutralBg">
									{data.message}
								</span>
							</p>
						</div>
						<p className="text-secondary capitalize">
							{formatRelative(
								subDays(new Date(data.createdAt), 0),
								new Date()
							)}
						</p>
					</div>
				))
			) : (
				<Loader />
			)}
		</ViewContainer>
	);
}
