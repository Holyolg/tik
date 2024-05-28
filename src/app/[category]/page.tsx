'use client'
import { useRouter } from "next/router";
import { Cards } from "../components/Cards/Cards";
import { notFound, usePathname } from "next/navigation";

export default function Category({ params }: { params: string }) {
	const pathname = usePathname()
	params = pathname
	const category = pathname.slice(1)

	return (
		category === 'genproject' || category === 'concept' ?  
		(<section className="min-h-[100vh]">
		<Cards category={category} />
		</section>)
	 : notFound())
}

