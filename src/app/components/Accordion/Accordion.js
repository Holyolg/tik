"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { useWindowSize } from "./useWindowSize";

const VerticalAccordion = () => {
	const [open, setOpen] = useState(items[0].id);
	return (
		<>
			<section className="relative w-full overflow-hidden">
				<video
					className="w-full h-[90vh] object-cover"
					width="100%"
					height="90vh"
					preload="none"
					autoPlay
					loop
					muted
				>
					<source src="/hero.mp4" type="video/mp4" />
					<track
						src="/path/to/captions.vtt"
						kind="subtitles"
						srcLang="en"
						label="English"
					/>
					Your browser does not support the video tag.
				</video>
				{items.map(item => {
					return (
						<Panel
							key={item.id}
							open={open}
							setOpen={setOpen}
							id={item.id}
							title={item.title}
							link={item.link}
							imgSrc={item.imgSrc}
							description={item.description}
							textMod={item.textMod}
							textAlign={item.textAlign}
						/>
					);
				})}
			</section>
		</>
	);
};

const Panel = ({
	open,
	setOpen,
	id,
	title,
	link,
	imgSrc,
	description,
	textMod,
	textAlign,
}) => {
	const { width, height } = useWindowSize();
	console.log(width, height);
	const isOpen = open === id;
	let textStyle =
		"text-white bg-[#003056] sm:flex-col px-5 py-10 border-l w-[40vw] h-[90vh] absolute top-0 flex";
	return (
		<>
			<AnimatePresence>
				<motion.div
					className={textStyle + textMod}
					onMouseEnter={() => setOpen(id)}
					onMouseLeave={() => setOpen(0)}
					whileHover={{
						transform: "translateX(-34vw)",
						transition: { duration: 0.3, delay: 0.125 },
					}}
				>
					<div className="card-wrapper flex h-full">
						<Link
							href={link}
							style={{
								writingMode: "vertical-lr",
								textAlign: textAlign,
							}}
							className="hidden lg:block text-3xl rotate-180"
						>
							{title}
						</Link>
						<span className="block lg:hidden text-xl">{title}</span>
						{isOpen && (
							<motion.div
								key={`panel-${id}`}
								className=""
								variants={descriptionVariants}
								initial="closed"
								animate="open"
								exit="closed"
							>
								<div className="content-wrapper h-full ml-10">
									<img className="w-full" src={imgSrc}></img>
									<p className="text-xl text-start">
										САМЫЙ ЛУЧШИЙ КОНЦЕПТУАЛЬНЫЙ ПЛАСТ МОСКВЫ
									</p>
								</div>
							</motion.div>
						)}
					</div>
				</motion.div>
			</AnimatePresence>
		</>
	);
};

export default VerticalAccordion;

// const panelVariants = {
// 	open: {
// 		width: "100%",
// 		height: "100%",
// 	},
// 	closed: {
// 		width: "0%",
// 		height: "100%",
// 	},
// };

// const panelVariantsSm = {
// 	open: {
// 		width: "100%",
// 		height: "200px",
// 	},
// 	closed: {
// 		translate: "10wh",
// 		// width: "100%",
// 		// height: "0px",
// 	},
// };

const descriptionVariants = {
	open: {
		opacity: 1,
		x: "0%",
		transition: {
			easy: "linear",
			duration: 0.2,
		},
	},
	closed: { opacity: 0, x: "100%" },
};

const items = [
	{
		id: 1,
		title: "КОНЦЕПЦИЯ",
		link: "/concept",
		imgSrc: "/card.png",
		textMod: " -right-[22vw]",
		textAlign: "start",
		// description:
		//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius deserunt quia consectetur aliquid obcaecati voluptatibus quos distinctio natus! Tenetur.",
	},
	{
		id: 2,
		title: "ГЕНПРОЕКТИРОВАНИЕ",
		link: "/general",
		imgSrc: "/card.png",
		textMod: " -right-[28vw]",
		textAlign: "center",
		// description:
		//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius deserunt quia consectetur aliquid obcaecati voluptatibus quos distinctio natus! Tenetur.",
	},
	{
		id: 3,

		title: "О НАС",
		link: "/about",
		imgSrc: "/card.png",
		textMod: " -right-[34vw]",
		textAlign: "end",
		// description:
		//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius deserunt quia consectetur aliquid obcaecati voluptatibus quos distinctio natus! Tenetur.",
	},
];

{
	/* <motion.div
variants={descriptionVariants}
initial="closed"
animate="open"
exit="closed"
>
<p>{description}</p>
</motion.div> */
}

{
	/* <AnimatePresence>
				{isOpen && (
					<motion.div
						key={`panel-${id}`}
						variants={width && width > 1024 ? panelVariants : panelVariantsSm}
						initial="closed"
						animate="open"
						exit="closed"
						style={{
							backgroundImage: `url(${imgSrc})`,
							//использовать для анимации самих картинок
							// backgroundPosition: "center",
							// backgroundSize: "cover",
						}}
						className="w-full h-full overflow-hidden relative bg-[#003056] flex items-end"
					></motion.div>
				)}
			</AnimatePresence> */
}
