import { NawArrow } from "@/app/ui/NavArrow/NawArrow";
import { Video } from "../../Video/Video";

export const Hero = ({ scroll }: { scroll: HTMLElement | any }) => {
	return (
		<main className="hero-wrapper">
			<div className="w-full bg-[url('/blur_min.jpg')] bg-cover bg-no-repeat h-[100vh]">
				<div className="text-white absolute top-1/2 w-full z-10 ">
					<div className="mx-auto container">
						<h2 className="text-xl">Проектная организация</h2>
						<h1 className="mt-5 text-5xl sm:text-7xl uppercase font-semibold">
							Тик-Проджект
						</h1>
					</div>
				</div>
				<Video src={"/hero.mp4"} />
				<div className="absolute bottom-5 w-full">
					<NawArrow scroll={scroll} />
				</div>
			</div>
		</main>
	);
};
