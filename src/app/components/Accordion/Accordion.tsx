"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Video } from "../Video/Video";
import { useWindowSize } from "./useWindowSize";

const VerticalAccordion = () => {
	const [open, setOpen] = useState(0);
	const { width, height } = useWindowSize();

	return (
		<>
			<div className="absolute z-0 top-0 left-0 w-full bg-[url('/blur_min.jpg')] bg-no-repeat">
				<Video src={"/hero.mp4"} />
			</div>
			<div className="relative w-full h-[100vh] font-bold">
				<Panel open={open} setOpen={setOpen} />
			</div>
		</>
	);
};

interface IPanel {
	open: number;
	setOpen: Function;
}

const Panel = ({ open, setOpen }: IPanel) => {
	const { width, height } = useWindowSize();
	const isOpen = open;
	const panelLg = (
		<>
			<Link href="/concept">
				<motion.div
					key="concept"
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
								className="border-r border-white xl:text-[27px] md:text-xl py-11 rotate-180 bg-[#073355]/[.75]"
							>
								<div className="w-16 px-2 align-middle flex items-center h-full">
									КОНЦЕПЦИЯ
								</div>
							</div>
						)}
						{isOpen == 1 && (
							<motion.div
								key="conceptAccordion"
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
										alt="Изображение"
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
					key="genproject"
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
								className="border-r border-white xl:text-[27px] md:text-xl rotate-180 bg-[#073355]/[.75]"
							>
								<div className="w-16 px-2 xl:pt-24 lg:pt-12 align-middle flex justify-center items-center h-full">
									ГЕНЕРАЛЬНОЕ ПРОЕКТИРОВАНИЕ
								</div>
							</div>
						)}
						{isOpen == 2 && (
							<motion.div
								key="genprojectAccordion"
								className="p-8 pr-24 bg-[#073355]/[.75] flex items-center w-[35vw] h-full"
								variants={descriptionVariants}
								initial="closed"
								animate="open"
								exit="closed"
							>
								<div className="content-wrapper space-y-[5.5rem]">
									<h2 className="text-base text-start leading-relaxed">
										АРХИТЕКТУРНОЕ ПРОЕКТИРОВАНИЕ - ОТ ИДЕИ ДО ВВОДА ОБЪЕКТА В
										ЭСКПЛУАТАЦИЮ <br /> ПРОХОЖДЕНИЕ ЭКСПЕРТИЗЫ, АВТОРСКИЙ НАДЗОР
									</h2>
									<Image
										className="w-[515px] saturate-0 pb-24"
										src="/genproject.png"
										width={500}
										height={300}
										alt="Изображение"
									></Image>
								</div>
							</motion.div>
						)}
					</div>
				</motion.div>
			</Link>

			<Link href="/about">
				<motion.div
					key="about"
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
								className="border-r border-white xl:text-[27px] md:text-xl py-11 rotate-180 bg-[#073355]/[.75]"
							>
								<div className="w-16 px-2 align-middle flex justify-end items-center h-full">
									О НАС
								</div>
							</div>
						)}
						{isOpen == 3 && (
							<motion.div
								key="aboutAccordion"
								className="bg-[#073355]/[.75] w-[35vw] h-full"
								variants={descriptionVariants}
								initial="closed"
								animate="open"
								exit="closed"
							>
								<div className="content-wrapper px-4 py-9 pr-24 flex flex-col justify-between h-full">
									<h2 className="text-base text-start leading-relaxed">
										TIK PROJECT - КОМАНДА АРХИТЕКТОРОВ, <br />
										BIM-СПЕЦИАЛИСТОВ, ИНЖЕНЕРОВ И КОНСТРУКТОРОВ <br /> <br />
										МЫ ПРОЕКТИРУЕМ ЖИЛЫЕ И ОБЩЕСТВЕННЫЕ ЗДАНИЯ, <br />{" "}
										ОБРАЗОВАТЕЛЬНЫЕ УЧРЕЖДЕНИЯ, ОФИСЫ И ДЕЛОВЫЕ <br /> ЦЕНТРЫ,
										ИНДИВИДУАЛЬНЫЕ ЖИЛЫЕ ЗДАНИЯ И ИНТЕРЬЕРЫ, <br />А ТАКЖЕ
										ЗАНИМАЕМСЯ РАЗРАБОТКОЙ КОМФОРТНОЙ <br /> ГОРОДСКОЙ СРЕДЫ ДЛЯ
										ВАС
									</h2>
									<Image
										className="w-full saturate-0"
										src="/about.png"
										width={400}
										height={200}
										alt="Изображение"
									></Image>
								</div>
							</motion.div>
						)}
					</div>
				</motion.div>
			</Link>
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
