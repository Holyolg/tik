'use client'
import { useEffect, useState } from "react";
import { CategoryButtons } from "../components/CategoryButtons/CategoryButtons";
import Cards from "../components/Cards/Cards";
import Categories from "../components/Categories/Categories";

export default function Projects() {
	const [categoryId, setCategoryId] = useState(0);
	const [category, setCategory] = useState("genproject");
	const [isLoading, setIsLoading] = useState(true);

	//Проверка на категорию, если ее нет
	useEffect(() => {
		if (categoryId === undefined) {
			setCategoryId(0);
		}
	}, [categoryId]);

	//Проверка на категорию в ссылке
	useEffect(() => {
		if (window.location.search) {
			const pathId = Number(window.location.search.slice(-1));
			const numPath = Number(pathId);
			if (isNaN(numPath) || numPath > 4) {
			} else {
				setCategoryId(pathId);
			}
		}
	}, []);
	

	return (
		<main className="mx-auto container mt-32">
			<div className="flex justify-between items-center">
				<h1 className="text-4xl lg:text-6xl font-semibold">Проекты</h1>
			</div>
			<div className="mt-12 xl:flex justify-between">
			<CategoryButtons category={category} onClickCategory={(category:string) => {
					setCategory(category) 
				}} onLoading={(isLoading:boolean) => {
					setIsLoading(isLoading)
				}}/>					
				<Categories
					category={categoryId}
					onClickCategory={(i: number) => {
						setCategoryId(i);
					}}
				/>
			</div>
			<Cards category={category} categoryId={categoryId} loading={isLoading}/>
		</main>
	);
}
