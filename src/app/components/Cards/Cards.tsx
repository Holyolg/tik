"use client";
import getCards from "@/app/services/GetCards/GetCards";
import { useWindowSize } from "@/app/services/hooks/useWindowSize/useWindowSize";
import { Skeleton } from "@mui/material/";
import { useEffect, useState } from "react";
import Card from "../Card/Card";

interface IJSONCards {
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

const Cards = ({
	numItems,
	category,
	categoryId,
	loading,
}: {
	numItems?: number | undefined;
	category: string;
	categoryId: number;
	loading: boolean;
}) => {
	const [cards, setCards] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const { width } = useWindowSize();
	useEffect(() => {
		setIsLoading(loading);
	}, [category]);

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
		const API_URL = `https://6628119354afcabd0734c9fb.mockapi.io/TIKPRO/${category}${
			numItems ? `?page=1&limit=${numItems}` : ""
		}`;
		getCards(API_URL).then(res => {
			setCards(res);
			setIsLoading(false);
		});
	}, [category]);

	const cardFilter =
		categoryId > 0
			? cards.filter((card: IJSONCards) => card.category == categoryId)
			: cards;

	return (
		<div className="mx-auto grid grid-cols-1 w-full md:grid-cols-2 xl:grid-cols-3  gap-10 mt-6 lg:mt-10">
			{isLoading
				? skeletons
				: cardFilter.map((card: IJSONCards) => {
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
