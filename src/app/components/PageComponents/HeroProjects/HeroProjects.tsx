"use client";
import Link from "next/link";
import { useState } from "react";
import Cards from "../../Cards/Cards";
import { CategoryButtons } from "../../CategoryButtons/CategoryButtons";

export default function HeroProjects({ numItems }: { numItems: number }) {
	const [categoryId, setCategoryId] = useState(0);
	const [category, setCategory] = useState("genproject");
	const [isLoading, setIsLoading] = useState(true);

	return (
		<>
			<div className="flex justify-between items-center">
				<h1 className="text-4xl lg:text-6xl font-semibold">Проекты</h1>
			</div>
			<div className="mt-12 lg:flex justify-between">
				<CategoryButtons
					category={category}
					onClickCategory={(category: string) => {
						setCategory(category);
					}}
					onLoading={(isLoading: boolean) => {
						setIsLoading(isLoading);
					}}
				/>
				<button className="hover:opacity-70 lg:flex items-center cursor-pointer hidden">
					<Link href={"/projects"}>Больше проектов</Link>
					<div className="w-5 hover__svg">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -2 36 36">
							<path d="M23.5587,16.916 C24.1447,17.4999987 24.1467,18.446 23.5647,19.034 L16.6077,26.056 C16.3147,26.352 15.9287,26.4999987 15.5427,26.4999987 C15.1607,26.4999987 14.7787,26.355 14.4867,26.065 C13.8977,25.482 13.8947,24.533 14.4777,23.944 L20.3818,17.984 L14.4408,12.062 C13.8548,11.478 13.8528,10.5279 14.4378,9.941 C15.0218,9.354 15.9738,9.353 16.5588,9.938 L23.5588,16.916 L23.5587,16.916 Z"></path>
						</svg>
					</div>
				</button>
			</div>
			<Cards
				numItems={numItems}
				category={category}
				categoryId={categoryId}
				loading={isLoading}
			/>
			<Link
				href={"projects"}
				className="w-full h-10 mt-6 flex justify-center items-center bg-black border-black border rounded-lg  hover:bg-black text-white active:opacity-85 lg:hidden"
			>
				<span>Больше проектов</span>
				<div className="w-5">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 -2 36 36"
						fill="white"
					>
						<path d="M23.5587,16.916 C24.1447,17.4999987 24.1467,18.446 23.5647,19.034 L16.6077,26.056 C16.3147,26.352 15.9287,26.4999987 15.5427,26.4999987 C15.1607,26.4999987 14.7787,26.355 14.4867,26.065 C13.8977,25.482 13.8947,24.533 14.4777,23.944 L20.3818,17.984 L14.4408,12.062 C13.8548,11.478 13.8528,10.5279 14.4378,9.941 C15.0218,9.354 15.9738,9.353 16.5588,9.938 L23.5588,16.916 L23.5587,16.916 Z"></path>
					</svg>
				</div>
			</Link>
		</>
	);
}
