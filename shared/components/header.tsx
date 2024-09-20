"use client";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { useWindowSize } from "../hooks/use-window-size";

export const Header = () => {
	const [opened, setOpened] = useState(false);
	const { width } = useWindowSize();

	const menu = (
		<nav className="absolute right-6">
			<div className="flex items-center space-x-9 h-14">
				<motion.div
					whileTap={{ scale: 0.97 }}
					initial={{ x: 45, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					exit={{ x: 45, opacity: 0 }}
					whileHover={{
						opacity: 0.5,
					}}
					className="
		cursor-pointer">
					<Link href="/projects">Проекты</Link>
				</motion.div>
				<motion.div
					whileTap={{ scale: 0.97 }}
					initial={{ x: 35, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					exit={{ x: 35, opacity: 0 }}
					whileHover={{
						opacity: 0.5,
					}}
					className="
		cursor-pointer">
					<Link href="/#about">О компании</Link>
				</motion.div>
				<motion.div
					whileTap={{ scale: 0.97 }}
					initial={{ x: 45, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					exit={{ x: 45, opacity: 0 }}
					whileHover={{
						opacity: 0.5,
					}}
					className="
		cursor-pointer">
					<Link href="/#services">Услуги</Link>
				</motion.div>
				<motion.div
					whileTap={{ scale: 0.97 }}
					initial={{ x: 25, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					exit={{ x: 25, opacity: 0 }}
					whileHover={{
						opacity: 0.5,
					}}
					className="cursor-pointer">
					<Link href="/#contacts">Контакты</Link>
				</motion.div>
			</div>
		</nav>
	);

	const menuMobile = (
		<motion.nav
			initial={{ y: -45, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			exit={{ y: -45, opacity: 0 }}
			className="absolute top-20 p-8 left-0 bg-white text-xl w-full rounded-lg shadow-lg">
			<div className="flex flex-col items-end space-y-6">
				<motion.div
					whileTap={{ scale: 0.97 }}
					initial={{ y: -45, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					exit={{ y: -45, opacity: 0 }}
					whileHover={{
						opacity: 0.5,
					}}
					className="
		cursor-pointer">
					<Link onClick={() => setOpened(!open)} href="/projects">
						Проекты
					</Link>
				</motion.div>
				<motion.div
					whileTap={{ scale: 0.97 }}
					initial={{ y: -35, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					exit={{ y: -35, opacity: 0 }}
					whileHover={{
						opacity: 0.5,
					}}
					className="
		cursor-pointer">
					<Link onClick={() => setOpened(!open)} href="/#about">
						О компании
					</Link>
				</motion.div>
				<motion.div
					whileTap={{ scale: 0.97 }}
					initial={{ y: -45, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					exit={{ y: -45, opacity: 0 }}
					whileHover={{
						opacity: 0.5,
					}}
					className="
		cursor-pointer">
					<Link onClick={() => setOpened(!open)} href="/#services">
						Услуги
					</Link>
				</motion.div>
				<motion.div
					whileTap={{ scale: 0.97 }}
					initial={{ y: -25, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					exit={{ y: -25, opacity: 0 }}
					whileHover={{
						opacity: 0.5,
					}}
					className="cursor-pointer">
					<Link onClick={() => setOpened(!open)} href="/#contacts">
						Контакты
					</Link>
				</motion.div>
			</div>
		</motion.nav>
	);

	return (
		<motion.header
			className="menu fixed z-50 w-full top-5"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ delay: 0.75 }}>
			<div className="container mx-auto">
				<div className="px-5 sm:px-6 relative bg-white rounded-xl h-14 shadow-lg">
					<div className="menu-logo w-full h-14 flex justify-between">
						<Link className="flex items-center content-center" href="/">
							<motion.img
								className="w-[110px]"
								src="/logo.svg"
								alt="Logo"
								whileTap={{ scale: 0.97 }}></motion.img>
						</Link>
						{width > 640 ? (
							""
						) : (
							<div
								onClick={() => setOpened(!opened)}
								className={
									opened
										? "tham tham-e-squeeze tham-w-6 tham-active h-full "
										: "tham tham-e-squeeze tham-w-6 h-full "
								}>
								<div className="tham-box">
									<div className="tham-inner" />
								</div>
							</div>
						)}

						{width > 640 ? menu : ""}
						<AnimatePresence>
							{opened && width < 640 ? menuMobile : ""}
						</AnimatePresence>
					</div>
				</div>
			</div>
		</motion.header>
	);
};
