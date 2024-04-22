import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";


export default function Card({ id, title, link, imgSrc, description, type }) {
	const [isHover, setIsHover] = useState(false);


	const apiUrl = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json'

	function pullJson(apiUrl) {
		fetch(apiUrl).then(response => response.json()).then(responseData => {
			console.log(responseData)
		})
	}
	pullJson(apiUrl)
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


