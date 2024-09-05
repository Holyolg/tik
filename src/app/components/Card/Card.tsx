import { useWindowSize } from "@/app/hooks/useWindowSize";
import { shimmer, toBase64 } from "@/app/lib";
import { AnimatePresence, motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FC, useRef } from "react";

interface Card {
	id: string;
	img: string;
	link: string;
	title: string;
	category: string | number;
	subtitle: string | undefined;
}

const Card: FC<Card> = ({ id, title, link, img, subtitle }) => {
	const { width } = useWindowSize();
	const ref = useRef(null);
	const isInView = useInView(ref, {
		margin: "0% 70% -20% 0%",
	});

	const blurXL = (
		<motion.div
			key={id}
			className="blur__fix w-full h-full flex flex-col justify-center backdrop-blur-sm rounded-lg backdrop-brightness-90"
			initial={{ opacity: 0 }}
			whileHover={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.35 }}>
			<p className="font-semibold">{title}</p>
			<p className="mt-5 text-sm">{subtitle}</p>
		</motion.div>
	);

	const blurXS = (
		<motion.div
			key={id}
			className="blur__fix w-full h-full flex flex-col justify-center backdrop-blur-sm rounded-lg backdrop-brightness-90"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.35 }}
			viewport={{ margin: "0px 50% -50% 0px" }}>
			<p className="font-semibold">{title}</p>
			<p className="mt-5 text-sm">{subtitle}</p>
		</motion.div>
	);

	return (
		<div id={id}>
			<Link
				href={link + id}
				className="flex items-center text-center text-white min-w-full h-[300px] 2xl:h-[360px] relative rounded-lg">
				<Image
					src={img}
					ref={ref}
					alt={title}
					style={{ objectFit: "cover", borderRadius: "0.5rem" }}
					fill
					sizes="700px"
					placeholder={`data:image/svg+xml;base64,${toBase64(
						shimmer(width > 1920 ? 610 : 360, 300)
					)}`}
				/>
				<AnimatePresence>
					{width >= 768 && blurXL}
					{width < 768 && isInView ? blurXS : ""}
				</AnimatePresence>
			</Link>
		</div>
	);
};

export default Card;
