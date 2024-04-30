"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { useWindowSize } from "./useWindowSize";

const VerticalAccordion = () => {
	const [open, setOpen] = useState(0);
	return (
		<>
			<section className="relative w-full overflow-hidden">
				<video
					className="md:w-full md:h-[90vh] h-[60vh] object-cover"
					preload="none"
					autoPlay
					loop
					muted
					playsinline
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
	const isOpen = open === id;
	let textStyle =
		"text-white bg-[#003056] px-5 py-10 border-l w-[40vw] h-[90vh] absolute top-0 flex flex-col";
	const panelLg = (
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
					className="lg:text-3xl md:text-xl rotate-180 font-semibold"
				>
					{title}
				</Link>
				{isOpen && (
					<motion.div
						key={`panel-${id}`}
						className="self-center"
						variants={descriptionVariants}
						initial="closed"
						animate="open"
						exit="closed"
					>
						<div className="content-wrapper h-full ml-10">
							<img className="w-full	saturate-0" src={imgSrc}></img>
							<p className="text-xl text-start">{description}</p>
						</div>
					</motion.div>
				)}
			</div>
		</motion.div>
	);

	const panelSm = (
		<div className="text-white text-left text-xl card-wrapper p-4 flex-col h-full border-t">
			<Link href={link} className="font-semibold underline">
				{title}
			</Link>

			<div key={`panel-${id}`} className="mt-5">
				<div className="content-wrapper h-full">
					<img className="w-full saturate-0" src={imgSrc}></img>
					<p className="text-xl text-start mt-5">{description}</p>
				</div>
			</div>
		</div>
	);

	return (
		<>
			<AnimatePresence>
				{width && width > 768 ? panelLg : panelSm}
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
		link: "/project/concept",
		imgSrc: "/card.png",
		textMod: " -right-[22vw]",
		textAlign: "start",
		description: "Лучший концептуальный план Москвы",
	},
	{
		id: 2,
		title: "ГЕНПРОЕКТИРОВАНИЕ",
		link: "/project/genproject",
		imgSrc: "/genproject.png",
		textMod: " -right-[28vw]",
		textAlign: "center",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius deserunt quia consectetur aliquid obcaecati voluptatibus quos distinctio natus! Tenetur.",
	},
	{
		id: 3,

		title: "О НАС",
		link: "/about",
		imgSrc: "/about.png",
		textMod: " -right-[34vw]",
		textAlign: "end",
		description:
			"- 30% специалистов с опытом работы по профессии - > 15 - 20 лет, 50% - > 5 лет,  20% - менее 5 лет; - текучка кадров не превышает 2-3% в год, коллектив стабилен, при подборе новых кадров предпочтение отдается не только опыту, но и навыкам командной работы в коллективе, что крайне важно в BIM-проектировании. Каждый год Компанию пополняют выпускники ВУЗов.",
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
