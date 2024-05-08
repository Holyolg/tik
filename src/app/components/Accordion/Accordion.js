"use client";

import { Video } from "@/app/components/Video/Video";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useWindowSize } from "./useWindowSize";

const VerticalAccordion = () => {
	const [open, setOpen] = useState(0);
	const { width, height } = useWindowSize();

	return (
		<>
			<div className="absolute z-0 top-0 left-0 w-full bg-[url('/blur_min.jpg')] bg-no-repeat">
				<Video src={"/hero.mp4"} />
			</div>
			<section className="relative w-full h-[100vh]">
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
		"mt-[8vh] text-black bg-[#1c4d71bf] px-10 py-16 border-l border-white w-[40vw] h-[92vh] absolute top-0 flex flex-col text-white";
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
					<Link href={link}>
						<motion.div
							key={`panel-${id}`}
							className="self-center"
							variants={descriptionVariants}
							initial="closed"
							animate="open"
							exit="closed"
						>
							<div className="content-wrapper h-full ml-10">
								<Image
									className="w-full saturate-0"
									src={imgSrc}
									width={400}
									height={200}
								></Image>
								<h2 className="mt-4 text-xl text-start">{description}</h2>
							</div>
						</motion.div>
					</Link>
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
					<h2 className="text-xl text-start mt-5">{description}</h2>
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
		link: "/concept",
		imgSrc: "/card.png",
		textMod: " -right-[22vw]",
		textAlign: "start",
		description: "СОЗДАНИЕ И АДАПТАЦИЯ АРХИТЕКТУРНЫХ КОНЦЕПЦИЙ",
	},
	{
		id: 2,
		title: "ГЕНПРОЕКТИРОВАНИЕ",
		link: "/genproject",
		imgSrc: "/genproject.png",
		textMod: " -right-[28vw]",
		textAlign: "center",
		description:
			"АРХИТЕКТУРНОЕ ПРОЕКТИРОВАНИЕ - ОТ ИДЕИ ДО ВВОДА ОБЪЕКТА В ЭСКПЛУАТАЦИЮ. ПРОХОЖДЕНИЕ ЭКСПЕРТИЗЫ, АВТОРСКИЙ НАДЗОР",
	},
	{
		id: 3,

		title: "О НАС",
		link: "/about",
		imgSrc: "/about.png",
		textMod: " -right-[34vw]",
		textAlign: "end",
		description:
			"TIK PROJECT - КОМАНДА АРХИТЕКТОРОВ, BIM-СПЕЦИАЛИСТОВ, ИНЖЕНЕРОВ И КОНСТРУКТОРОВ. <br/> МЫ ПРОЕКТИРУЕМ ЖИЛЫЕ И ОБЩЕСТВЕННЫЕ ЗДАНИЯ, ОБРАЗОВАТЕЛЬНЫЕ УЧРЕЖДЕНИЯ, ОФИСЫ И ДЕЛОВЫЕ ЦЕНТРЫ, ИНДИВИДУАЛЬНЫЕ ЖИЛЫЕ ЗДАНИЯ И ИНТЕРЬЕРЫ, А ТАКЖЕ ЗАНИМАЕМСЯ РАЗРАБОТКОЙ КОМФОРТНОЙ ГОРОДСКОЙ СРЕДЫ ДЛЯ ВАС",
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
