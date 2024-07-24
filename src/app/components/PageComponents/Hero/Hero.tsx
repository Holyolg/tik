import { NawArrow } from "@/app/ui/NavArrow/NawArrow";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Video } from "../../Video/Video";

function useParallax(value: MotionValue<number>, distance: number) {
	return useTransform(value, [0, 1], [-distance, distance]);
}

export const Hero = ({ scroll }: { scroll: HTMLElement | any }) => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({ target: ref });
	const y = useParallax(scrollYProgress, 350);

	return (
		<main className="hero-wrapper non-clickable">
			<div className="w-full bg-[url('/blur_min.jpg')] bg-cover bg-no-repeat h-[100vh]">
				<motion.div
					className="text-white absolute top-1/2 w-full z-10"
					ref={ref}
					style={{ y }}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
				>
					<div className="mx-auto container">
						<h1 className="mt-5 text-3xl sm:text-7xl uppercase font-semibold">
							Тик-Проджект
						</h1>
					</div>
				</motion.div>

				<Video src={"/hero.mp4"} />
				<div className="absolute bottom-5 w-full">
					<NawArrow scroll={scroll} />
				</div>
			</div>
		</main>
	);
};
