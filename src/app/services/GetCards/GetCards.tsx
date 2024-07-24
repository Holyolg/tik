import { notFound } from "next/navigation";

const getCards = async (API_URL: string) => {
	const res = await fetch(API_URL, { next: { revalidate: 3600 } });
	if (!res.ok) {
		notFound();
	}
	return res.json();
};

export default getCards;
