"use client";
import { useRef } from "react";
import { AnimateAbout } from "./components/PageComponents/AnimateAbout/AnimateAbout";
import { Hero } from "./components/PageComponents/Hero/Hero";
import HeroProjects from "./components/PageComponents/HeroProjects/HeroProjects";

export default function Home() {
	const scrollRef = useRef<HTMLElement | any>();

	return (
		<main>
			<Hero scroll={scrollRef} />
			<section className="container mx-auto mt-14 md:mt-32" ref={scrollRef}>
				<AnimateAbout />
			</section>
			<section className="mx-auto container mt-14 md:mt-32">
				<HeroProjects numItems={9} />
			</section>
		</main>
	);
}
