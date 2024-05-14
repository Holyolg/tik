import toBase64 from "@/app/services/toBase64/toBase64";
import shimmer from "@/app/ui/Shimer/Shimer";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Card({ id, title, link, img, subtitle, category }) {
	const [isHover, setIsHover] = useState(false);

	return (
		<div
			id={id}
			onMouseEnter={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}
		>
			<Link
				href={link + id}
				className="card-wrapper flex items-center text-center text-white size-52 relative"
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
				{isHover && (
					<motion.div
						className="absolute p-1 flex-col w-full h-full content-center bg-[#003056]"
						variants={variants}
						initial="hidden"
						animate="open"
						exit="hidden"
					>
						{title}
						<p className="mt-5 text-sm">{subtitle}</p>
					</motion.div>
				)}
			</Link>
		</div>
	);
}

const variants = {
	open: { opacity: 1 },
	hidden: { opacity: 0 },
};
