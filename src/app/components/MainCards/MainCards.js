"use client";
import getCards from "@/app/services/GetCards/GetCards";
import { Loading } from "@/app/ui/Loading/Loading";
import { Suspense, useEffect, useState } from "react";
import Card from "../Card/Card";

const MainCards = () => {
	const [cards, setCards] = useState([]);
	const [category, setCategory] = useState("genproject");
	const [isLoading, setIsLoading] = useState(true);

	//Переделать костыль

	useEffect(() => {
		const API_URL = `https://6628119354afcabd0734c9fb.mockapi.io/TIKPRO/${category}?page=1&limit=9`;
		getCards(API_URL).then(res => {
			setCards(res);
			setIsLoading(false);
		});
	}, [category]);

	return (
		<>
			<div className="mt-12 flex justify-between">
				<div className="space-x-5 ">
					<button
						onClick={() => {
							{
								setCategory("genproject");
							}
						}}
						className={
							category === "genproject"
								? "w-72 h-10 bg-black border-black border rounded-lg hover:bg-black text-white active:opacity-85"
								: "w-72 h-10 border-black border rounded-lg hover:bg-black hover:text-white active:opacity-85"
						}
					>
						Генеральное проектирование
					</button>
					<button
						onClick={() => {
							setCategory("concept");
						}}
						className={
							category === "concept"
								? "w-72 h-10 bg-black border-black border rounded-lg hover:bg-black text-white active:opacity-85"
								: "w-72 h-10 border-black border rounded-lg hover:bg-black hover:text-white active:opacity-85"
						}
					>
						Концепция
					</button>
				</div>
				<a className="hover:opacity-75 flex items-center justify-center space-x-2 cursor-pointer">
					<span>Больше проектов</span>
					<div className="w-5">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
							<path d="M23.5587,16.916 C24.1447,17.4999987 24.1467,18.446 23.5647,19.034 L16.6077,26.056 C16.3147,26.352 15.9287,26.4999987 15.5427,26.4999987 C15.1607,26.4999987 14.7787,26.355 14.4867,26.065 C13.8977,25.482 13.8947,24.533 14.4777,23.944 L20.3818,17.984 L14.4408,12.062 C13.8548,11.478 13.8528,10.5279 14.4378,9.941 C15.0218,9.354 15.9738,9.353 16.5588,9.938 L23.5588,16.916 L23.5587,16.916 Z"></path>
						</svg>
					</div>
				</a>
			</div>
			<section className="flex justify-center">
				<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 lg:mt-10">
					<Suspense fallback={<Loading />}>
						{isLoading ? (
							<Loading />
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
					</Suspense>
				</div>
			</section>
		</>
	);
};

export default MainCards;
