import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

function Categories({ category, onClickCategory }) {
	const [open, setOpen] = useState(false);

	const categories = [
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
		  transition: { type: "spring", stiffness: 300, damping: 24 }
		},
		closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
	  };

	return (

			<motion.header className="menu fixed top-0 z-10 w-full text-[#003056] font-bold text-xl">
				<div className="menu-logo w-full flex justify-between py-2 px-8 h-16">
					<Link className="flex items-center" href="/">
						<motion.img className="w-[110px]" src="/logo.svg" alt="Logo" whileTap={{ scale: 0.97 }}></motion.img>
					</Link>

					<div className="flex justify-center">
						<div className="grid grid-cols-3 gap-20 relative justify-items-center xl:w-[1024px] max-w-5xl"> 
						<div
							onClick={() => setOpen(!open)}
							className="cursor-pointer flex items-center hover:underline"
							href="/"
						>
							<motion.div className="absolute left-0 "

							 initial={false}
							 animate={open ? "open" : "closed"}>
							<motion.div className='w-2 h-2 border-[#003056] border-r-2 border-b-2' 

							variants={{
								open: {
									transition: {
										ease: "easeOut",
										duration: 0.2,
									},
									rotate: 225},
								closed: {
									transition: {
										ease: "easeOut",
										duration: 0.2,
									},
									rotate: 45}
							}}>
							</motion.div>

						
								<div className="categories font-bold absolute top-5 left-0">
									<motion.ul className="py-4"
									variants={{
										open: {
										  
										  transition: {
											ease: "easeOut",
											bounce: 0,
											duration: 0.2,
											delayChildren: 0.3,
											staggerChildren: 0.05
										  }
										},
										closed: {
										  transition: {
											ease: "easeOut",
											bounce: 0,
											duration: 0.3
										  }
										}
									  }}>
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
						<Link className="flex items-center hover:underline" href="/about">
							<motion.p whileTap={{ scale: 0.97 }}>О НАС</motion.p>
						</Link>
						<Link
							className="flex items-center hover:underline"
							href="/contacts"
						>
							<motion.p whileTap={{ scale: 0.97 }}>КОНТАКТЫ</motion.p>
						</Link>
						</div>
					</div>
					<Link className="flex items-center hover:underline w-[110px]" href="/">
					<motion.p whileTap={{ scale: 0.97 }}>EN</motion.p>

					</Link>
				</div>
			</motion.header>

	);
}

const open = {
	type: "spring",
	stiffness: 700,
	damping: 30
  };

export default Categories;
