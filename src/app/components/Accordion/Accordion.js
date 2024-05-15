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
			<section className="relative w-full h-[100vh] font-bold">
				<Panel open={open} setOpen={setOpen} />
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
	const isOpen = open;
	const panelLg = (
		<>
			<AnimatePresence>
				<Link href="/concept">
					<motion.div
						className="mt-16 w-[40vw] h-[calc(100vh-4rem)] absolute top-0 right-[calc(-40vw+12rem)] flex flex-col text-white"
						onMouseEnter={() => setOpen(1)}
						onMouseLeave={() => setOpen(0)}
						whileHover={{
							transform: "translateX(-35vw)",
							transition: { duration: 0.3, delay: 0.125 },
						}}
					>
						<div className="card-wrapper flex h-full">
							{isOpen <= 1 && (
								<div
									style={{
										writingMode: "vertical-lr",
									}}
									className="border-r border-white lg:text-[27px] md:text-xl py-11 rotate-180 bg-[#073355]/[.75]"
								>
									<div className="w-16 px-2 align-middle flex items-center h-full">
										КОНЦЕПЦИЯ
									</div>
								</div>
							)}
							{isOpen == 1 && (
								<motion.div
									className="px-4 py-9 bg-[#073355]/[.75] w-[35vw] h-full flex"
									variants={descriptionVariants}
									initial="closed"
									animate="open"
									exit="closed"
								>
									<div className="self-end content-wrapper">
										<Image
											className="w-full saturate-0"
											src="/card.png"
											width={400}
											height={200}
										></Image>
										<h2 className="mt-5 text-base text-start leading-relaxed">
											СОЗДАНИЕ И АДАПТАЦИЯ АРХИТЕКТУРНЫХ КОНЦЕПЦИЙ
										</h2>
									</div>
								</motion.div>
							)}
						</div>
					</motion.div>
				</Link>

				<Link href="/genproject">
					<motion.div
						className="mt-16 w-[40vw] h-[calc(100vh-4rem)] absolute top-0 right-[calc(-40vw+8rem)] flex flex-col text-white"
						onMouseEnter={() => setOpen(2)}
						onMouseLeave={() => setOpen(0)}
						whileHover={{
							transform: "translateX(-35vw)",
							transition: { duration: 0.3, delay: 0.125 },
						}}
					>
						<div className="card-wrapper flex h-full">
							{isOpen <= 2 && (
								<div
									style={{
										writingMode: "vertical-lr",
									}}
									className="border-r border-white lg:text-[27px] md:text-xl rotate-180 bg-[#073355]/[.75]"
								>
									<div className="w-16 px-2 pt-24 align-middle flex justify-center items-center h-full">
										ГЕНЕРАЛЬНОЕ ПРОЕКТИРОВАНИЕ
									</div>
								</div>
							)}
							{isOpen == 2 && (
								<motion.div
									className="p-8 bg-[#073355]/[.75] flex items-center w-[35vw] h-full"
									variants={descriptionVariants}
									initial="closed"
									animate="open"
									exit="closed"
								>
									<div className="content-wrapper pb-24 space-y-14">
										<h2 className="mb-10 text-base text-start leading-relaxed">
											АРХИТЕКТУРНОЕ ПРОЕКТИРОВАНИЕ - ОТ ИДЕИ ДО ВВОДА ОБЪЕКТА В
											ЭСКПЛУАТАЦИЮ <br/> ПРОХОЖДЕНИЕ ЭКСПЕРТИЗЫ, АВТОРСКИЙ НАДЗОР
										</h2>
										<Image
											className="w-[500px] saturate-0"
											src="/genproject.png"
											width={500}
											height={300}
										></Image>
									</div>
								</motion.div>
							)}
						</div>
					</motion.div>
				</Link>

				<Link href="/about">
					<motion.div
						className="mt-16 w-[40vw] h-[calc(100vh-4rem)] absolute top-0 right-[calc(-40vw+4rem)] flex flex-col text-white"
						onMouseEnter={() => setOpen(3)}
						onMouseLeave={() => setOpen(0)}
						whileHover={{
							transform: "translateX(-35vw)",
							transition: { duration: 0.3, delay: 0.125 },
						}}
					>
						<div className="card-wrapper flex h-full">
							{isOpen <= 3 && (
								<div
									style={{
										writingMode: "vertical-lr",
									}}
									className="border-r border-white lg:text-[27px] md:text-xl py-11 rotate-180 bg-[#073355]/[.75]"
								>
									<div className="w-16 px-2 align-middle flex justify-end items-center h-full">
										О НАС
									</div>
								</div>
							)}
							{isOpen == 3 && (
								<motion.div
									className="bg-[#073355]/[.75] w-[35vw] h-full"
									variants={descriptionVariants}
									initial="closed"
									animate="open"
									exit="closed"
								>
									<div className="content-wrapper px-4 py-9 flex flex-col justify-between h-full">
										<h2 className="text-base text-start leading-relaxed">
											TIK PROJECT - КОМАНДА АРХИТЕКТОРОВ, BIM-СПЕЦИАЛИСТОВ,
											ИНЖЕНЕРОВ И КОНСТРУКТОРОВ <br /> <br/>
											МЫ ПРОЕКТИРУЕМ ЖИЛЫЕ И
											ОБЩЕСТВЕННЫЕ ЗДАНИЯ, ОБРАЗОВАТЕЛЬНЫЕ УЧРЕЖДЕНИЯ, ОФИСЫ И
											ДЕЛОВЫЕ ЦЕНТРЫ, ИНДИВИДУАЛЬНЫЕ ЖИЛЫЕ ЗДАНИЯ И ИНТЕРЬЕРЫ, А
											ТАКЖЕ ЗАНИМАЕМСЯ РАЗРАБОТКОЙ КОМФОРТНОЙ ГОРОДСКОЙ СРЕДЫ
											ДЛЯ ВАС
										</h2>
										<Image
											className="w-full saturate-0"
											src="/about.png"
											width={400}
											height={200}
										></Image>
									</div>
								</motion.div>
							)}
						</div>
					</motion.div>
				</Link>
			</AnimatePresence>
		</>
	);

	// const panelSm = (
	// 	<div className="text-white text-left text-xl card-wrapper p-4 flex-col h-full border-t">
	// 		<Link href={link} className="font-semibold underline">
	// 			{title}
	// 		</Link>

	// 		<div key={`panel-${id}`} className="mt-5">
	// 			<div className="content-wrapper h-full">
	// 				<img className="w-full saturate-0" src={imgSrc}></img>
	// 				<h2 className="text-xl text-start mt-5">{description}</h2>
	// 			</div>
	// 		</div>
	// 	</div>
	// );

	return (
		<>
			<AnimatePresence>{width && width > 768 ? panelLg : ""}</AnimatePresence>
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
			duration: 0.1,
		},
	},
	closed: {
		opacity: 0,
		x: "100%",
		transition: {
			easy: "linear",
			duration: 0.3,
		},
	},
};

const items = [
	{
		id: 1,
		title: "КОНЦЕПЦИЯ",
		link: "/concept",
		imgSrc: "/card.png",
		textMod: " -right-[23vw]",
		textAlign: "start",
		description: "СОЗДАНИЕ И АДАПТАЦИЯ АРХИТЕКТУРНЫХ КОНЦЕПЦИЙ",
	},
	{
		id: 2,
		title: "ГЕНПРОЕКТИРОВАНИЕ",
		link: "/genproject",
		imgSrc: "/genproject.png",
		textMod: " -right-[29vw]",
		textAlign: "center",
		description:
			"АРХИТЕКТУРНОЕ ПРОЕКТИРОВАНИЕ - ОТ ИДЕИ ДО ВВОДА ОБЪЕКТА В ЭСКПЛУАТАЦИЮ. ПРОХОЖДЕНИЕ ЭКСПЕРТИЗЫ, АВТОРСКИЙ НАДЗОР",
	},
	{
		id: 3,

		title: "О НАС",
		link: "/about",
		imgSrc: "/about.png",
		textMod: " -right-[35vw]",
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
