import { Metadata, ResolvingMetadata } from "next";
import conceptData from "@/concept.json";
import genprojectData from "@/genproject.json";
import { IData } from "@/shared/components/cards-list";
import { CardDetails } from "@/shared/components";

type Props = {
	params: { id: string; type: string };
	searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
	{ params }: Props,
	parent: ResolvingMetadata
): Promise<Metadata> {
	const { id, type } = params;

	const cards =
		type == "genproject"
			? (genprojectData as unknown as IData[])
			: (conceptData as IData[]);
	const card = cards.filter((card: IData) => card.id == id);
	return {
		title: card[0].title,
	};
}
export default async function CardDetailsPage({
	params,
}: {
	params: Props["params"];
}) {
	const { id, type } = params;

	const cards =
		type == "genproject"
			? (genprojectData as unknown as IData[])
			: (conceptData as IData[]);
	const card = cards.filter((card: IData) => card.id == id);

	return (
		<main className="min-h-[100vh]">
			{card && <CardDetails data={card[0]} />}
		</main>
	);
}
