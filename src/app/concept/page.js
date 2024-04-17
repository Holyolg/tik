"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function Concept({ filteredCategories }) {
	// const [categoryId, setCategoryId] = useState(0);
	// const filterCategories = items.filter(item => item.type == categoryId);

	return (
		<>
			<div className="flex items-center mx-auto justify-between w-4/5">
				{/* <Categories
					type={items.type}
					category={categoryId}
					onClickCategory={i => setCategoryId(i)}
				/> */}
			</div>
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

const Card = ({ id, title, link, imgSrc, description, type }) => {
	const [isHover, setIsHover] = useState(false);
	return (
		<>
			<div className="bg-[#003056]" id={id}>
				<Link
					href={link}
					style={{
						backgroundImage: `url(${imgSrc})`,
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
						{title}
						<p className="mt-10 text-sm">{description}</p>
					</motion.div>
				</Link>
			</div>
		</>
	);
};

const variants = {
	open: { opacity: 1 },
	hidden: { opacity: 0 },
};

// const items = [
// 	{
// 		id: 1,
// 		title: 'ЖК "АНДРЕЕВСКИЙ"',
// 		link: "/project/school",
// 		imgSrc: "/card.png",
// 		description: "КОНЦЕПЦИЯ КВАРТАЛА В ИСТОРИЧЕСКОЙ ЗАСТРОЙКЕ",
// 		type: "0",
// 	},
// 	{
// 		id: 2,
// 		title: "LOREM",
// 		link: "/page",
// 		imgSrc: "/card.png",
// 		description:
// 			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius deserunt quia consectetur aliquid obcaecati voluptatibus quos distinctio natus! Tenetur.",
// 		type: "1",
// 	},
// 	{
// 		id: 3,
// 		title: "LOREM",
// 		link: "/page",
// 		imgSrc: "/card.png",
// 		description:
// 			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius deserunt quia consectetur aliquid obcaecati voluptatibus quos distinctio natus! Tenetur.",
// 		type: "2",
// 	},
// 	{
// 		id: 4,
// 		title: "LOREM",
// 		link: "/page",
// 		imgSrc: "/card.png",
// 		description:
// 			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius deserunt quia consectetur aliquid obcaecati voluptatibus quos distinctio natus! Tenetur.",
// 		type: "3",
// 	},
// 	{
// 		id: 5,
// 		title: "LOREM",
// 		link: "/page",
// 		imgSrc: "/card.png",
// 		description:
// 			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius deserunt quia consectetur aliquid obcaecati voluptatibus quos distinctio natus! Tenetur.",
// 		type: "0",
// 	},
// 	{
// 		id: 6,
// 		title: "LOREM",
// 		link: "/page",
// 		imgSrc: "/card.png",
// 		description:
// 			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius deserunt quia consectetur aliquid obcaecati voluptatibus quos distinctio natus! Tenetur.",
// 		type: "1",
// 	},
// 	{
// 		id: 7,
// 		title: "LOREM",
// 		link: "/page",
// 		imgSrc: "/card.png",
// 		description:
// 			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius deserunt quia consectetur aliquid obcaecati voluptatibus quos distinctio natus! Tenetur.",
// 		type: "2",
// 	},
// 	{
// 		id: 8,
// 		title: "LOREM",
// 		link: "/page",
// 		imgSrc: "/card.png",
// 		description:
// 			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius deserunt quia consectetur aliquid obcaecati voluptatibus quos distinctio natus! Tenetur.",
// 		type: "0",
// 	},
// ];
