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
			return <div className="bg-[#003056]" id={card.id}>
			<Link
				href={card.link}
				style={{
					backgroundImage: `url(${card.imgSrc})`,
					backgroundPosition: "center",
					backgroundSize: "cover",
				}}
				className="card-wrapper flex items-center text-center text-white w-64 h-64 "
			>
				<motion.div
					className="text-xl opacity-0 flex-col h-full content-center bg-[#003056]"
					animate={isHover ? "open" : "hidden"}
					variants={variants}
					onMouseEnter={() => setIsHover(true)}
					onMouseLeave={() => setIsHover(false)}
				>
					{card.title}
					<p className="mt-10 text-sm">{card.description}</p>
				</motion.div>
			</Link>
		</div>
			})}
		</>
	);
};

const variants = {
	open: { opacity: 1 },
	hidden: { opacity: 0 },
};


export default Card