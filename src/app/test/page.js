"use client";

import { useEffect, useState } from "react";
import getCards from "../services/GetCards/GetCards";

export default function Test() {
	const [cards, setCards] = useState([]);
	useEffect(() => {
		getCards("/api/projects").then(res => {
			setCards(res);
			console.log(res);
		});
	}, []);

	return (
		<main>
			{cards.map(card => (
				<h1>{card.title}</h1>
			))}
		</main>
	);
}
