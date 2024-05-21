"use client";
import { useEffect, useState } from 'react';
import {Loading} from '../../../ui/Loading/Loading'
import  Breadcrumbs  from '../../../components/Breadcrumbs/Breadcrumbs';
import CardDetails from '../../../components/CardDetails/CardDetails'

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
