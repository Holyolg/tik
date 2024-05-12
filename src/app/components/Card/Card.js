import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Card({ id, title, link, img, subtitle, category }) {
	const [isHover, setIsHover] = useState(false);

	const shimmer = (
		w,
		h
	) => `<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

	const toBase64 = str =>
		typeof window === "undefined"
			? Buffer.from(str).toString("base64")
			: window.btoa(str);

	return (
		<>
			<div className="bg-[#003056]" id={id}>
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
							shimmer(700, 475)
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
