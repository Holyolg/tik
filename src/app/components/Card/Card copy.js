"use client";
import getCards from "@/app/servises/GetCards/GetCards";
import { useEffect, useState } from "react";
import Categories from "../Categories/Categories";
import Card from "./Card";

export const CardTest = ({ id, title, link, imgSrc, description, type }) => {
	const [cards, setCards] = useState([]);
	const [categoryId, setCategoryId] = useState(0);
	useEffect(() => {
		getCards().then(res => {
			setCards(res);
			setIsLoading(false);
		});
	}, []);
	const cardFilter = cards.filter(card => card.category == categoryId);
	return (
		<>
			<Categories
				category={categoryId}
				onClickCategory={i => {
					setCategoryId(i);
				}}
			/>
			<div className="flex items-center mx-auto justify-between w-4/5"></div>
			<section className="flex justify-center p-4">
				<div className="grid grid-cols-3 gap-10 p-10 mt-10">
					{cardFilter.map(card => {
						return (
							<Card
								key={card.id}
								id={card.id}
								title={card.title}
								link={card.link}
								img={card.img}
								description={card.description}
								category={card.category}
							/>
						);
					})}
				</div>
			</section>
		</>
	);
};

const variants = {
	open: { opacity: 1 },
	hidden: { opacity: 0 },
};

export default Card;
