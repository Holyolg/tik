"use client";
import getCards from "@/app/servises/GetCards/GetCards";
import { Loading } from "@/app/ui/Loading/Loading";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Card from "../Card/Card";
import Categories from "../Categories/Categories";

export const Cards = () => {
	const [cards, setCards] = useState([]);
	const [categoryId, setCategoryId] = useState(undefined);
	const [isLoading, setIsLoading] = useState(true);
	const pathName = usePathname();
	const router = useRouter();

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
			if (isNaN(numPath) || numPath > 3) {
			} else {
				setCategoryId(pathId);
			}
		}
	}, []);

	useEffect(() => {
		getCards(categoryId).then(res => {
			setCards(res);
			setIsLoading(false);
		});
	}, [categoryId]);
	useEffect(() => {
		const filterPath = pathName + `?category=${categoryId}`;

		router.push(filterPath);
	}, [categoryId, pathName]);

	// const cardFilter = cards.filter(card => card.category == categoryId);
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
				<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 lg:mt-10">
					{isLoading ? (
						<div className="col-span-3 justify-self-center mt-[30vh]">
							<Loading />
						</div>
					) : (
						cards.map(card => {
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
						})
					)}
				</div>
			</section>
		</>
	);
};

export default Cards;
