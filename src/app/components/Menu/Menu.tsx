"use client";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useWindowSize } from "../Accordion/useWindowSize";

import { useState } from "react";
import "./Menu.css";

const Menu = () => {
	// const categories = [
	// 	"ЖИЛЬЕ",
	// 	"СОЦИАЛЬНЫЕ",
	// 	"КОНЦЕПТУАЛЬНЫЕ",
	// 	"БЛАГОУСТРОЙСТВО",
	// ];
	// const [filteredCategories, setFilteredCategories] = useState([]);
	// function chooseCategory(category) {
	// 	setFilteredCategories(category);
	// 	console.log(filteredCategories);
	// }
	const pathname = usePathname();
	const { width, height } = useWindowSize();
	const [opened, setOpened] = useState(false);

	return (
		<header className="menu fixed z-10 w-full top-5 ">
			<div className="mx-auto container relative bg-white rounded-xl h-14 shadow-lg">
				<div className="menu-logo w-full h-14 flex justify-between   px-8">
					<Link className="flex items-center content-center" href="/">
						<motion.img
							className="w-[110px]"
							src="/logo.svg"
							alt="Logo"
							whileTap={{ scale: 0.97 }}
						></motion.img>
					</Link>
					<div
						onClick={() => setOpened(!opened)}
						className={
							opened
								? "tham tham-e-squeeze tham-w-6 tham-active h-full "
								: "tham tham-e-squeeze tham-w-6 h-full "
						}
					>
						<div className="tham-box">
							<div className="tham-inner" />
						</div>
					</div>
					<AnimatePresence>
						{opened ? (
							<motion.nav className="absolute right-24">
								<div className="flex items-center space-x-9 h-14">
									<motion.a
										initial={{ x: 45, opacity: 0 }}
										animate={{ x: 0, opacity: 1 }}
										exit={{ x: 45, opacity: 0 }}
										whileHover={{
											opacity: 0.7,
										}}
										className="
										cursor-pointer"
									>
										Проекты
									</motion.a>
									<motion.a
										initial={{ x: 35, opacity: 0 }}
										animate={{ x: 0, opacity: 1 }}
										exit={{ x: 35, opacity: 0 }}
										whileHover={{
											opacity: 0.7,
										}}
										className="
										cursor-pointer"
									>
										О нас
									</motion.a>
									<motion.a
										initial={{ x: 25, opacity: 0 }}
										animate={{ x: 0, opacity: 1 }}
										exit={{ x: 25, opacity: 0 }}
										whileHover={{
											opacity: 0.7,
										}}
										className="cursor-pointer"
									>
										Контакты
									</motion.a>
								</div>
							</motion.nav>
						) : (
							""
						)}
					</AnimatePresence>
				</div>
			</div>
		</header>
	);
};

const open = {
	type: "spring",
	stiffness: 700,
	damping: 30,
};

export default Menu;
