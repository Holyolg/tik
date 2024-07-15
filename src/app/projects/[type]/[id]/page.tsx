"use client";
import CardDetails from "@/app/components/CardDetails/CardDetails";
import { useEffect, useState } from "react";

interface ICard {
	id: string;
	img: string;
	link: string;
	title: string;
	category: string | number;
	subtitle: string;
	customer: string;
	date: string;
	type: string;
	square: string;
	location: string;
	status: string;
	description: string;
	text: string;
	stage: string; 
	partners: string;
	imgcontent: [];
}

export default function CardDetailsPage({
	params,
}: {
	params: { id: string; type: string };
}) {
	const id = params.id;
	const type = params.type;
	const [card, setCard] = useState<ICard>();

	useEffect(() => {
		const getCards = async () => {
			const API_URL = `https://668e955fbf9912d4c92ee8b3.mockapi.io/${type}/${id}`;
			const res = await fetch(API_URL);
			if (!res.ok) {
				throw new Error("не загрузился");
			}
			return res.json();
		};

		getCards().then(res => {
			setCard(res);
		});
	}, [id, type]);

	if (!card) {
		return <h2>Ошибка на стороне сервера</h2>;
	}

	return (
		<main className="min-h-[100vh]">
			{card && <CardDetails data={card} />}
		</main>
	);
}
