"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

function Categories({
	category,
	onClickCategory,
	type,
}: {
	category: string | null;
	onClickCategory: Function;
	type: string | null;
}) {
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
						onClickCategory(categoryName);
						router.push(
							pathname + "?" + createQueryString("category", categoryName),
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
