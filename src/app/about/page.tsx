"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Contacts } from "../components/PageComponents/Contacts/Contacts";

export default function About() {
	const [category, setCategory] = useState(1);
	const categories: string[] = [
		"Жилые здания",
		"Общественные объекты",
		"Интерьеры",
		"Благоустройство",
	];

	const cards = [
		{
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel odio id magna mattis egestas at a felis. Nunc vel placerat nisi. Pellentesque laoreet sem at interdum molestie. Nulla varius felis vel ligula iaculis sagittis. Vestibulum sollicitudin turpis et viverra suscipit. Vestibulum euismod, libero tempus sagittis finibus, arcu elit pretium metus, quis semper justo sapien sit amet purus. Maecenas nec interdum lectus, id pharetra elit.",
			img: "/test.png",
		},
		{
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel odio id magna mattis egestas at a felis. Nunc vel placerat nisi. Pellentesque laoreet sem at interdum molestie. Nulla varius felis vel ligula iaculis sagittis. Vestibulum sollicitudin turpis et viverra suscipit. Vestibulum euismod, libero tempus sagittis finibus, arcu elit pretium metus, quis semper justo sapien sit amet purus. Maecenas nec interdum lectus, id pharetra elit.",
			img: "/test2.png",
		},
		{
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel odio id magna mattis egestas at a felis. Nunc vel placerat nisi. Pellentesque laoreet sem at interdum molestie. Nulla varius felis vel ligula iaculis sagittis. Vestibulum sollicitudin turpis et viverra suscipit. Vestibulum euismod, libero tempus sagittis finibus, arcu elit pretium metus, quis semper justo sapien sit amet purus. Maecenas nec interdum lectus, id pharetra elit.",
			img: "/test3.png",
		},
		{
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel odio id magna mattis egestas at a felis. Nunc vel placerat nisi. Pellentesque laoreet sem at interdum molestie. Nulla varius felis vel ligula iaculis sagittis. Vestibulum sollicitudin turpis et viverra suscipit. Vestibulum euismod, libero tempus sagittis finibus, arcu elit pretium metus, quis semper justo sapien sit amet purus. Maecenas nec interdum lectus, id pharetra elit.",
			img: "/test4.png",
		},
	];

	cards.filter(card => card);

	return (
		<main className="container mx-auto mt-32">
			<div className="flex flex-wrap justify-between items-center">
				<h1 className="text-4xl lg:text-6xl font-semibold">О компании</h1>
				<a
					target="_blank"
					href={"/TikPRO.pdf"}
					rel="noopener noreferrer"
					className="hover:opacity-70 flex space-x-2 cursor-pointer mt-6"
				>
					<span>Скачать презентацию о компании</span>
					<div className="w-5 self-center">
						<Image
							width={400}
							height={135}
							src="/download.svg"
							alt="download"
							sizes="400px"
						/>
					</div>
				</a>
			</div>
			<div className="w-full h-full rounded-lg flex flex-col-reverse lg:flex-row justify-between mt-12">
				<div className="flex flex-col justify-between max-w-xl">
					<p className=" text-gray-500 leading-relaxed mt-10 lg:mt-0">
						TIK PROJECT - команда архитекторов, BIM-специалистов, инженеров и
						конструкторов. Основной вид деятельности компании - оказание услуг
						генпроектирования. Мы проектируем жилые и общественные здания,
						образовательные учреждения, офисы и деловые центры, индивидуальные
						жилые здания и интерьеры, а также занимаемся разработкой комфортной
						городской среды. Участники ассоциации проектировщиков Московской
						области
					</p>
					<Image width={250} height={150} className="mt-8" src="/mos.svg" alt="Ассоциация проектировщиков Московской области"/>
				</div>
				<div className="">
					<Image
						width={500}
						height={158}
						src="/logo.svg"
						alt="logo"
						sizes="400px"
					/>
				</div>
			</div>
			<div className="flex flex-wrap justify-between mt-12 gap-10 text-gray-800">
				<div className="w-full lg:w-60 h-40 p-4 rounded-xl flex flex-col justify-between bg-gray-100 ">
					<b className="text-3xl">
						&gt;230 тыс. м<sup>2</sup>
					</b>
					<span className="text-sm">Было в работе в 2022 году</span>
				</div>

				<div className="w-full lg:w-60 h-40 p-4 rounded-xl flex flex-col justify-between bg-gray-100 ">
					<b className="text-3xl">АГР и АГО</b>
					<span className="text-sm">
						С 2022 года получены свидетельства АГР В Москве и АГО в Московской
						области
					</span>
				</div>
				<div className="w-full lg:w-60 h-40 p-4 rounded-xl flex flex-col justify-between bg-gray-100 ">
					<b className="text-3xl">80+</b>
					<span className="text-sm">
						cпециалистов проектировщиков. Выполнение всех разделов.
					</span>
				</div>
				<div className="w-full lg:w-60 h-40 p-4 rounded-xl flex flex-col justify-between bg-gray-100">
					<b className="text-3xl">Допуск СРО</b>{" "}
					<span className="text-sm">
						Допуск к работе с опасными и уникальными объектами
					</span>
				</div>
				<div className="w-full lg:w-60 h-40 p-4 rounded-xl flex flex-col justify-between bg-gray-100">
					<b className="text-3xl">BIM 3D, <br/>AU Revit</b>
					<span className="text-sm">Все проекты и все стадии</span>
				</div>
			</div>
			<h2 className="text-4xl lg:text-6xl font-semibold mt-32">
				Специализация
			</h2>
			<div className="flex flex-col xl:flex-row gap-10 mt-12">
				<div>
					<ul className="space-y-10 w-56">
						{categories.map((categoryName, i) => (
							<li
								onClick={() => setCategory(i)}
								className={`hover:opacity-75 cursor-pointer ${
									category == i ? "font-semibold" : " "
								}`}
								key={i}
							>
								{categoryName}
							</li>
						))}
					</ul>
				</div>
				<div className="w-full bg-gray-100 rounded-md overflow-hidden">
					{cards.map((card, i) =>
						i == category ? (
							<motion.div
								initial={{ x: 200, opacity: 0.6 }}
								animate={{ x: 0, opacity: 1 }}
								exit={{ x: 500, opacity: 1 }}
								transition={{ duration: 0.4 }}
								key={i}
								className="flex flex-col-reverse lg:flex-row justify-between bg-gray-100 h-full"
							>
								<p className="mt-10 lg:mt-0 max-w-md p-5">{card.description}</p>
								<div className="relative h-[300px]">
									<Image
										width={600}
										height={500}
										className="object-cover"
										src={card.img}
										alt="category"
										sizes="700px"
									/>
								</div>
							</motion.div>
						) : (
							""
						)
					)}
				</div>
			</div>
			{/* <div className="flex flex-wrap justify-between mt-12 gap-10 text-gray-800">
				<div className="w-full lg:w-60 h-24 text-center rounded-xl flex flex-col justify-center items-center bg-gray-100">
					<p className="">Общественные объекты</p>
				</div>
				<div className="w-full lg:w-60 h-24 text-center rounded-xl flex flex-col justify-center items-center bg-gray-100">
					<p className="">Жилые здания</p>
				</div>

				<div className="w-full lg:w-60 h-24 text-center rounded-xl flex flex-col justify-center items-center bg-gray-100">
					<p className="">Интерьеры</p>
				</div>
				<div className="w-full lg:w-60 h-24 text-center rounded-xl flex flex-col justify-center items-center bg-gray-100">
					<p className="">Благоустройство</p>
				</div>
			</div> */}

			<section className="mt-32">
				<Contacts />
			</section>
		</main>
	);
}
