"use client";
import { useParallax } from "@/app/hooks/useParallax";
import { motion, useScroll } from "framer-motion";
import { FC, useRef } from "react";
import { Video } from "../../Video/Video";

export const Hero: FC = () => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({ target: ref });
	const y = useParallax(scrollYProgress, 350);

	return (
		<section className="hero-wrapper non-clickable">
			<div className="w-full bg-[url('/blur_min.jpg')] bg-cover bg-no-repeat h-[100vh]">
				<motion.div
					className="text-white absolute top-1/2 w-full z-10"
					ref={ref}
					style={{ y }}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}>
					<div className="mx-auto container">
						<h1 className="mt-5 text-3xl sm:text-7xl uppercase font-semibold">
							Тик-Проджект
						</h1>
					</div>
				</motion.div>

				<Video src={"/hero.mp4"} />
			</div>
		</section>
	);
};
