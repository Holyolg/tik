import Cards from "../components/Cards/Cards";

export default function Projects() {
	return (
		<section className="mx-auto container mt-32">
			<div className="flex justify-between items-center">
				<h2 className="text-4xl lg:text-6xl font-semibold">Проекты</h2>
			</div>
			<Cards />
		</section>
	);
}
