import CardDetails from "@/app/components/CardDetails/CardDetails";
import { Metadata, ResolvingMetadata } from "next";
import conceptData from "../../../../concept.json";
import genprojectData from "../../../../genproject.json";
import { IData } from "@/app/components/Cards/Cards";

type Props = {
  params: { id: string; type: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { id, type } = params;

  const cards = type == "genproject" ? genprojectData : conceptData;
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

  const cards = type == "genproject" ? genprojectData : conceptData;
  const card = cards.filter((card: IData) => card.id == id);

  return (
    <main className="min-h-[100vh]">
      {card && <CardDetails data={card[0]} />}
    </main>
  );
}
