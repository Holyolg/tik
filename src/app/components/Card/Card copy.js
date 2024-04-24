"use client";
import getCards from "@/app/servises/GetCards/GetCards";
import { use, useEffect, useRef, useState } from "react";
import Categories from "../Categories/Categories";
import Card from "./Card";
import { Loading } from "@/app/ui/Loading/Loading";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

export const CardTest = ({ id, title, link, imgSrc, description, type }) => {
	let cardRef = useRef()
	const [cards, setCards] = useState([]);
	const [categoryId, setCategoryId] = useState(undefined);
	const [isLoading, setIsLoading] = useState(true);
	const pathName = usePathname()
	const router = useRouter()
	
	useEffect(() => {
		if (categoryId === undefined) {
			setCategoryId(0)
		}
},[categoryId])

//Сделать перелинковку 
useEffect(() => {
	if(window.location.search == '?category=NaN') {
		router.push(pathName)
	}
}, [])
//Переделать костыль
	useEffect(() => {
		if(window.location.search) {
			const pathId = window.location.search.slice(-1)
			setCategoryId(Number(pathId))
			console.log(pathName)
			console.log(window.location.search)
		} else  {
			router.push(pathName)
			console.log(pathName)
		}
	}, [])

 	useEffect(() => {
		getCards(categoryId).then(res => {
			setCards(res);
			setIsLoading(false);

		});
	}, [categoryId]);
	useEffect(() => {
		const filterPath = pathName + `?category=${categoryId}`
		
		router.push(filterPath)
	}, [categoryId, pathName])

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
				<div className="grid grid-cols-3 gap-10 p-10 mt-10">
					{isLoading ? 
					<div className="col-span-3 justify-self-center mt-[30vh]"><Loading/></div> :
									cards.map(card => {
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
									})
					}
		
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
