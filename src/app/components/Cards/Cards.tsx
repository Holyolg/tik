"use client";
import getCards from "@/app/services/GetCards/GetCards";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Loading } from "../../ui/Loading/Loading";
import Card from "../Card/Card";
import Categories from "../Categories/Categories";

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
		const filterPath = pathName + `?category=${categoryId}`;

		router.push(filterPath);
	}, [categoryId, pathName]);

	const cardFilter =
		categoryId > 0
			? cards.filter((card: IJSONCards) => card.category == categoryId)
			: cards;

	return (
		<>
			<div className="space-x-5 mt-12">
				<button
					onClick={() => setCategory("genproject")}
					className="w-72 h-10 border-black border rounded-lg hover:bg-black hover:text-white active:opacity-85"
				>
					Генеральное проектирование
				</button>
				<button
					onClick={() => setCategory("concept")}
					className="w-72 h-10 border-black border rounded-lg hover:bg-black hover:text-white active:opacity-85"
				>
					Концепция
				</button>
			</div>
			<Categories
				category={categoryId}
				onClickCategory={(i: number) => {
					setCategoryId(i);
				}}
			/>
			<section className="mt-12 container">
				<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3   gap-[45px]">
					{isLoading ? (
						<div className="col-span-3 justify-self-center">
							<Loading />
						</div>
					) : (
						cardFilter.map(card => {
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
