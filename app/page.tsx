import { AnimateAbout, CardsListWithCategory, Hero } from "@/shared/components";
import About from "./about/page";

export default function Home() {
	return (
		<main>
			<Hero />
			<section className="container mx-auto mt-14 md:mt-32">
				<AnimateAbout />
			</section>
			<section className="mx-auto container mt-14 md:mt-32">
				<CardsListWithCategory numItems={9} />
			</section>
			<About />
		</main>
	);
}
