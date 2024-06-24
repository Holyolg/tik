import { About } from "./components/About/About";
import MainCards from "./components/MainCards/MainCards";
import { Video } from "./components/Video/Video";
import { NawArrow } from "./ui/NavArrow/NawArrow";

export default function Home() {
	return (
		<>
			<main className="">
				<div className="hero-wrapper">
					<div className="w-full bg-[url('/blur_min.jpg')] bg-no-repeat">
						<div className="text-white absolute top-1/2 w-full">
							<div className="mx-auto container">
								<h2 className="text-xl">Проектная организация</h2>
								<h1 className="mt-5 text-7xl uppercase font-semibold">
									Тик Проджект
								</h1>
							</div>
						</div>
						<Video src={"/hero.mp4"} />
						<div className="absolute bottom-5 left-1/2">
							<NawArrow />
						</div>
					</div>
				</div>
			</main>
			<section className="mx-auto container mt-32">
				<div className="flex justify-between items-center">
					<h2 className="text-7xl font-semibold">Проекты</h2>
				</div>
				<MainCards />
			</section>
			<section className="mx-auto container mt-32">
				<div className="flex justify-between items-center">
					<h2 className="text-7xl font-semibold">О нас</h2>
					<a className="hover:opacity-75 flex items-center justify-center space-x-2 cursor-pointer">
						<span>Подробнее о нас</span>
						<div className="w-5">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
								<path d="M23.5587,16.916 C24.1447,17.4999987 24.1467,18.446 23.5647,19.034 L16.6077,26.056 C16.3147,26.352 15.9287,26.4999987 15.5427,26.4999987 C15.1607,26.4999987 14.7787,26.355 14.4867,26.065 C13.8977,25.482 13.8947,24.533 14.4777,23.944 L20.3818,17.984 L14.4408,12.062 C13.8548,11.478 13.8528,10.5279 14.4378,9.941 C15.0218,9.354 15.9738,9.353 16.5588,9.938 L23.5588,16.916 L23.5587,16.916 Z"></path>
							</svg>
						</div>
					</a>
				</div>
				<div className="mt-12">
					<About />
				</div>
				<div className="w-1/2 text-lg">
					<h3 className="mt-12">
						<b>TIK PROJECT</b> - команда архитекторов, BIM-специалистов,
						инженеров и конструкторов.
					</h3>
					<h3 className="mt-6">
						Мы проектируем жилые и общественные здания, образовательные
						учреждения, офисы и деловые центры, индивидуальные жилые здания и
						интерьеры, а также занимаемся разработкой комфортной городской
						среды.
					</h3>
				</div>
			</section>
			<section className="mx-auto container mt-32">
				<h2 className="text-7xl font-semibold">Контактная информация</h2>
				<div className="mt-12 flex justify-between">
					<div className="flex space-x-16">
						<a className="cursor-pointer hover:opacity-75">
							Москва <br /> 1-я Тверская-Ямская ул., 25, стр. 1
						</a>
						<a className="cursor-pointer hover:opacity-75">
							Тамбов <br /> Кронштадская улица, 4Ак1
						</a>
					</div>
					<div className="flex space-x-16 items-center">
						<a className="cursor-pointer hover:opacity-75">
							Номер <br /> + 8 800 555 35 35
						</a>
						<a className="cursor-pointer hover:opacity-75">
							Почта <br /> @info.tikpro
						</a>
						<a className="w-6 cursor-pointer hover:opacity-75">
							<img src="/telegram.png" />
						</a>
						<a className="w-6 cursor-pointer hover:opacity-75">
							<img src="/whatsapp.png" />
						</a>
					</div>
				</div>
				<div className="mt-8">
					<iframe
						className="rounded-lg"
						src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa90f7f2ba45af4e6468c2980a10d94974abf6acb7da27d3f885a84b26606e57d&amp;source=constructor"
						width="100%"
						height="500"
					></iframe>
				</div>
			</section>
		</>
	);
}
