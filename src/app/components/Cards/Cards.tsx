"use client";
import { useWindowSize } from "@/app/hooks/useWindowSize/useWindowSize";
import getCards from "@/app/services/GetCards/GetCards";
import { Skeleton } from "@mui/material/";
import { useEffect, useMemo, useState } from "react";
import Card from "../Card/Card";

interface IData {
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

const Cards = ({
	numItems,
	category,
	type,
	loading,
}: {
	numItems?: number | undefined;
	category: string | null;
	type: string | null;
	loading: boolean;
}) => {
	const [cards, setCards] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const { width } = useWindowSize();

	useEffect(() => {
		setIsLoading(loading);
	}, []);

	const skeletons = [...new Array(numItems == undefined ? 9 : numItems)].map(
		(_, index) => (
			<Skeleton
				sx={{ borderRadius: "0.5rem" }}
				variant="rounded"
				height={width > 1920 ? 360 : 300}
				key={index}
			></Skeleton>
		)
	);

	useEffect(() => {
		const API_URL = `https://668e955fbf9912d4c92ee8b3.mockapi.io/${type}${
			numItems ? `?page=1&limit=${numItems}&sortBy=rating&order=asc` : ""
		}`;

		getCards(API_URL).then(res => {
			setCards(res);
			setIsLoading(false);
		});
	}, [type, numItems]);

	const filteredCards = useMemo(() => {
		return category != "Все"
			? cards.filter((card: IData) => card.subcategory == category)
			: cards;
	}, [category, cards]);

	return (
		<div className="mx-auto grid grid-cols-1 w-full md:grid-cols-2 xl:grid-cols-3 gap-10 mt-10">
			{isLoading
				? skeletons
				: filteredCards.map((card: IData) => {
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
