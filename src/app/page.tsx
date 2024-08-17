import About from "./about/page";
import { AnimateAbout } from "./components/PageComponents/AnimateAbout/AnimateAbout";
import { Hero } from "./components/PageComponents/Hero/Hero";
import { HeroProjects } from "./components/PageComponents/HeroProjects/HeroProjects";

export default function Home() {
  return (
    <main>
      <Hero />
      <section className="container mx-auto mt-14 md:mt-32">
        <AnimateAbout />
      </section>
      <section className="mx-auto container mt-14 md:mt-32">
        <HeroProjects numItems={9} />
      </section>
      <About />
    </main>
  );
}
