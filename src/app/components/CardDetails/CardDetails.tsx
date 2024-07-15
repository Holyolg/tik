import { useWindowSize } from "@/app/hooks/useWindowSize/useWindowSize";
import getCards from "@/app/services/GetCards/GetCards";
import { Skeleton } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Accordion } from "../../ui/Accordion/Accordion";
import shimmer from "../../ui/Shimer/Shimer";
import Card from "../Card/Card";
import ImgContentXS from "../ImgContentXS/ImgContentXS";

// Import Swiper styles
import toBase64 from "@/app/services/toBase64/toBase64";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/zoom";
import ImgContentXL from "../ImgContentXL/ImgContentXL";

interface ICardDetails {
	data: {
		id: string;
		img: string;
		link: string;
		title: string;
		category: string | number;
		subtitle: string;
		customer: string;
		date: string;
		type: string;
		square: string;
		location: string;
		status: string;
		description: string;
		text: string;
		stage: string; 
		partners: string;
		imgcontent: [];
	};
}

const CardDetails = ({ data }: ICardDetails) => {
	const { width } = useWindowSize();
	const [isLoading, setIsLoading] = useState(true);
	const [cards, setCards] = useState([]);

	const skeletons = [...new Array(2)].map((_, index) => (
		<Skeleton
			sx={{ borderRadius: "0.5rem" }}
			variant="rounded"
			height={width > 1920 ? 360 : 300}
			key={index}
		></Skeleton>
	));

	useEffect(() => {
		const API_URL = `https://668e955fbf9912d4c92ee8b3.mockapi.io/${data.type == 'Генпроектирование' ? 'genproject' : 'concept'}?page=${Math.random()*5}&limit=3&sortBy=rating&order=asc`;
		getCards(API_URL).then(res => {
			setCards(res);
			setIsLoading(false);
		});
	}, [isLoading, data.type]);

	const filteredCards = cards.filter((card: any) => card.id !== data.id);
	filteredCards.length === 2 ? filteredCards : delete filteredCards[2];

	return (
		<>
			<div className="min-h-[100vh] relative">
				<div className="absolute z-10 w-full top-1/2">
					<h1 className="container mx-auto text-4xl md:text-6xl font-semibold text-white">
						{data.title}
					</h1>
				</div>
				<Image
					src={data.img}
					alt="Изображение проекта"
					style={{ objectFit: "cover", filter: "brightness(65%)" }}
					sizes="2000px"
					fill
					placeholder={`data:image/svg+xml;base64,${toBase64(
						shimmer(1920, 1080)
					)}`}
					priority={true}
				/>
			</div>
			<main className="container mx-auto mt-6 md:mt-20">
				<div className="relative flex pb-8 md:pb-0 flex-col-reverse md:flex-row justify-between gap-8 border-b md:border-none border-gray-300">
					<section className="w-full md:basis-3/5 lg:basis-2/3">
						{width > 786 ? (
							<ImgContentXL imgContent={data.imgcontent} />
						) : (
							<ImgContentXS imgContent={data.imgcontent} />
						)}
					</section>
					<section className="sm:basis-0 md:basis-2/5 lg:basis-1/3">
						<div className="sticky top-28">
							<ul className="space-y-4">
								{data.category && (
									<li>
										<span className="font-semibold">Тип</span>
										<p className="text-sm">{data.category !== 'Интерьеры' && data.category !== 'Благоустройство' && data.category !== 'Здания' ? `${data.category} здания` : data.category}</p>
									</li>
								)}
								{data.square && (
									<li>
										<span className="font-semibold">Площадь</span>
										<p className="text-sm">{data.square}</p>
									</li>
								)}
								{data.location && (
									<li>
										<span className="font-semibold">Местоположение</span>
										<p className="text-sm">{data.location}</p>
									</li>
								)}
								{data.stage && (
									<li>
										<span className="font-semibold">Стадия</span>
										<p className="text-sm">{data.stage}</p>
									</li>
								)}
													{data.partners && (
									<li>
										<span className="font-semibold">Партнеры</span>
										<p className="text-sm">{data.partners}</p>
									</li>
								)}
								{data.customer && (
									<li>
										<span className="font-semibold">Заказчик</span>
										<p className="text-sm">{data.customer}</p>
									</li>
								)}
		
								
								{data.date && (
									<li>
										<span className="font-semibold">Дата проектирования</span>
										<p className="text-sm">{data.date}</p>
									</li>
								)}
														{data.status && (
									<li>
										<span className="font-semibold">Статус</span>
										<p className="text-sm">{data.status}</p>
									</li>
								)}
								<Accordion description={data.description} />
							</ul>
						</div>
					</section>
				</div>
				<section className="mt-10 lg:mt-32 justify-between lg:flex">
					<Link
						href={"/projects"}
						className="hover:opacity-70 flex items-center justify-center space-x-2 cursor-pointer"
					>
						<span>Больше проектов</span>
						<div className="w-5">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
								<path d="M23.5587,16.916 C24.1447,17.4999987 24.1467,18.446 23.5647,19.034 L16.6077,26.056 C16.3147,26.352 15.9287,26.4999987 15.5427,26.4999987 C15.1607,26.4999987 14.7787,26.355 14.4867,26.065 C13.8977,25.482 13.8947,24.533 14.4777,23.944 L20.3818,17.984 L14.4408,12.062 C13.8548,11.478 13.8528,10.5279 14.4378,9.941 C15.0218,9.354 15.9738,9.353 16.5588,9.938 L23.5588,16.916 L23.5587,16.916 Z"></path>
							</svg>
						</div>
					</Link>
				</section>
				<section className="flex justify-center">
					<div className="grid grid-cols-1 w-full md:grid-cols-2 gap-10 mt-10">
						{isLoading
							? skeletons
							: filteredCards.map((card: any) => {
									return (
										<Card
											key={card.id}
											id={card.id}
											title={card.title}
											link={card.link}
											img={card.img}
											subtitle={card.subtitle}
											category={card.category}
										/>
									);
							  })}
					</div>
				</section>
			</main>
		</>
	);
};
export default CardDetails;
