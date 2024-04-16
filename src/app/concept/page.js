'use client'

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Concept() {
	return <section className="flex justify-center p-4">

 <div className="grid grid-cols-3 gap-10 p-10 mt-10">
		
		{items.map(item => {
					return (
						<Card
							key={item.id}
							id={item.id}
							title={item.title}
							link={item.link}
							imgSrc={item.imgSrc}
							description={item.description}
						/>
					);
				})}
		</div>
		</section>}

const Card = ({
	id,
	title,
	link,
	imgSrc,
	description,
}) => {
	const [isHover, setIsHover] = useState(false)
	return(
		<>
		<div className="bg-[#003056]">
		<Link href={link} style={{
							backgroundImage: `url(${imgSrc})`,
							backgroundPosition: "center",
							backgroundSize: "cover",
						}} className="card-wrapper flex items-center text-center text-white w-64 h-64 ">
			<motion.div  className="text-xl opacity-0 flex-col h-full content-center bg-[#003056]"
			animate={isHover ? 'open' : 'hidden'}
			variants={variants}
			onMouseEnter={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}
			>{title}
				<p className="mt-10 text-sm">{description}</p>
			</motion.div>
		</Link>
		</div>
		</>
	) }

	
const variants = {
	open: { opacity: 1},
	hidden: { opacity: 0},
  }

const items = [
	{
		id: 1,
		title: 'ЖК "АНДРЕЕВСКИЙ"',
		link: "/project/school",
		imgSrc:
		"/card.png",
		textMod: " -right-[10vw]",
		description:
		"КОНЦЕПЦИЯ КВАРТАЛА В ИСТОРИЧЕСКОЙ ЗАСТРОЙКЕ",
	},
	{
		id: 2,
		title: "LOREM",
		link: "/page",
		imgSrc:
			"/card.png",
		textMod: " -right-[20vw]",
		description:
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius deserunt quia consectetur aliquid obcaecati voluptatibus quos distinctio natus! Tenetur.",
	},
	{
		id: 3,
		title: "LOREM",
		link: "/page",
		imgSrc:
			"/card.png",
		description:
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius deserunt quia consectetur aliquid obcaecati voluptatibus quos distinctio natus! Tenetur.",
	},
	{
		id: 4,
		title: "LOREM",
		link: "/page",
		imgSrc:
			"/card.png",
		description:
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius deserunt quia consectetur aliquid obcaecati voluptatibus quos distinctio natus! Tenetur.",
	},
	{
		id: 5,
		title: "LOREM",
		link: "/page",
		imgSrc:
			"/card.png",
		description:
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius deserunt quia consectetur aliquid obcaecati voluptatibus quos distinctio natus! Tenetur.",
	},
	{
		id: 6,
		title: "LOREM",
		link: "/page",
		imgSrc:
			"/card.png",
		description:
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius deserunt quia consectetur aliquid obcaecati voluptatibus quos distinctio natus! Tenetur.",
	},
];