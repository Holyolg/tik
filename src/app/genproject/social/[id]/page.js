"use client";
import Breadcrumbs from "@/app/components/Breadcrumbs/Breadcrumbs";
import CardDetails from "@/app/components/CardDetails/CardDetails";
import { Loading } from "@/app/ui/Loading/Loading";
import { useEffect, useState } from "react";

export default function CardDetailsPage({ params }) {
	const id = params.id;
	const [card, setCard] = useState();

	useEffect(() => {
		const getCards = async () => {
			const API_URL =
				"https://6628119354afcabd0734c9fb.mockapi.io/TIKPRO/genproject/" + id;
			const res = await fetch(API_URL);
			if (!res.ok) {
				throw new Error("не загрузился");
			}
			return res.json();
		};
		getCards().then(res => {
			setCard(res);
		});
	}, []);

	if (!card) {
		return (
			<div className="flex justify-center mt-[30vh]">
				<Loading />
			</div>
		);
	}

	return (
		<main className="px-2">
			<div className="container mx-auto">
				<Breadcrumbs pageTitle={card.title} />
				<CardDetails data={card} />
			</div>
		</main>
	);
}
