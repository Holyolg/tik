"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import Cards from "../components/Cards/Cards";
import Categories from "../components/Categories/Categories";
import { TypeButtons } from "../components/TypeButtons/TypeButtons";
import { cardStore } from "../store/store";

interface IParams {
	params: string | null;
}

export default function Projects() {
	const loading = cardStore(state => state.loading);
	const updateLoading = cardStore(state => state.updateLoading);
	console.log(loading);

	const searchParams = useSearchParams();
	const paramsCategory = searchParams.get("category");
	const paramsType = searchParams.get("type");

	const router = useRouter();
	const pathname = usePathname();

	const [type, setType] = useState(paramsType ?? "genproject");
	const [category, setCategory] = useState(paramsCategory ?? "Все");

	const createQueryString = useCallback(
		(name: string, value: string) => {
			const params = new URLSearchParams(searchParams.toString());
			params.set(name, value);

			return params.toString();
		},
		[searchParams]
	);

	useEffect(() => {
		if (paramsType !== "genproject" && paramsType !== "concept") {
			setType("genproject");
		}
	}, []);
	return (
		<main className="mx-auto container mt-32">
			<div className="flex justify-between items-center">
				<h1 className="text-4xl lg:text-6xl font-semibold">Проекты</h1>
			</div>
			<div className="mt-12 xl:flex justify-between">
				<TypeButtons
					type={type}
					onClickType={(type: string) => {
						setType(type);
						setCategory("Все");
						updateLoading(true);
					}}
				/>
				<Categories
					type={type}
					category={category}
					onClickCategory={(categoryName: string) => {
						setCategory(categoryName);
					}}
				/>
			</div>
			<Cards type={type} category={category} />
		</main>
	);
}
