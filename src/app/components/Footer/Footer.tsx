"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className=" bg-gray-100 w-full mt-56">
			<div className=" mx-auto container py-10 md:flex md:items-center md:justify-between">
				<div className="text-gray-500 sm:text-center flex items-center space-x-5">
					<Link className="flex items-center content-center" href="/">
						<motion.img
							className="w-[110px]"
							src="/logo.svg"
							alt="Logo"
							whileTap={{ scale: 0.97 }}
						></motion.img>
					</Link>
					<span>ТИК ПРОДЖЕКТ 2024</span>
				</div>
				<ul className="flex flex-wrap items-center mt-3 space-x-2 sm:space-x-5 text-gray-500 sm:mt-0">
					<li>
						<Link
							href="/"
							className="cursor-pointer hover:opacity-75 me-4 md:me-6"
						>
							Главная
						</Link>
					</li>
					<li>
						<Link
							href="/projects"
							className="cursor-pointer hover:opacity-75 me-4 md:me-6"
						>
							Проекты
						</Link>
					</li>
					<li>
						<Link
							href="/about"
							className="cursor-pointer hover:opacity-75 me-4 md:me-6"
						>
							О нас
						</Link>
					</li>
					<li>
						<Link href="#contacts" className="cursor-pointer hover:opacity-75">
							Контакты
						</Link>
					</li>
				</ul>
			</div>
		</footer>
	);
}
