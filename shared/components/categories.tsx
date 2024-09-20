"use client";
import { cardStore } from "@/shared/store/store";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

type Props = {
	type: string;
	category: string;
};

export const Categories: React.FC<Props> = ({ type, category }) => {
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

	const updateCategory = cardStore((state) => state.updateCategory);

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
			{categoryValue.map((categoryName) => (
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
					}`}>
					{categoryName}
				</span>
			))}
		</nav>
	);
};
