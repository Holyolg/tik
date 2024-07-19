"use client";

import { useWindowSize } from "@/app/hooks/useWindowSize/useWindowSize";
import getCards from "@/app/services/GetCards/GetCards";
import { Skeleton } from "@mui/material";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Accordion } from "../../ui/Accordion/Accordion";
import shimmer from "../../ui/Shimer/Shimer";
import Card from "../Card/Card";
import ImgContentXL from "../ImgContentXL/ImgContentXL";
import ImgContentXS from "../ImgContentXS/ImgContentXS";

// Import Swiper styles
import toBase64 from "@/app/services/toBase64/toBase64";
import { Arrow } from "@/app/ui/Arrow/Arrow";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/zoom";

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
    arch: string;
    description: string;
    text: string;
    stage: string;
    partners: string;
    imgcontent: [];
  };
}

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

const CardDetails = ({ data }: ICardDetails) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);
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
    const page = Math.floor(Math.random() * (6 - 1));
    const API_URL = `https://668e955fbf9912d4c92ee8b3.mockapi.io/${
      data.type == "Генпроектирование" ? "genproject" : "concept"
    }?page=${page}&limit=3&sortBy=rating&order=asc`;
    getCards(API_URL).then((res) => {
      setCards(res);
      setIsLoading(false);
    });
  }, []);

  const filteredCards = cards.filter((card: any) => card.id !== data.id);
  filteredCards.length === 2 ? filteredCards : delete filteredCards[2];

  return (
    <>
      <div className="min-h-[100vh] relative">
        <motion.div
          className="absolute z-10 w-full top-1/2"
          ref={ref}
          style={{ y }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h2 className="container mx-auto text-xl text-white ">
            {data.subtitle}
          </h2>
          <h1 className="container mx-auto mt-5 text-3xl sm:text-7xl font-semibold font-semibold text-white">
            {data.title}
          </h1>
        </motion.div>
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
                    <p className="text-sm">
                      {data.category !== "Интерьеры" &&
                      data.category !== "Благоустройство" &&
                      data.category !== "Здания" &&
                      data.category !== "Концепция"
                        ? `${data.category} здания`
                        : data.category}
                    </p>
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
                    <span className="font-semibold">Расположение</span>
                    <p className="text-sm">{data.location}</p>
                  </li>
                )}
                {data.stage && (
                  <li>
                    <span className="font-semibold">Стадия</span>
                    <p className="text-sm">{data.stage}</p>
                  </li>
                )}
                {data.arch && (
                  <li>
                    <span className="font-semibold">Архитектура</span>
                    <p className="text-sm">{data.arch}</p>
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
                    <span className="font-semibold">Год</span>
                    <p className="text-sm">{data.date}</p>
                  </li>
                )}
                {data.status && (
                  <li>
                    <span className="font-semibold">Статус</span>
                    <p className="text-sm">{data.status}</p>
                  </li>
                )}
                {data.description && (
                  <Accordion description={data.description} />
                )}
              </ul>
            </div>
          </section>
        </div>
        <section className="mt-10 lg:mt-32 justify-end lg:flex">
          <Link
            href={"/projects"}
            className="hover:opacity-70 flex items-center justify-center space-x-2 cursor-pointer"
          >
            <span>Больше проектов</span>
            <Arrow />
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
