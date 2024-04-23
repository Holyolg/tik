'use client'
import getCards from "@/app/servises/GetCards/GetCards";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export const Card =( {id, title, link, imgSrc, description, type}) => {
	const [isHover, setIsHover] = useState(false);
	const [isLoading, setIsLoading] = useState(true)
	const [card, setCards] = useState([])
	useEffect(() => {
		getCards().then((res) => {
			setCards(res);
		  setIsLoading(false)
		});
	  }, []);
	  
	return (
		<>
			{card.map((card) => {
			console.log(card)
			return <div key={card.id}>{card.title}</div>
			})}
		</>
	);
};

const variants = {
	open: { opacity: 1 },
	hidden: { opacity: 0 },
};


export default Card