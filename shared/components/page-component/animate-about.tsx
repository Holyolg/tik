"use client";
import { Arrow } from "@/shared/components/ui/arrow";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { FC, useRef } from "react";
import about from "@/public/about.jpg";
import { shimmer, toBase64 } from "@/shared/lib";
import { ButtonLink } from "../ui";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export const AnimateAbout: FC = () => {
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
				<ButtonLink>
					<Link href={"/#about"}>Подробнее о нас</Link>
				</ButtonLink>
			</div>
			<div className="flex flex-col xl:flex-row justify-between w-full gap-10">
				<div className="xl:w-[41%]">
					<h2 className="text-4xl lg:text-6xl" ref={animateRef}>
						<div className="animate_text">инженеры</div>
						<div className="animate_text">архитекторы</div>
						<div className="animate_text">конструкторы</div>
						<div className="animate_text">ТИМ-специалисты</div>
					</h2>

					<div className="rounded-lg mt-6 text-gray-500 leading-relaxed">
						Проектируем жилые и многофункциональные комплексы, офисные здания и
						торговые центры, социальные объекты, а также занимаемся разработкой
						архитектурных концепций, интерьеров и комфортной городской среды.
					</div>
				</div>
				<div className="relative mt-6 lg:mt-0 xl:max-w-3xl w-full h-44 md:h-80">
					<Image
						className="rounded-lg grayscale object-cover"
						src={about}
						fill
						alt="наше фото"
						placeholder={`data:image/svg+xml;base64,${toBase64(
							shimmer(1024, 550)
						)}`}></Image>
				</div>
			</div>
		</>
	);
};
