"use client";
import { useRef } from "react";
import { AnimateAbout } from "./components/PageComponents/AnimateAbout/AnimateAbout";
import { Contacts } from "./components/PageComponents/Contacts/Contacts";
import { Hero } from "./components/PageComponents/Hero/Hero";
import HeroProjects from "./components/PageComponents/HeroProjects/HeroProjects";
import { GetYMap } from "./services/GetYMap/GetYMap";

export default function Home() {
	const scrollRef = useRef<HTMLElement | any>();

	return (
		<main>
			<Hero scroll={scrollRef} />
			<section className="mx-auto container mt-14 md:mt-32" ref={scrollRef}>
				<HeroProjects numItems={9} />
			</section>
			<section className="container mx-auto mt-14 md:mt-32">
				<AnimateAbout />
			</section>
			<section className="mx-auto container mt-14 md:mt-32" id="contacts">
				<Contacts />
			</section>
		</main>
	);
}
