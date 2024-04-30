import Breadcrumbs from "@/app/components/Breadcrumbs/Breadcrumbs";
import { Loading } from "@/app/ui/Loading/Loading";
import CardDetails from "../../../components/CardDetails/CardDetails";

export const getStaticPaths = async () => {
	const res = await fetch(
		"https://6628119354afcabd0734c9fb.mockapi.io/TIKPRO/projects"
	);

	const data = await res.json();
	const paths = data.map(card => {
		return {
			params: { id: card.id },
		};
	});
	return {
		paths,
		fallback: false,
	};
};

export const Card = async context => {
	const id = context.params.id;
	const res = await fetch(
		"https://6628119354afcabd0734c9fb.mockapi.io/TIKPRO/projects/" + id
	);
	const data = await res.json();
	if (!data) {
		return (
			<div className="flex justify-center mt-[30vh]">
				<Loading />
			</div>
		);
	}
	return (
		<main className="px-2">
			<div className="container mx-auto">
				<Breadcrumbs />
				<CardDetails data={data} />;
			</div>
		</main>
	);
};

export default Card;
