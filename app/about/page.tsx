import Image from "next/image";
import {
	AboutDesc,
	Contacts,
	DescriptionWithVideo,
	GrayCards,
} from "../../shared/components";
import { FC } from "react";

const GenprojectDesc: FC = () => {
	return (
		<>
			<span>
				Мы предоставляем полный спектр услуг в области генпроектирования,
				гарантируя высокое качество, соответствие нормативным требованиям и
				оперативность выполнения работ.
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
						• Подготовка проектной документации для прохождения экспертизы
						(Главгосэкспертиза, Мосгосэкспертиза, негосударственные экспертизы).
					</li>
					<li>• Получение свидетельств АГО и АХО / АГР и АГК.</li>
					<li>
						• Подготовка ЦИМ-модели в соответствии с актуальными требованиями.
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
						• Подготовка ЦИМ-модели в соответствии с актуальными требованиями.
					</li>
				</ul>
				<p className="mt-2"> 4. Авторский надзор:</p>
				<ul className="ml-4">
					<li>
						• Контроль за ходом строительства и соблюдением проектных решений.
					</li>
					<li>
						• Консультации и внесение корректировок в процессе строительства.
					</li>
				</ul>
			</div>
		</>
	);
};

const ConceptDesc: FC = () => {
	return (
		<>
			<span>
				Наша компания предлагает комплексный подход к разработке архитектурных
				концепций, учитывая все аспекты — от эстетики до практичности и
				соответствия требованиям и ожиданиям заказчика.
			</span>
			<div>
				Мы разрабатываем:
				<ul>
					<li>• Архитектурные концепции зданий и сооружений.</li>
					<li>• Концепции интерьеров.</li>
					<li>• Благоустройство дворовых территорий и городской среды.</li>
					<li>• Консолидированные концепции.</li>
				</ul>
				<br></br>
				Комплексная концепция включает в себя: <br />
				<p className="mt-2">1. Анализ и исследование:</p>
				<ul className="ml-4">
					<li>• Изучение участка и его окружения.</li>
					<li>• Анализ градостроительных и нормативных требований.</li>
					<li>
						• Исследование функциональных потребностей и предпочтений заказчика.
					</li>
				</ul>
				<p className="mt-2">2. Создание концептуальных решений: </p>
				<ul className="ml-4">
					<li>• Разработка архитектурных идей и решений.</li>
					<li>• Формирование эскизов и визуализаций.</li>
					<li>
						• Предложение различных вариантов планировок и фасадных решений.
					</li>
					<li>• Проработка благоустройства территории.</li>
				</ul>
				<p className="mt-2">3. Детализация концепции:</p>
				<ul className="ml-4">
					<li>• Проработка функциональных зон и их взаимосвязей.</li>
					<li>• Определение основных строительных материалов и технологий.</li>
					<li>
						• Разработка предварительных инженерных решений (отопление,
						вентиляция, водоснабжение, электроснабжение и др.).
					</li>
				</ul>
				<p className="mt-2">4. Согласование и презентация:</p>
				<ul className="ml-4">
					<li>• Подготовка презентационных материалов для заказчика.</li>
					<li>• Внесение корректировок по итогам обсуждения.</li>
					<li>• Финализация концепции с учетом всех замечаний и пожеланий.</li>
				</ul>
			</div>
		</>
	);
};

export default function About() {
	return (
		<main className="container mx-auto mt-14 md:mt-32">
			<div className="flex flex-wrap justify-between items-center">
				<h1 className="text-4xl lg:text-6xl font-semibold">О компании</h1>
				<a
					target="_blank"
					href={"/TikPRO.pdf"}
					rel="noopener noreferrer"
					className="hover:opacity-50 flex space-x-2 cursor-pointer md:mt-0 mt-4">
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
				<AboutDesc />
			</div>
			<div className="flex flex-wrap justify-between mt-12  text-gray-800 gap-10 xl:gap-0">
				<GrayCards
					title={
						<span>
							&gt; 500 тыс. м<sup>2</sup>
						</span>
					}
					desc={"Выполнено проектов"}
				/>
				<GrayCards title={<span>&gt; 20</span>} desc={"Выполнено проектов"} />
				<GrayCards title={<span>&gt; 80</span>} desc={"Специалистов в штате"} />
				<GrayCards
					title={
						<span>
							Допуск СРО <br /> &gt;300 млн. руб
						</span>
					}
					desc={"Допуск к проектированию опасных и уникальных объектов"}
				/>
				<GrayCards
					title={`Технологии информационного моделирования (ТИМ), ЦИМ`}
					desc={"Все проекты и все стадии"}
				/>
				<GrayCards
					title={`Ассоциация проектировщиков Московской области`}
					desc={"Членство с 2022 года"}
				/>
			</div>

			<section className="mt-14 md:mt-32" id="services">
				<h2 className="text-4xl lg:text-6xl font-semibold">Услуги</h2>
				<div className="mt-6 leading-relaxed  lg:text-sm xl:text-base">
					<h3 className="text-2xl font-semibold">Генпроектирование</h3>
					<DescriptionWithVideo
						className="md:flex-row"
						desc={<GenprojectDesc />}
						video={"/genproject.mp4"}
					/>
					<h3 className="text-2xl font-semibold mt-12 md:text-end">
						Концептуальное проектирование
					</h3>
					<DescriptionWithVideo
						className="md:flex-row-reverse"
						desc={<ConceptDesc />}
						video={"/concept.mp4"}
					/>
				</div>
			</section>
			<section className="mt-14 md:mt-32" id="contacts">
				<Contacts />
			</section>
		</main>
	);
}
