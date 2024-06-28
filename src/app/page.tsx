"use client";
import { useRef } from "react";
import MainCards from "./components/MainCards/MainCards";
import { AnimateAbout } from "./components/PageComponents/AnimateAbout/AnimateAbout";
import { Contacts } from "./components/PageComponents/Contacts/Contacts";
import { Hero } from "./components/PageComponents/Hero/Hero";

export default function Home() {
	const scrollRef = useRef<HTMLElement | any>();

	return (
		<>
			<Hero scroll={scrollRef} />
			<section className="mx-auto container mt-12 md:mt-32" ref={scrollRef}>
				<MainCards />
			</section>
			<section className="container mx-auto mt-12 md:mt-32">
				<AnimateAbout />
			</section>
			<section className="mx-auto container mt-12 md:mt-32" id="contacts">
				<Contacts />
			</section>
		</>
	);
}
