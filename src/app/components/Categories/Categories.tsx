import { motion } from "framer-motion";
import { useState } from "react";

interface ICategories {
	category: number;
	onClickCategory: Function;
}

function Categories({ category, onClickCategory }: ICategories) {
	const [open, setOpen] = useState(false);

	const categories: string[] = [
		// "ВСЕ",
		"ЖИЛЫЕ",
		"ОБЩЕСТВЕННЫЕ",
		"ИНТЕРЬЕРЫ",
		"БЛАГОУСТРОЙСТВО",
	];

	const itemVariants = {
		open: {
			opacity: 1,
			y: 0,
			transition: { type: "spring", stiffness: 300, damping: 24 },
		},
		closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
	};

	return (
		<>
			<motion.header className="w-full font-bold text-xl">
				<div className="flex justify-center">
					<div className="grid grid-cols-3 gap-20 relative justify-items-center xl:w-[1024px] max-w-5xl">
						<div className="cursor-pointer flex items-center hover:underline">
							<motion.div
								className="absolute left-0 "
								initial={false}
								animate={open ? "open" : "closed"}
							>
								<motion.div
									className="w-2 h-2 border-[#003056] border-r-2 border-b-2"
									variants={{
										open: {
											transition: {
												ease: "easeOut",
												duration: 0.2,
											},
											rotate: 225,
										},
										closed: {
											transition: {
												ease: "easeOut",
												duration: 0.2,
											},
											rotate: 45,
										},
									}}
								></motion.div>

								<div className="categories font-bold absolute top-5 left-0">
									<motion.ul
										className="py-4"
										variants={{
											open: {
												transition: {
													ease: "easeOut",
													bounce: 0,
													duration: 0.2,
													delayChildren: 0.3,
													staggerChildren: 0.05,
												},
											},
											closed: {
												transition: {
													ease: "easeOut",
													bounce: 0,
													duration: 0.3,
												},
											},
										}}
									>
										{categories.map((categoryName, i) => (
											<motion.li
												variants={itemVariants}
												key={i}
												onClick={() => onClickCategory(i)}
												className={`hover:underline decoration-white-100 text-sm min-w-[160px] ${
													category == i ? "underline" : " "
												}`}
											>
												{categoryName}
											</motion.li>
										))}
									</motion.ul>
								</div>
							</motion.div>
							<motion.p whileTap={{ scale: 0.97 }}>ПРОЕКТ</motion.p>
						</div>
					</div>
				</div>
			</motion.header>
		</>
	);
}

const open = {
	type: "spring",
	stiffness: 700,
	damping: 30,
};

export default Categories;
