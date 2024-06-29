import { useWindowSize } from "@/app/services/hooks/useWindowSize/useWindowSize";
import toBase64 from "@/app/services/toBase64/toBase64";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
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
	const { width } = useWindowSize();
	const ref = useRef(null);
	const isInView = useInView(ref, {
		margin: "0px 50% -50% 0px",
	});

	const variants = {
		open: { opacity: 1 },
		hidden: { opacity: 0 },
	};
	const blur = (
		<motion.div
			key={id}
			className="blur__fix w-full h-full flex flex-col justify-center backdrop-blur-sm rounded-lg backdrop-brightness-90"
			variants={variants}
			initial="hidden"
			animate="open"
			exit="hidden"
			transition={{ duration: 2 }}
		>
			<p className="font-semibold">{title}</p>
			<p className="mt-5 text-sm">{subtitle}</p>
		</motion.div>
	);

	return (
		<div
			id={id}
			onMouseEnter={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}
		>
			<Link
				href={link + id}
				className="flex items-center text-center text-white min-w-full h-[300px] 2xl:h-[360px] relative rounded-lg"
			>
				<Image
					src={img}
					ref={ref}
					alt={title}
					style={{ objectFit: "cover", borderRadius: "0.5rem" }}
					fill
					sizes="700px"
					placeholder={`data:image/svg+xml;base64,${toBase64(
						shimmer(width > 1920 ? 610 : 450, 350)
					)}`}
				/>
				{isHover && width > 768 && blur}
				{width < 768 && isInView ? blur : ""}
			</Link>
		</div>
	);
};

export default Card;
