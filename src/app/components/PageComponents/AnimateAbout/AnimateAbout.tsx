import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import about from "../../../../../public/about.jpg";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export const AnimateAbout = () => {
	const animateRef = useRef<HTMLElement | any>();

	//анимация
	useGSAP(
		() => {
			const texts = gsap.utils.toArray(".animate_text");
			texts.forEach((text: any) => {
				gsap.from(text, {
					opacity: 0,
					x: -200,
					scrollTrigger: {
						trigger: text,
						start: "bottom 90%",
						end: "top 40%",

						scrub: true,
						//markers: true,
					},
				});
			});
		},
		{ scope: animateRef }
	);

	return (
		<>
			<div className="flex justify-between items-center">
				<h2 className="text-4xl lg:text-6xl font-semibold">Мы</h2>
				<button className="hover:opacity-70 flex items-center cursor-pointer">
					<Link href={"/about"}>Подробнее о нас</Link>
					<div className="w-5">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -2 36 36">
							<path d="M23.5587,16.916 C24.1447,17.4999987 24.1467,18.446 23.5647,19.034 L16.6077,26.056 C16.3147,26.352 15.9287,26.4999987 15.5427,26.4999987 C15.1607,26.4999987 14.7787,26.355 14.4867,26.065 C13.8977,25.482 13.8947,24.533 14.4777,23.944 L20.3818,17.984 L14.4408,12.062 C13.8548,11.478 13.8528,10.5279 14.4378,9.941 C15.0218,9.354 15.9738,9.353 16.5588,9.938 L23.5588,16.916 L23.5587,16.916 Z"></path>
						</svg>
					</div>
				</button>
			</div>
			<div className="flex flex-col lg:flex-row justify-between w-full">
				<div className="lg:w-2/5">
					<h2 className="text-4xl lg:text-6xl" ref={animateRef}>
						<div className="animate_text">инженеры</div>
						<div className="animate_text">архитекторы</div>
						<div className="animate_text">конструкторы</div>
						<div className="animate_text">BIM-специалисты</div>
					</h2>

					<div className="rounded-lg mt-6 text-gray-500 leading-relaxed">
						Проектируем жилые и общественные здания, образовательные учреждения,
						офисы и деловые центры, индивидуальные жилые здания и интерьеры, а
						также занимаемся разработкой комфортной городской среды.
					</div>
				</div>
				<div className="relative mt-6 lg:mt-0">
					<Image
						className="rounded-lg grayscale"
						src={about}
						width={650}
						alt="наше фото"
					></Image>
				</div>
			</div>
		</>
	);
};
