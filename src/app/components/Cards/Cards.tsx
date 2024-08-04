"use client";
import { useWindowSize } from "@/app/hooks/useWindowSize/useWindowSize";
import { cardStore } from "@/app/store/store";
import { Skeleton } from "@mui/material/";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import conceptData from "../../../concept.json";
import genprojectData from "../../../genproject.json";
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
	type,
	category,
	loading,
}: {
	numItems?: number | undefined;
	type: string;
	category: string;
	loading: boolean;
}) => {
	const updateLoading = cardStore(state => state.updateLoading);

	const pathname = usePathname();

	const [cards, setCards] = useState<IData[]>([]);
	const { width } = useWindowSize();

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
		const pathConceptData =
			pathname === "/projects"
				? conceptData
				: conceptData
						.filter(card => card.rating)
						.sort((a, b) => (a.rating > b.rating ? 1 : -1));
		const pathGenpojectData =
			pathname === "/projects"
				? genprojectData
				: genprojectData
						.filter(card => card.rating > 0)
						.sort((a, b) => (a.rating > b.rating ? 1 : -1));
		const data = type === "concept" ? pathConceptData : pathGenpojectData;
		setCards(data);
		updateLoading(false);
	}, [type]);

	const filteredCards =
		category != "Все"
			? cards.filter((card: IData) => card.subcategory == category)
			: cards;

	return (
		<div className="mx-auto grid grid-cols-1 w-full md:grid-cols-2 xl:grid-cols-3 gap-10 mt-10">
			{loading
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
