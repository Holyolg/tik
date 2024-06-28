"use client";
import { useEffect, useState } from "react";
import CardDetails from "../../../components/CardDetails/CardDetails";

interface ICard {
	id: string;
	img: string;
	link: string;
	title: string;
	category: string;
	subtitle: string;
	date: string;
	type: string;
	square: string;
	location: string;
	status: string;
	description: string;
	text: string;
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
			const API_URL = `https://6628119354afcabd0734c9fb.mockapi.io/TIKPRO/${type}/${id}`;
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

	// if (!card) {
	// 	return <h2>Ошибка на стороне сервера</h2>;
	// }

	return (
		<>
			{/* <Breadcrumbs category={card.category} pageTitle={card.title} /> */}
			{card && <CardDetails data={card} />}
		</>
	);
}
