"use client";
import Breadcrumbs from "@/app/components/Breadcrumbs/Breadcrumbs";
import { Loading } from "@/app/ui/Loading/Loading";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function CardDetails({ params }) {
	const id = params.id;
	const [card, setCard] = useState();
	const router = useRouter;

	useEffect(() => {
		const getCards = async () => {
			const API_URL =
				"https://6628119354afcabd0734c9fb.mockapi.io/TIKPRO/genproject/" + id;
			const res = await fetch(API_URL);
			if (!res.ok) {
				throw new Error("не загрузился");
			}
			return res.json();
		};
		getCards().then(res => {
			setCard(res);
		});
	}, []);

	if (!card) {
		return (
			<div className="flex justify-center mt-[30vh]">
				<Loading />
			</div>
		);
	}

	return (
		<main className="px-2">
			<div className="container mx-auto">
				<Breadcrumbs pageTitle={card.title} />
				<h2 className="text-2xl mt-10">{card.title}</h2>
				<div className="mt-5">
					<Image
						src={card.img}
						width={1536}
						height={400}
						alt="Изображение проекта"
						style={{ objectFit: "cover" }}
					/>
					<ul className="space-y-4 md:space-y-0">
						<li className="mt-5 text-xl">{card.date}</li>
						<li>ДАТА ПРОЕКТИРОВАНИЯ</li>
						<li className="md:text-right text-xl">{card.type}</li>
						<li className="md:text-right">ТИП ПРОЕКТА</li>
						<li className="ordinal text-xl">
							{card.square} M<sup>2</sup>
						</li>
						<li>ПЛОЩАДЬ</li>
						<li className="md:text-right text-xl">{card.location}</li>
						<li className="md:text-right">МЕСТОПОЛОЖЕНИЕ</li>
						<li className="text-xl">{card.status}</li>
						<li>СТАТУС</li>
					</ul>
				</div>

				<h2 className="text-2xl mt-10">ОПИСАНИЕ ПРОЕКТА</h2>
				<p className="mt-5">{card.description}</p>
				<Image
					className="mt-5"
					src={card.img2}
					width={1536}
					height={400}
					alt="Изображение проекта"
					style={{ objectFit: "cover" }}
				/>
				<p className="mt-5">{card.text}</p>
				<Image
					className="mt-5"
					src={card.img3}
					width={1536}
					height={400}
					alt="Изображение проекта"
					style={{ objectFit: "cover" }}
				/>
			</div>
		</main>
	);
}
