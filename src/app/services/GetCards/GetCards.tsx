import { notFound } from "next/navigation";

const getCards = async (API_URL: string) => {
	const res = await fetch(API_URL);
	if (!res.ok) {
		notFound();
	}
	return res.json();
};
export default getCards;
