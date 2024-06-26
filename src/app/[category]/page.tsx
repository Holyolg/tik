"use client";
import { notFound, usePathname } from "next/navigation";
import { Cards } from "../components/Cards/Cards";

export default function Category({ params }: { params: string }) {
	const pathname = usePathname();
	params = pathname;
	const category = pathname.slice(1);

	return category === "genproject" || category === "concept" ? (
		<section className="min-h-[100vh]">
			<Cards />
		</section>
	) : (
		notFound()
	);
}
