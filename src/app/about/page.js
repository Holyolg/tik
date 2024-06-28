"use client";
import Image from "next/image";
import { Contacts } from "../components/PageComponents/Contacts/Contacts";
import toBase64 from "../services/toBase64/toBase64";
import shimmer from "../ui/Shimer/Shimer";

export default function About() {
	return (
		<div className="container mx-auto mt-32 min-h-[100vh]">
			<div className="flex justify-between items-center">
				<h2 className="text-4xl lg:text-6xl font-semibold">О компании</h2>
				<a
					target="_blank"
					href={"/TikPRO.pdf"}
					rel="noopener noreferrer"
					className="hover:opacity-75 flex space-x-2 cursor-pointer"
				>
					<span>Скачать презентацию о компании</span>
					<div className="w-5 self-center">
						<Image
							width={400}
							height={135}
							src="/download.svg"
							alt="download"
							sizes="400px"
							placeholder={`data:image/svg+xml;base64,${toBase64(
								shimmer(400, 130)
							)}`}
						/>
					</div>
				</a>
			</div>
			<div className="w-full h-full rounded-lg flex justify-between mt-12">
				<div className="flex flex-col justify-between basis-2/5">
					<p>
						TIK PROJECT - команда архитекторов, BIM-специалистов, инженеров и
						конструкторов. Основной вид деятельности компании - оказание услуг
						генпроектирования. Мы проектируем жилые и общественные здания,
						образовательные учреждения, офисы и деловые центры, индивидуальные
						жилые здания и интерьеры, а также занимаемся разработкой комфортной
						городской среды. Участники ассоциации проектировщиков Московской
						области
					</p>
					<img
						className="w-[300px] mt-12"
						src="/mos.svg"
						alt="Logo"
						whileTap={{ scale: 0.97 }}
					></img>

					<div className="flex justify-between gap-8 mt-12">
						<div className="w-52 h-20 text-center border border-gray-300 rounded-lg flex flex-col justify-center items-center hover:bg-[#2f5faa] hover:text-white">
							<b className="text-lg">
								&gt;230 тыс. м<sup>2</sup>
							</b>
							<span className="text-sm">спроектировано</span>
						</div>
						<div className="w-52 h-20 text-center border border-gray-300 rounded-lg flex flex-col justify-center items-center hover:bg-[#2f5faa] hover:text-white">
							<b className="text-lg">АГР и АГО</b>
							<span className="text-sm">В Москве и области</span>
						</div>
						<div className="w-52 h-20 text-center border border-gray-300 rounded-lg flex flex-col justify-center items-center hover:bg-[#2f5faa] hover:text-white">
							<b className="text-lg">80+</b>
							<span className="text-sm">специалистов</span>
						</div>
						<div className="w-52 h-20 text-center border border-gray-300 rounded-lg flex flex-col justify-center items-center hover:bg-[#2f5faa] hover:text-white">
							<b className="text-lg">Допуск СРО</b>{" "}
							<span className="text-sm">
								к опасными и уникальными объектами
							</span>
						</div>
						<div className="w-52 h-20 text-center border border-gray-300 rounded-lg flex flex-col justify-center items-center hover:bg-[#2f5faa] hover:text-white">
							<b className="text-lg">BIM 3D, AU Revit</b>{" "}
							<span className="text-sm">Все проекты и стадии</span>
						</div>
					</div>
				</div>
				<div className="basis-2/5 flex justify-end items-center">
					<Image
						width={400}
						height={135}
						src="/logo.svg"
						alt="logo"
						sizes="400px"
						placeholder={`data:image/svg+xml;base64,${toBase64(
							shimmer(400, 130)
						)}`}
					/>
				</div>
			</div>

			<h2 className="text-4xl lg:text-6xl font-semibold mt-32">
				Специализация
			</h2>
			<div className="flex gap-8 mt-12">
				<div className="w-52 h-20 text-center border border-gray-300 rounded-lg flex flex-col justify-center items-center hover:bg-[#2f5faa] hover:text-white">
					<p className="">Общественные объекты</p>
				</div>
				<div className="w-52 h-20 text-center border border-gray-300 rounded-lg flex flex-col justify-center items-center hover:bg-[#2f5faa] hover:text-white">
					<p className="">Жилые здания</p>
				</div>

				<div className="w-52 h-20 text-center border border-gray-300 rounded-lg flex flex-col justify-center items-center hover:bg-[#2f5faa] hover:text-white">
					<p className="">Интерьеры</p>
				</div>
				<div className="w-52 h-20 text-center border border-gray-300 rounded-lg flex flex-col justify-center items-center hover:bg-[#2f5faa] hover:text-white">
					<p className="">Благоустройство</p>
				</div>
			</div>

			<section className="mt-32">
				<Contacts />
			</section>
		</div>
	);
}
