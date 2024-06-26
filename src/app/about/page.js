"use client";
import Image from "next/image";
import toBase64 from "../services/toBase64/toBase64";
import shimmer from "../ui/Shimer/Shimer";

export default function About() {
	return (
		<>
			<div className="container mx-auto mt-32 min-h-[100vh]">
				<div className="flex justify-between items-start">
					<h2 className="text-7xl font-semibold">
						Мы
						<br />
						инженеры
						<br />
						архитекторы
						<br />
						конструкторы
						<br />
						BIM-специалисты
					</h2>
					<a className="hover:opacity-75 flex items-center justify-center space-x-2 cursor-pointer">
						<span>/</span>
						<div className="w-5">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
								<path d="M23.5587,16.916 C24.1447,17.4999987 24.1467,18.446 23.5647,19.034 L16.6077,26.056 C16.3147,26.352 15.9287,26.4999987 15.5427,26.4999987 C15.1607,26.4999987 14.7787,26.355 14.4867,26.065 C13.8977,25.482 13.8947,24.533 14.4777,23.944 L20.3818,17.984 L14.4408,12.062 C13.8548,11.478 13.8528,10.5279 14.4378,9.941 C15.0218,9.354 15.9738,9.353 16.5588,9.938 L23.5588,16.916 L23.5587,16.916 Z"></path>
							</svg>
						</div>
					</a>
				</div>
				<p className="lg:w-[550px] ml-auto  p-4 rounded-lg">
					Проектируем жилые и общественные здания, образовательные учреждения,
					офисы и деловые центры, индивидуальные жилые здания и интерьеры, а
					также занимаемся разработкой комфортной городской среды.
				</p>
				<div className="w-2/3 h-[500px] relative mt-6">
					<Image
						src="/about.png"
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
		</>
	);
}
