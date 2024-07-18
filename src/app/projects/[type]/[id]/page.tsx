import CardDetails from "@/app/components/CardDetails/CardDetails";
import { notFound } from "next/navigation";
import getCards from "@/app/services/GetCards/GetCards";

export default async function CardDetailsPage({
  params,
}: {
  params: { id: string; type: string };
}) {
  const id = params.id;
  const type = params.type;
  const API_URL = `https://668e955fbf9912d4c92ee8b3.mockapi.io/${type}/${id}`;
  const card = await getCards(API_URL);

  return (
    <main className="min-h-[100vh]">{card && <CardDetails data={card} />}</main>
  );
}
