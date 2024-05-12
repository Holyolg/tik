import toBase64 from "@/app/services/toBase64/toBase64";
import shimmer from "@/app/ui/Shimer/Shimer";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Card({ id, title, link, img, subtitle, category }) {
	const [isHover, setIsHover] = useState(false);

	return (
		<>
			<div className="" id={id}>
				<Link
					href={link + id}
					className="card-wrapper flex items-center text-center text-white w-80 h-80 relative"
				>
					<Image
						src={img}
						alt="Изображение проекта"
						style={{ objectFit: "cover" }}
						fill
						sizes="400px"
						placeholder={`data:image/svg+xml;base64,${toBase64(
							shimmer(320, 320)
						)}`}
					/>
					<motion.div
						className="text-xl p-0.5 opacity-0 flex-col w-full h-full content-center bg-[#003056]"
						animate={isHover ? "open" : "hidden"}
						variants={variants}
						onMouseEnter={() => setIsHover(true)}
						onMouseLeave={() => setIsHover(false)}
					>
						{title}
						<p className="mt-10 text-sm">{subtitle}</p>
					</motion.div>
				</Link>
			</div>
		</>
	);
}

const variants = {
	open: { opacity: 0.8 },
	hidden: { opacity: 0 },
};
