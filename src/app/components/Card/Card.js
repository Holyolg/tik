import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function Card({ id, title, link, img, description, category }) {
	const [isHover, setIsHover] = useState(false);

	return (
		<>
			<div className="bg-[#003056]" id={id}>
				<Link
					href={link}
					style={{
						backgroundImage: `url(${img})`,
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
}

const variants = {
	open: { opacity: 1 },
	hidden: { opacity: 0 },
};
