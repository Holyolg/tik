import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import toBase64 from "../../services/toBase64/toBase64";
import shimmer from "../../ui/Shimer/Shimer";

interface IJSONCards {
	id: string;
	img: string;
	link: string;
	title: string;
	category: string | number;
	subtitle: string;
}

const Card = ({ id, title, link, img, subtitle, category }: IJSONCards) => {
	const [isHover, setIsHover] = useState(false);

	return (
		<div
			id={id}
			onMouseEnter={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}
		>
			<Link
				href={link + id}
				className="card-wrapper flex items-center text-center text-white w-[450px] h-[250px] 2xl:w-[610px] 2xl: h-[350px] relative rounded-lg"
			>
				<Image
					src={img}
					alt={title}
					style={{ objectFit: "cover", borderRadius: "0.5rem" }}
					fill
					sizes="700px"
					placeholder={`data:image/svg+xml;base64,${toBase64(
						shimmer(550, 250)
					)}`}
				/>
				{isHover && (
					<motion.div
						className="flex-col w-full h-full content-center backdrop-blur-sm rounded-lg backdrop-brightness-90"
						variants={variants}
						initial="hidden"
						animate="open"
						exit="hidden"
					>
						<p className="font-semibold">{title}</p>
						<p className="mt-5 text-sm">{subtitle}</p>
					</motion.div>
				)}
			</Link>
		</div>
	);
};

const variants = {
	open: { opacity: 1 },
	hidden: { opacity: 0 },
};
export default Card;
