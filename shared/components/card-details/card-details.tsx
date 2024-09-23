"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import conceptData from "@/concept.json";
import genprojectData from "@/genproject.json";
import { useWindowSize } from "@/shared/hooks/use-window-size";
import { getRandomCards } from "@/shared/lib";
import { CardDetailsHero, CardDetailsRandomCards } from ".";
import { ImgContent, ImgContentMobile } from "..";
import { CardDetailsDesc } from "./card-details-desc";
import { IData } from "../cards-list";
import { Arrow, ButtonLink } from "../ui";

interface Props {
	data: IData;
}

export const CardDetails: React.FC<Props> = ({ data }) => {
	const { width } = useWindowSize();
	const [isLoading, setIsLoading] = useState(true);
	const [cards, setCards] = useState<IData[]>([]);

	useEffect(() => {
		const cards =
			data.type == "Генпроектирование"
				? (genprojectData as unknown as IData[])
				: (conceptData as IData[]);

		const res = getRandomCards(cards);

		setCards(res);
		setIsLoading(false);
	}, []);

	return (
		<>
			<CardDetailsHero
				title={data.title}
				img={data.img}
				subtitle={data.subtitle}
			/>
			<main className="container mx-auto mt-6 md:mt-20">
				<div className="relative flex pb-8 md:pb-0 flex-col-reverse md:flex-row justify-between gap-8 border-b md:border-none border-gray-300">
					<section className="w-full md:basis-3/5 lg:basis-2/3">
						{width > 786 ? (
							<ImgContent imgContent={data.imgcontent} />
						) : (
							<ImgContentMobile imgContent={data.imgcontent} />
						)}
					</section>
					<section className="sm:basis-0 md:basis-2/5 lg:basis-1/3">
						<CardDetailsDesc data={data} />
					</section>
				</div>
				<section className="mt-10 lg:mt-32 justify-end lg:flex">
					<ButtonLink>
						<Link href={`/projects?type=${data.type}`}>
							{`Больше ${data.type == "genproject" ? "проектов" : "концепций"}`}
						</Link>
					</ButtonLink>
				</section>
				<section className="flex justify-center">
					<CardDetailsRandomCards
						cards={cards}
						isLoading={isLoading}
						width={width}
					/>
				</section>
			</main>
		</>
	);
};
