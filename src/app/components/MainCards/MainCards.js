"use client";
import getCards from "@/app/services/GetCards/GetCards";
import { useWindowSize } from "@/app/services/hooks/useWindowSize/useWindowSize";
import { Skeleton } from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";
import Card from "../Card/Card";

const MainCards = () => {
	const [cards, setCards] = useState([]);
	const [category, setCategory] = useState("genproject");
	const [isLoading, setIsLoading] = useState(true);
	const { width, height } = useWindowSize();
	const skeletons = [...new Array(9)].map((_, index) => (
		<Skeleton
			sx={{ borderRadius: "0.5rem" }}
			variant="rounded"
			height={width > 1920 ? 360 : 300}
			key={index}
		></Skeleton>
	));

	useEffect(() => {
		const API_URL = `https://6628119354afcabd0734c9fb.mockapi.io/TIKPRO/${category}?page=1&limit=9`;
		getCards(API_URL).then(res => {
			setCards(res);
			setIsLoading(false);
		});
	}, [category]);

	return (
		<>
			<div className="mt-12 justify-between lg:flex">
				<div className="flex items-center sm:space-y-0 space-x-0 sm:space-x-5 mb-6 lg:mb-0">
					<button
						onClick={() => {
							{
								setCategory("genproject");
								category == "genproject" ? "" : setIsLoading(true);
							}
						}}
						className={
							category === "genproject"
								? "w-full h-14 sm:w-72 sm:h-10 bg-black border-black border sm:rounded-lg rounded-l-lg hover:bg-black text-white active:opacity-85"
								: "w-full h-14 sm:w-72 sm:h-10 border-black border sm:rounded-lg rounded-l-lg  hover:bg-black hover:text-white active:opacity-85"
						}
					>
						Генеральное проектирование
					</button>
					<button
						onClick={() => {
							setCategory("concept");
							category == "concept" ? "" : setIsLoading(true);
						}}
						className={
							category === "concept"
								? "w-full h-14 sm:w-72 sm:h-10 bg-black border-black border sm:rounded-lg rounded-r-lg hover:bg-black text-white active:opacity-85"
								: "w-full h-14 sm:w-72 sm:h-10 border-black border sm:rounded-lg rounded-r-lg  hover:bg-black hover:text-white active:opacity-85"
						}
					>
						Концепция
					</button>
				</div>
				<Link
					href={"projects"}
					className="hover:opacity-75 flex items-center justify-center space-x-2 cursor-pointer"
				>
					<span>Больше проектов</span>
					<div className="w-5">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
							<path d="M23.5587,16.916 C24.1447,17.4999987 24.1467,18.446 23.5647,19.034 L16.6077,26.056 C16.3147,26.352 15.9287,26.4999987 15.5427,26.4999987 C15.1607,26.4999987 14.7787,26.355 14.4867,26.065 C13.8977,25.482 13.8947,24.533 14.4777,23.944 L20.3818,17.984 L14.4408,12.062 C13.8548,11.478 13.8528,10.5279 14.4378,9.941 C15.0218,9.354 15.9738,9.353 16.5588,9.938 L23.5588,16.916 L23.5587,16.916 Z"></path>
						</svg>
					</div>
				</Link>
			</div>
			<section className="flex justify-center">
				<div className="grid grid-cols-1 w-full md:grid-cols-2 xl:grid-cols-3  gap-10 mt-10">
					{isLoading
						? skeletons
						: cards.map(card => {
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
			</section>
		</>
	);
};

export default MainCards;
