"use client";
import Image from "next/image";
import toBase64 from "../services/toBase64/toBase64";
import shimmer from "../ui/Shimer/Shimer";

export default function About() {
	return (
		<div className="container mx-auto mt-32 min-h-[100vh]">
			<div className="flex justify-between items-start">
				<h2 className="text-4xl lg:text-6xl font-semibold">О нас</h2>
			</div>
			<div className="w-full h-[500px] bg-gray-100 rounded-lg flex justify-between mt-12">
				<div className="p-5 flex flex-col justify-between basis-1/3">
					<div className="flex items-center justify-between">
						<div className="flex items-center content-center">
							<img
								className="w-[150px]"
								src="/logo.svg"
								alt="Logo"
								whileTap={{ scale: 0.97 }}
							></img>
						</div>
						<a className="hover:opacity-75 flex items-center justify-center space-x-2 cursor-pointer">
							<span>Скачать презентацию</span>
							<div className="w-5 rotate-90">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
									<path d="M23.5587,16.916 C24.1447,17.4999987 24.1467,18.446 23.5647,19.034 L16.6077,26.056 C16.3147,26.352 15.9287,26.4999987 15.5427,26.4999987 C15.1607,26.4999987 14.7787,26.355 14.4867,26.065 C13.8977,25.482 13.8947,24.533 14.4777,23.944 L20.3818,17.984 L14.4408,12.062 C13.8548,11.478 13.8528,10.5279 14.4378,9.941 C15.0218,9.354 15.9738,9.353 16.5588,9.938 L23.5588,16.916 L23.5587,16.916 Z"></path>
								</svg>
							</div>
						</a>
					</div>
					<p>
						TIK PROJECT - команда архитекторов, BIM-специалистов, инженеров и
						конструкторов. Мы проектируем жилые и общественные здания,
						образовательные учреждения, офисы и деловые центры, индивидуальные
						жилые здания и интерьеры, а также занимаемся разработкой комфортной
						городской среды. Участники ассоциации проектировщиков Московской
						области
					</p>
					<img
						className="w-[300px]"
						src="/mos.svg"
						alt="Logo"
						whileTap={{ scale: 0.97 }}
					></img>
				</div>
				<div className="basis-2/3 relative">
					<Image
						src="/about2.jpg"
						alt="about"
						style={{ objectFit: "cover", borderRadius: "0.5rem" }}
						fill
						sizes="1300px"
						placeholder={`data:image/svg+xml;base64,${toBase64(
							shimmer(550, 250)
						)}`}
					/>
				</div>
			</div>
			<div className="space-y-6">
				<h2 className="text-4xl lg:text-6xl font-semibold mt-32">
					Специализация
				</h2>
				<p className="text-lg">Жилые здания</p>
				<p className="text-lg">Общественные объекты</p>
				<p className="text-lg">Интерьеры</p>
				<p className="text-lg">Благоустройство</p>
			</div>
			<h2 className="text-4xl lg:text-6xl font-semibold mt-32">
				Контактная информация
			</h2>
			<div className="mt-6">
				<div className="space-y-3">
					<p>@info.tikpro</p>
					<p>+8 800 555 35 35</p>
				</div>
				<div className="mt-6 space-y-3">
					<p>Москва 1-я Тверская-Ямская ул., 25, стр. 1</p>
					<p>Тамбов Кронштадтская улица, 4Ак1</p>
				</div>
				<div className="mt-6">
					<iframe
						className="rounded-lg"
						src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa90f7f2ba45af4e6468c2980a10d94974abf6acb7da27d3f885a84b26606e57d&amp;source=constructor"
						width="100%"
						height="500"
						frameborder="0"
					></iframe>
				</div>
			</div>
		</div>
	);
}
