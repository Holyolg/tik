import CardDetails from "@/app/components/CardDetails/CardDetails";
import getCards from "@/app/services/GetCards/GetCards";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { id: string; type: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { id, type } = params;

  const card = await fetch(
    `https://668e955fbf9912d4c92ee8b3.mockapi.io/${type}/${id}`
  ).then((res) => res.json());
  return {
    title: card.title,
  };
}
export default async function CardDetailsPage({
  params,
}: {
  params: { id: string; type: string };
}) {
  const { id, type } = params;
  const API_URL = `https://668e955fbf9912d4c92ee8b3.mockapi.io/${type}/${id}`;
  const card = await getCards(API_URL);

  return (
    <main className="min-h-[100vh]">{card && <CardDetails data={card} />}</main>
  );
}
