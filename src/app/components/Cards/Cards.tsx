"use client";
import getCards from "@/app/services/GetCards/GetCards";
import { useWindowSize } from "@/app/services/hooks/useWindowSize/useWindowSize";
import { Skeleton } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Card from "../Card/Card";

interface ICards {
	category: string;
}

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

export const Cards = () => {
	const [cards, setCards] = useState<IJSONCards[]>([]);
	const [categoryId, setCategoryId] = useState(0);
	const [category, setCategory] = useState("genproject");
	const [isLoading, setIsLoading] = useState(true);
	const pathName = usePathname();
	const router = useRouter();

	const { width } = useWindowSize();
	const skeletons = [...new Array(9)].map((_, index) => (
		<Skeleton
			sx={{ borderRadius: "0.5rem" }}
			variant="rounded"
			height={width > 1920 ? 360 : 300}
			key={index}
		></Skeleton>
	));

	useEffect(() => {
		if (categoryId === undefined) {
			setCategoryId(0);
		}
	}, [categoryId]);

	//Переделать костыль
	useEffect(() => {
		if (window.location.search) {
			const pathId = Number(window.location.search.slice(-1));
			const numPath = Number(pathId);
			if (isNaN(numPath) || numPath > 4) {
			} else {
				setCategoryId(pathId);
			}
		}
	}, []);

	useEffect(() => {
		const API_URL = `https://6628119354afcabd0734c9fb.mockapi.io/TIKPRO/${category}/`;
		getCards(API_URL).then((res: IJSONCards[]) => {
			setCards(res);
			setIsLoading(false);
		});
	}, [categoryId, category]);

	useEffect(() => {
		const filterPath = pathName + `?${category}&category=${categoryId}`;

		router.push(filterPath);
	}, [categoryId, pathName, category]);

	const cardFilter =
		categoryId > 0
			? cards.filter((card: IJSONCards) => card.category == categoryId)
			: cards;

	return (
		<div className="grid grid-cols-1 w-full md:grid-cols-2 xl:grid-cols-3  gap-10 mt-10">
			{isLoading
				? skeletons
				: cardFilter.map(card => {
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
