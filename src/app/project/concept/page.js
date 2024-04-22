"use client";

import items from "@/app/Data/Cards";
import Card from "@/app/components/Card/Card";
import Categories from "@/app/components/Categories/Categories";
import Menu from "@/app/components/Menu/Menu";
import { useState } from "react";
import { getCards } from "@/app/actions/GetCards/GetCards";



export default function Concept() {
	const [categoryId, setCategoryId] = useState(0);
	const filterCategories = items.filter(item => item.type == categoryId);

	return (
		<>
			<Categories 
				type={items.type}
				category={categoryId}
				onClickCategory={i => {
					setCategoryId(i);
				}}
			/>
			
			<div className="flex items-center mx-auto justify-between w-4/5"></div>
			<section className="flex justify-center p-4">
				<div className="grid grid-cols-3 gap-10 p-10 mt-10">
				{filterCategories.map(item => {
						return (
							<Card
								key={item.id}
								id={item.id}
								title={item.title}
								link={item.link}
								imgSrc={item.imgSrc}
								description={item.description}
								type={item.type}
							/>
						);
					})}
				</div>
			</section>
		</>
	);
}

// const Filter = () => {
// 	const [categoryId, setCategoryId] = useState();
// };

// const Card = ({ id, title, link, imgSrc, description, type }) => {
// 	const [isHover, setIsHover] = useState(false);
// 	return (
// 		<>
// 			<div className="bg-[#003056]" id={id}>
// 				<Link
// 					href={link}
// 					style={{
// 						backgroundImage: `url(${imgSrc})`,
// 						backgroundPosition: "center",
// 						backgroundSize: "cover",
// 					}}
// 					className="card-wrapper flex items-center text-center text-white w-64 h-64 "
// 				>
// 					<motion.div
// 						className="text-xl opacity-0 flex-col h-full content-center bg-[#003056]"
// 						animate={isHover ? "open" : "hidden"}
// 						variants={variants}
// 						onMouseEnter={() => setIsHover(true)}
// 						onMouseLeave={() => setIsHover(false)}
// 					>
// 						{title}
// 						<p className="mt-10 text-sm">{description}</p>
// 					</motion.div>
// 				</Link>
// 			</div>
// 		</>
// 	);
// };

// const variants = {
// 	open: { opacity: 1 },
// 	hidden: { opacity: 0 },
// };

