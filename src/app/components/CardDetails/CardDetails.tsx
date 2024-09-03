"use client";

import { useWindowSize } from "@/app/hooks/useWindowSize/useWindowSize";
import { Skeleton } from "@mui/material";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import conceptData from "../../../concept.json";
import genprojectData from "../../../genproject.json";
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
import { IData } from "../Cards/Cards";

interface Props {
  data: IData;
}

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

const CardDetails: React.FC<Props> = ({ data }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);
  const { width } = useWindowSize();
  const [isLoading, setIsLoading] = useState(true);
  const [cards, setCards] = useState<IData[]>([]);

  const skeletons = [...new Array(2)].map((_, index) => (
    <Skeleton
      sx={{ borderRadius: "0.5rem" }}
      variant="rounded"
      height={width > 1920 ? 360 : 300}
      key={index}></Skeleton>
  ));

  useEffect(() => {
    const count =
      data.type == "Генпроектирование"
        ? Math.floor(Math.random() * (6 - 1) + 1)
        : Math.floor(Math.random() * (2 - 1) + 1);

    const cards =
      data.type == "Генпроектирование"
        ? (genprojectData as unknown as IData[])
        : (conceptData as IData[]);

    function getRandomObjects(arr: IData[]) {
      if (arr.length < 2) {
        throw new Error("Массив должен содержать как минимум два объекта.");
      }
      const firstIndex = Math.floor(Math.random() * arr.length);
      const firstObject = arr[firstIndex];
      const filteredArr = arr.filter(obj => obj.id !== firstObject.id);
      const secondIndex = Math.floor(Math.random() * filteredArr.length);
      const secondObject = filteredArr[secondIndex];

      return [firstObject, secondObject];
    }
    const res = getRandomObjects(cards);

    setCards(res);
    setIsLoading(false);
  }, []);

  return (
    <>
      <div className="min-h-[100vh] relative">
        <motion.div
          className="absolute z-10 w-full top-1/2"
          ref={ref}
          style={{ y }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}>
          <h2 className="container mx-auto text-xl text-white ">{data.subtitle}</h2>
          <h1 className="container mx-auto mt-5 text-3xl sm:text-7xl font-semibold font-semibold text-white">
            {data.title}
          </h1>
        </motion.div>
        <Image
          src={data.img}
          alt="Изображение проекта"
          style={{ objectFit: "cover", filter: "brightness(65%)" }}
          sizes="2200px"
          fill
          placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(1920, 1080))}`}
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
                    <p className="font-semibold">Тип</p>
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
                    <p className="font-semibold">Площадь</p>
                    <p className="text-sm">{data.square}</p>
                  </li>
                )}
                {data.location && (
                  <li>
                    <p className="font-semibold">Расположение</p>
                    <p className="text-sm">{data.location}</p>
                  </li>
                )}
                {data.stage && (
                  <li>
                    <p className="font-semibold">Стадия</p>
                    <p className="text-sm">{data.stage}</p>
                  </li>
                )}
                {data.arch && (
                  <li>
                    <p className="font-semibold">Архитектура</p>
                    <a
                      href={data.archlink}
                      target="_blank"
                      className="text-sm hover:opacity-50 after:content-['_↗']">
                      {data.arch}
                    </a>
                  </li>
                )}
                {data.partners && (
                  <li>
                    <p className="font-semibold">Партнеры</p>

                    <a
                      href={data.partnerslink}
                      target="_blank"
                      className="text-sm hover:opacity-50 after:content-['_↗']">
                      {data.partners}
                    </a>
                  </li>
                )}
                {data.customer && (
                  <li>
                    <p className="font-semibold">Заказчик</p>
                    <a
                      href={data.customerlink}
                      target="_blank"
                      className="text-sm hover:opacity-50 after:content-['_↗']">
                      {data.customer}
                    </a>
                  </li>
                )}
                {data.nolinkcustomer && (
                  <li>
                    <p className="font-semibold">Заказчик</p>
                    <p className="text-sm">{data.nolinkcustomer}</p>
                  </li>
                )}

                {data.date && (
                  <li>
                    <p className="font-semibold">Год</p>
                    <p className="text-sm">{data.date}</p>
                  </li>
                )}
                {data.status && (
                  <li>
                    <p className="font-semibold">Статус</p>
                    <p className="text-sm">{data.status}</p>
                  </li>
                )}
                {data.description && <Accordion description={data.description} />}
              </ul>
            </div>
          </section>
        </div>
        <section className="mt-10 lg:mt-32 justify-end lg:flex">
          <Link
            href={`/projects?type=${data.type}`}
            className="hover:opacity-50 flex items-center justify-center space-x-2 cursor-pointer">
            <p>Больше проектов</p>
            <Arrow />
          </Link>
        </section>
        <section className="flex justify-center">
          <div className="grid grid-cols-1 w-full md:grid-cols-2 gap-10 mt-10">
            {isLoading
              ? skeletons
              : cards.map((card: any) => {
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
