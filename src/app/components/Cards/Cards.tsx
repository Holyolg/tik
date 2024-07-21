"use client";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import conceptData from "../../../concept.json";
import genprojectData from "../../../genproject.json";
import Card from "../Card/Card";

interface Data {
	id: string;
	img: string;
	link: string;
	title: string;
	category: string;
	subcategory: string;
	type: string;
	subtitle?: string;
	square?: string;
	location?: string;
	partners?: string;
	customer?: string;
	stage?: string;
	date?: string;
	status?: string;
	description?: string;
	imgcontent?: string[];
}

const Cards = ({ category, type }: { category: string; type: string }) => {
	const [cards, setCards] = useState<Data[]>([]);
	const pathname = usePathname();

	useEffect(() => {
		const pathConceptData =
			pathname === "/projects"
				? conceptData
				: conceptData.filter(card => card.rating);
		const pathGenpojectData =
			pathname === "/projects"
				? genprojectData
				: genprojectData.filter(card => card.rating);

		const data = type === "concept" ? pathConceptData : pathGenpojectData;
		setCards(data);
	}, [type]);

	const filteredCards = useMemo(() => {
		return category != "Все"
			? cards.filter(card => card.subcategory == category)
			: cards;
	}, [category, cards]);

	return (
		<div className="mx-auto grid grid-cols-1 w-full md:grid-cols-2 xl:grid-cols-3 gap-10 mt-10">
			{filteredCards.map(card => {
				return (
					<Card
						key={card.id}
						id={card.id}
						title={card.title}
						link={card.link}
						img={card.img}
						subtitle={card.subtitle}
						category={card.category}
					/>
				);
			})}
		</div>
	);
};

export default Cards;
