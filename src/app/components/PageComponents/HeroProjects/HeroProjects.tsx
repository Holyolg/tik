"use client";
import { cardStore } from "@/app/store/store";
import { Arrow } from "@/app/ui/Arrow/Arrow";
import { useInView } from "framer-motion";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import Cards from "../../Cards/Cards";
import { TypeButtons } from "../../TypeButtons/TypeButtons";

export default function HeroProjects({ numItems }: { numItems: number }) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	const searchParams = useSearchParams();
	const paramsType = searchParams.get("type") ?? "genproject";

	const [category, setCategory] = useState("Все");
	const [type, setType] = useState(paramsType);

	const updateLoading = cardStore(state => state.updateLoading);

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
		<section
			ref={ref}
			style={{
				opacity: isInView ? 1 : 0,
				transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
			}}
		>
			<div className="flex justify-between items-center">
				<h2 className="text-4xl lg:text-6xl font-semibold">Проекты</h2>
			</div>
			<div className="mt-6 lg:flex justify-between">
				<TypeButtons
					type={type}
					onClickType={(type: string) => {
						setType(type);
						updateLoading(true);
					}}
				/>
				<button className="hover:opacity-70 lg:flex items-center cursor-pointer hidden space-x-2">
					<Link
						href={`/projects?${createQueryString(
							"type",
							type == "genproject" ? "genproject" : "concept"
						)}`}
					>{`Больше ${type == "genproject" ? "проектов" : "концепций"}`}</Link>
					<Arrow />
				</button>
			</div>
			<Cards numItems={numItems} type={type} category={category} />

			<button className="w-full h-10 mt-10 flex justify-center items-center bg-black border-black border rounded-lg  hover:bg-black text-white active:opacity-85 lg:hidden space-x-2">
				<Link
					href={`/projects?${type == "genproject" ? "genproject" : "concept"}`}
				>
					{`Больше ${type == "genproject" ? "проектов" : "концепций"}`}
				</Link>
				<Arrow />
			</button>
			<div id="about"></div>
		</section>
	);
}
