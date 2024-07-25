"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import Cards from "../components/Cards/Cards";
import Categories from "../components/Categories/Categories";
import { TypeButtons } from "../components/TypeButtons/TypeButtons";

interface IParams {
	params: string | null;
}

export default function Projects() {
	const searchParams = useSearchParams();
	const router = useRouter();
	const pathname = usePathname();
	const paramsCategory = searchParams.get("category");
	const paramsType = searchParams.get("type");

	const [type, setType] = useState(paramsType ?? "genproject");
	const [category, setCategory] = useState(paramsCategory ?? "Все");

	const [isLoading, setIsLoading] = useState(true);

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
					}}
					onLoading={(isLoading: boolean) => {
						setIsLoading(isLoading);
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
			<Cards type={type} category={category} loading={isLoading} />
		</main>
	);
}
