"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Contacts } from "../components/PageComponents/Contacts/Contacts";
import { Video } from "../components/Video/Video";

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

  cards.filter((card) => card);

  return (
    <main className="container mx-auto mt-32">
      <div className="flex flex-wrap justify-between items-center">
        <h1 className="text-4xl lg:text-6xl font-semibold">О компании</h1>
        <a
          target="_blank"
          href={"/TikPRO.pdf"}
          rel="noopener noreferrer"
          className="hover:opacity-70 flex space-x-2 cursor-pointer md:mt-0 mt-4"
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
            TIK-PROJECT - команда архитекторов, конструкторов, инженеров и
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
      <div className="flex flex-wrap justify-between mt-12  text-gray-800">
        <div className="w-full lg:w-52 h-40 p-3 rounded-xl flex flex-col justify-between bg-gray-100 ">
          <b className="text-lg">
            &gt;500 тыс. м<sup>2</sup>
          </b>
          <span className="text-sm">Спроектировано</span>
        </div>

        <div className="w-full lg:w-52 h-40 p-3 rounded-xl flex flex-col justify-between bg-gray-100 ">
          <b className="text-lg">АГР и АГО</b>
          <span className="text-sm">
            Получение свидетельств АГР и АГК в Москве, АГО и АХО в Московской
            области
          </span>
        </div>
        <div className="w-full lg:w-52 h-40 p-3 rounded-xl flex flex-col justify-between bg-gray-100 ">
          <b className="text-lg"> &gt;80</b>
          <span className="text-sm">Специалистов в штате</span>
        </div>
        <div className="w-full lg:w-52 h-40 p-3 rounded-xl flex flex-col justify-between bg-gray-100">
          <b className="text-lg">
            Допуск СРО <br /> &gt;300 млн. руб
          </b>
          <span className="text-sm">
            Допуск к работе с опасными и уникальными объектами
          </span>
        </div>
        <div
          className="w-full lg:w-52 h-40 p-3 rounded-xl flex flex-col justify-between bg-gray-100"
          id="services"
        >
          <b className="text-lg">
            BIM 3D, <br />
            AU Revit
          </b>
          <span className="text-sm">Все проекты и все стадии</span>
        </div>
        <div
          className="w-full lg:w-52 h-40 p-3 rounded-xl flex flex-col justify-between bg-gray-100"
          id="services"
        >
          <b className="text-lg">
            Ассоциация проектировщиков Московской области
          </b>
          <span className="text-sm">Членство с 2022 года</span>
        </div>
      </div>

      <section className="mt-14 md:mt-32">
        <h2 className="text-4xl lg:text-6xl font-semibold">Услуги</h2>
        <div className="mt-6">
          <h3 className="text-2xl font-semibold">Генпроектирование</h3>
          <div className="mt-6 flex flex-col-reverse md:flex-row w-full h-full justify-between gap-10">
            <div className="max-w-2xl text-sm">
              <span>
                Мы предоставляем полный спектр услуг в области
                генпроектирования, гарантируя высокое качество, соответствие
                нормативным требованиям и оперативность выполнения работ.
              </span>
              <div>
                Генпроектирование включает в себя: <br />
                1. Предпроектные исследования:
                <ul className="ml-4">
                  <li>• Анализ исходных данных и условий площадки.</li>
                  <li>• Подготовка концептуальных решений.</li>
                  <li>• Технико-экономическое обоснование.</li>
                </ul>
                2. Проектная документация:
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
                3. Рабочая документация:
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
                4. Авторский надзор:
                <ul className="ml-4">
                  <li>
                    • Контроль за ходом строительства и соблюдением проектных
                    решений.
                  </li>
                  <li>
                    Консультации и внесение корректировок в процессе
                    строительства.
                  </li>
                </ul>
              </div>
              <br />
            </div>

            <video
              src="/genproject.mp4"
              className="max-w-2xl object-cover rounded-lg"
              width="100%"
              height="100%"
              preload="none"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
          <h3 className="text-2xl font-semibold mt-12 md:text-end">
            Концептуальное проектирование
          </h3>
          <div className="mt-6 flex flex-col md:flex-row w-full h-full justify-between gap-10">
            <video
              src="/concept.mp4"
              className="max-w-2xl object-cover rounded-lg"
              width="100%"
              height="100%"
              preload="none"
              autoPlay
              loop
              muted
              playsInline
            />
            <div className="max-w-2xl text-sm">
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
                1. Анализ и исследование:
                <ul className="ml-4">
                  <li>• Изучение участка и его окружения.</li>
                  <li>• Анализ градостроительных и нормативных требований.</li>
                  <li>
                    • Исследование функциональных потребностей и предпочтений
                    заказчика.
                  </li>
                </ul>
                2. Создание концептуальных решений:
                <ul className="ml-4">
                  <li>• Разработка архитектурных идей и решений.</li>
                  <li>• Формирование эскизов и визуализаций.</li>
                  <li>
                    • Предложение различных вариантов планировок и фасадных
                    решений.
                  </li>
                  <li>• Проработка благоустройства территории.</li>
                </ul>
                3. Детализация концепции:
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
                4. Согласование и презентация:
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
      {/* <div className="flex flex-wrap justify-between mt-12 gap-10 text-gray-800">
				<div className="w-full lg:w-52 h-24 text-center rounded-xl flex flex-col justify-center items-center bg-gray-100">
					<p className="">Общественные объекты</p>
				</div>
				<div className="w-full lg:w-52 h-24 text-center rounded-xl flex flex-col justify-center items-center bg-gray-100">
					<p className="">Жилые здания</p>
				</div>

				<div className="w-full lg:w-52 h-24 text-center rounded-xl flex flex-col justify-center items-center bg-gray-100">
					<p className="">Интерьеры</p>
				</div>
				<div className="w-full lg:w-52 h-24 text-center rounded-xl flex flex-col justify-center items-center bg-gray-100">
					<p className="">Благоустройство</p>
				</div>
			</div> */}

      <section className="mt-14 md:mt-32" id="contacts">
        <Contacts />
      </section>
    </main>
  );
}
