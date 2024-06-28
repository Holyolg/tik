import getCards from "@/app/services/GetCards/GetCards";
import { useWindowSize } from "@/app/services/hooks/useWindowSize/useWindowSize";
import { Skeleton } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
		date: string;
		type: string;
		square: string;
		location: string;
		status: string;
		description: string;
		text: string;
		imgcontent: [];
	};
}

const CardDetails = ({ data }: ICardDetails) => {
	const { width } = useWindowSize();
	const [isLoading, setIsLoading] = useState(true);
	const [cards, setCards] = useState([]);
	const pathname = usePathname();

	const skeletons = [...new Array(2)].map((_, index) => (
		<Skeleton
			sx={{ borderRadius: "0.5rem" }}
			variant="rounded"
			height={width > 1920 ? 360 : 300}
			key={index}
		></Skeleton>
	));

	useEffect(() => {
		const API_URL = `https://6628119354afcabd0734c9fb.mockapi.io/TIKPRO/genproject?page=1&limit=3`;
		getCards(API_URL).then(res => {
			setCards(res);
			setIsLoading(false);
		});
	}, []);

	const filteredCards = cards.filter((card: any) => card.id !== data.id);

	return (
		<>
			<div className="h-[100vh] relative">
				<div className="absolute z-10 w-full top-1/2">
					<h2 className="container mx-auto text-4xl md:text-6xl font-semibold text-white">
						{data.title}
					</h2>
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
			<main className="container mx-auto mt-12 md:mt-32">
				<div className="relative flex pb-8 md:pb-0 flex-col-reverse md:flex-row justify-between gap-8 border-b md:border-none border-gray-300">
					<section className="w-full md:basis-3/5 lg:basis-2/3">
						{width > 786 ? (
							<ImgContentXL imgContent={data.imgcontent} id={data.id} />
						) : (
							<ImgContentXS imgContent={data.imgcontent} id={data.id} />
						)}
					</section>
					<section className="sm:basis-0 md:basis-2/5 lg:basis-1/3">
						<div className="sticky top-1/3">
							<ul className="space-y-6">
								<li>
									<span className="font-semibold">Дата проектирования</span>
									<p>{data.date}</p>
								</li>
								<li>
									<span className="font-semibold">Тип проекта</span>
									<p>{data.type}</p>
								</li>
								<li>
									<span className="font-semibold">Площадь</span>
									<p>
										{data.square} M<sup>2</sup>
									</p>
								</li>
								<li>
									<span className="font-semibold">Местоположение</span>
									<p>{data.location}</p>
								</li>
								<li>
									<span className="font-semibold">Статус</span>
									<p>{data.status}</p>
								</li>
								<Accordion description={data.description} />
							</ul>
						</div>
					</section>
				</div>
				<section className="mt-10 lg:mt-32 justify-between lg:flex">
					<Link
						href={"/projects"}
						className="hover:opacity-75 flex items-center justify-center space-x-2 cursor-pointer"
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
