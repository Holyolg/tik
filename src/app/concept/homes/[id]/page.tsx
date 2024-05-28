"use client";
import { useEffect, useState } from "react";
import Breadcrumbs from "../../../components/Breadcrumbs/Breadcrumbs";
import CardDetails from "../../../components/CardDetails/CardDetails";
import { Loading } from "../../../ui/Loading/Loading";

interface ICardDetailsPage {
	params: any;
}
interface ICard {
	id: string;
	img: string;
	link: string;
	title: string;
	category: string | number;
	subtitle: string;
	date: string;
	type: string;
	square: string;
	location: string;
	status: string;
	description: string;
	text: string;
	img2: string;
	img3: string;
}



export default function CardDetailsPage({ params }: ICardDetailsPage) {
	const id = params.id;
	const [card, setCard] = useState<ICard>();

	useEffect(() => {
		const getCards = async () => {
			const API_URL =
				"https://6628119354afcabd0734c9fb.mockapi.io/TIKPRO/concept/" + id;
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
		return <Loading />;
	}

	return (
		<main className="px-2 my-24">
			<div className="container mx-auto">
				<Breadcrumbs pageTitle={card.title} />
				<CardDetails data={card} />
			</div>
		</main>
	);
}
