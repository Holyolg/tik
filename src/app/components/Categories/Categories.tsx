"use client";
import { cardStore } from "@/app/store/store";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

function Categories({ type, category }: { type: string; category: string }) {
	const categoriesProject: string[] = [
		"Все",
		"Жилые",
		"Общественные",
		"Интерьеры",
		"Благоустройство",
	];

	const categoriesConcept: string[] = [
		"Все",
		"Здания",
		"Интерьеры",
		"Благоустройство",
	];

	const updateCategory = cardStore(state => state.updateCategory);

	const categoryValue =
		type == "genproject" ? categoriesProject : categoriesConcept;

	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const createQueryString = useCallback(
		(name: string, value: string) => {
			const params = new URLSearchParams(searchParams.toString());
			params.set(name, value);

			return params.toString();
		},
		[searchParams]
	);

	return (
		<nav className="flex space-x-10 items-center overflow-x-auto snap-x snap-mandatory mt-6 xl:mt-0">
			{categoryValue.map(categoryName => (
				<span
					onClick={() => {
						updateCategory(categoryName);
						router.push(
							`${pathname}?
								${createQueryString("category", categoryName)}`,
							{
								scroll: false,
							}
						);
					}}
					key={categoryName}
					className={`snap-always snap-center hover:opacity-50 cursor-pointer ${
						category == categoryName ? "font-semibold" : " "
					}`}
				>
					{categoryName}
				</span>
			))}
		</nav>
	);
}

export default Categories;
