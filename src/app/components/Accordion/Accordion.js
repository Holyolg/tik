import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { useWindowSize } from "./useWindowSize";

const VerticalAccordion = () => {
	const [open, setOpen] = useState(items[0].id);

	return (
		<>
			<section className="relative h-fit lg:h-[90vh] w-full overflow-hidden flex">
				<div className="video w-screen h-screen bg-gray-300"></div>
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
}) => {
	const { width } = useWindowSize();
	const isOpen = open === id;
	let textStyle =
		"text-white bg-[#003056] sm:flex-col p-5 border-l w-[39.999779722744364vw] h-screen absolute top-0";
	return (
		<>
			<AnimatePresence>
				<motion.div
					className={textStyle + textMod}
					onMouseEnter={() => setOpen(id)}
					onMouseLeave={() => setOpen(0)}
					whileHover={{
						transform: "translateX(-30vw)",
					}}
				>
					<div className="card-wrapper flex h-full">
						<Link
							href={link}
							style={{
								writingMode: "vertical-lr",
								textAlign: "end",
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
								<div className="content-wrapper ml-10">
									<img className="w-full h-3/4 " src={imgSrc}></img>
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
			easy: "easeIn",
			duration: 0.125,
		},
	},
	closed: { opacity: 0, x: "100%" },
};

const items = [
	{
		id: 1,
		title: "О НАС",
		link: "/about",
		imgSrc:
			"https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
		textMod: " -right-[10vw]",
		// description:
		//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius deserunt quia consectetur aliquid obcaecati voluptatibus quos distinctio natus! Tenetur.",
	},
	{
		id: 2,
		title: "ГЕНПРОЕКТИРОВАНИЕ",
		link: "/general",
		imgSrc:
			"https://images.unsplash.com/photo-1541532713592-79a0317b6b77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
		textMod: " -right-[20vw]",
		// description:
		//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius deserunt quia consectetur aliquid obcaecati voluptatibus quos distinctio natus! Tenetur.",
	},
	{
		id: 3,
		title: "КОНЦЕПЦИЯ",
		link: "/concept",
		imgSrc:
			"https://images.unsplash.com/photo-1578450671530-5b6a7c9f32a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
		textMod: " -right-[30vw]",
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
