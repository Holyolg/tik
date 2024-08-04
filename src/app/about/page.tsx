"use client";
import Image from "next/image";
import { Contacts } from "../components/PageComponents/Contacts/Contacts";

export default function About() {
	return (
		<main className="container mx-auto mt-14 md:mt-32">
			<div className="flex flex-wrap justify-between items-center">
				<h1 className="text-4xl lg:text-6xl font-semibold">О компании</h1>
				<a
					target="_blank"
					href={"/TikPRO.pdf"}
					rel="noopener noreferrer"
					className="hover:opacity-50 flex space-x-2 cursor-pointer md:mt-0 mt-4"
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
			<div className="w-full h-full flex flex-col-reverse lg:flex-row justify-between mt-12">
				<div className="flex flex-col justify-between max-w-xl xl:max-w-3xl">
					<p className=" text-gray-500 leading-relaxed mt-10 lg:mt-0">
						ТИК-ПРОДЖЕКТ - команда архитекторов, конструкторов, инженеров и
						BIM-специалистов. <br /> В аббревиатуре «TIK»: «Technologies
						Innovations Knowledge» заложены основные принципы и ценности
						компании, которым мы следуем с 2017 года. <br /> Применение
						современных технологий, креативность и энергичность молодых
						специалистов, знания и опыт старших коллег - такой симбиоз позволяет
						нам создавать уникальный продукт, задающий новые стандарты качества
						и удовлетворяющий всем потребностям наших заказчиков. <br />
						Основной вид деятельности компании - оказание услуг
						генпроектирования. Мы проектируем жилые и многофункциональные
						комплексы, офисные здания и торговые центры, социальные объекты, а
						также занимаемся разработкой архитектурных концепций, интерьеров и
						комфортной городской среды.
					</p>
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
			<div className="flex flex-wrap justify-between mt-12  text-gray-800 gap-10 xl:gap-0">
				<div className="w-full lg:w-52 2xl:w-64 h-40 p-3 rounded-xl flex flex-col justify-between bg-gray-100">
					<b className="text-lg 2xl:text-xl">
						&gt;500 тыс. м<sup>2</sup>
					</b>
					<span className="text-sm">Выполнено проектов</span>
				</div>

				<div className="w-full lg:w-52 2xl:w-64 h-40 p-3 rounded-xl flex flex-col justify-between bg-gray-100 ">
					<b className="text-lg 2xl:text-xl">&gt;20</b>
					<span className="text-sm">АХО, АГО и АГР</span>
				</div>
				<div className="w-full lg:w-52 2xl:w-64 h-40 p-3 rounded-xl flex flex-col justify-between bg-gray-100 ">
					<b className="text-lg 2xl:text-xl"> &gt;80</b>
					<span className="text-sm">Специалистов в штате</span>
				</div>
				<div className="w-full lg:w-52 h-40 p-3 rounded-xl flex flex-col justify-between bg-gray-100">
					<b className="text-lg 2xl:text-xl">
						Допуск СРО <br /> &gt;300 млн. руб
					</b>
					<span className="text-sm">
						Допуск к проектированию опасных и уникальных объектов
					</span>
				</div>
				<div className="w-full lg:w-52 2xl:w-64 h-40 p-3 rounded-xl flex flex-col justify-between bg-gray-100">
					<b className="text-lg 2xl:text-xl">
						Технологии информационного моделирования, BIM 3D
					</b>
					<span className="text-sm">Все проекты и все стадии</span>
				</div>
				<div className="w-full lg:w-52 2xl:w-64 h-40 p-3 rounded-xl flex flex-col justify-between bg-gray-100">
					<b className="text-lg 2xl:text-xl">
						Ассоциация проектировщиков Московской области
					</b>
					<span className="text-sm">Членство с 2022 года</span>
				</div>
			</div>

			<section className="mt-14 md:mt-32" id="services">
				<h2 className="text-4xl lg:text-6xl font-semibold">Услуги</h2>
				<div className="mt-6 leading-relaxed text-sm xl:text-base">
					<h3 className="text-2xl font-semibold">Генпроектирование</h3>
					<div className="mt-6 flex flex-col-reverse md:flex-row w-full h-full justify-between gap-4 text-gray-500">
						<div className="max-w-2xl xl:max-w-3xl">
							<span>
								Мы предоставляем полный спектр услуг в области
								генпроектирования, гарантируя высокое качество, соответствие
								нормативным требованиям и оперативность выполнения работ.
							</span>
							<div>
								<br />
								Генпроектирование включает в себя:
								<p className="mt-2"> 1. Предпроектные исследования:</p>
								<ul className="ml-4">
									<li>• Анализ исходных данных и условий площадки.</li>
									<li>• Подготовка концептуальных решений.</li>
									<li>• Технико-экономическое обоснование.</li>
								</ul>
								<p className="mt-2"> 2. Проектная документация:</p>
								<ul className="ml-4">
									<li>• Разработка всех разделов в составе 87 ПП РФ.</li>
									<li>
										• Подготовка проектной документации для прохождения
										экспертизы (Главгосэкспертиза, Мосгосэкспертиза,
										негосударственные экспертизы).
									</li>
									<li>• Получение свидетельств АГО и АХО / АГР и АГК.</li>
									<li>
										• Подготовка BIM-модели в соответствии с актуальными
										требованиями.
									</li>
								</ul>
								<p className="mt-2"> 3. Рабочая документация:</p>
								<ul className="ml-4">
									<li>• Разработка разделов в соответствии с ТЗ. </li>
									<li>• Подготовка ведомостей объемов работ.</li>
									<li>
										• Согласование с ресурсоснабжающими организациями (МОЭК,
										Мосводоканал, Мосводосток и д.р.).
									</li>
									<li>
										• Подготовка BIM-модели в соответствии с актуальными
										требованиями.
									</li>
								</ul>
								<p className="mt-2"> 4. Авторский надзор:</p>
								<ul className="ml-4">
									<li>
										• Контроль за ходом строительства и соблюдением проектных
										решений.
									</li>
									<li>
										• Консультации и внесение корректировок в процессе
										строительства.
									</li>
								</ul>
							</div>
							<br />
						</div>
						<div className="min-h-fit non-clickable relative bg-[url('/genproject_min.jpg')] bg-cover bg-no-repeat bg-center rounded-lg max-w-2xl xl:max-w-4xl w-full">
							<video
								className="max-w-2xl xl:max-w-4xl h-full object-cover rounded-lg"
								width="100%"
								height="100%"
								preload="none"
								autoPlay
								loop
								muted
								playsInline
							>
								<source src="/genproject.mp4" type="video/mp4" />
							</video>
						</div>
					</div>
					<h3 className="text-2xl font-semibold mt-12 md:text-end">
						Концептуальное проектирование
					</h3>
					<div className="mt-6 flex flex-col md:flex-row w-full h-full justify-between gap-4 text-gray-500">
						<div className="min-h-fit  non-clickable relative  bg-[url('/concept_min.jpg')] bg-cover bg-no-repeat rounded-lg max-w-2xl xl:max-w-4xl bg-center w-full">
							<video
								className="max-w-2xl xl:max-w-4xl h-full object-cover rounded-lg"
								width="100%"
								height="100%"
								preload="none"
								autoPlay
								loop
								muted
								playsInline
							>
								<source src="/concept.mp4" type="video/mp4" />
							</video>
						</div>
						<div className="max-w-2xl xl:max-w-3xl">
							<span>
								Наша компания предлагает комплексный подход к разработке
								архитектурных концепций, учитывая все аспекты — от эстетики до
								практичности и соответствия требованиям и ожиданиям заказчика.
							</span>
							<div>
								Мы разрабатываем:
								<ul>
									<li>• Архитектурные концепции зданий и сооружений.</li>
									<li>• Концепции интерьеров.</li>
									<li>
										• Благоустройство дворовых территорий и городской среды.
									</li>
									<li>• Консолидированные концепции.</li>
								</ul>
								<br></br>
								Комплексная концепция включает в себя: <br />
								<p className="mt-2">1. Анализ и исследование:</p>
								<ul className="ml-4">
									<li>• Изучение участка и его окружения.</li>
									<li>• Анализ градостроительных и нормативных требований.</li>
									<li>
										• Исследование функциональных потребностей и предпочтений
										заказчика.
									</li>
								</ul>
								<p className="mt-2">2. Создание концептуальных решений: </p>
								<ul className="ml-4">
									<li>• Разработка архитектурных идей и решений.</li>
									<li>• Формирование эскизов и визуализаций.</li>
									<li>
										• Предложение различных вариантов планировок и фасадных
										решений.
									</li>
									<li>• Проработка благоустройства территории.</li>
								</ul>
								<p className="mt-2">3. Детализация концепции:</p>
								<ul className="ml-4">
									<li>• Проработка функциональных зон и их взаимосвязей.</li>
									<li>
										• Определение основных строительных материалов и технологий.
									</li>
									<li>
										• Разработка предварительных инженерных решений (отопление,
										вентиляция, водоснабжение, электроснабжение и др.).
									</li>
								</ul>
								<p className="mt-2">4. Согласование и презентация:</p>
								<ul className="ml-4">
									<li>
										• Подготовка презентационных материалов для заказчика.
									</li>
									<li>• Внесение корректировок по итогам обсуждения.</li>
									<li>
										• Финализация концепции с учетом всех замечаний и пожеланий.
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="mt-14 md:mt-32" id="contacts">
				<Contacts />
			</section>
		</main>
	);
}
