"use client";

import { useWindowSize } from "@/app/hooks/useWindowSize/useWindowSize";
import { getRandomCards } from "@/app/lib/getRandomCards";
import { Arrow } from "@/app/ui/Arrow/Arrow";
import Link from "next/link";
import { useEffect, useState } from "react";
import conceptData from "../../../concept.json";
import genprojectData from "../../../genproject.json";
import { Accordion } from "../../ui/Accordion/Accordion";
import { IData } from "../Cards/Cards";
import ImgContentXL from "../ImgContent/ImgContentXL";
import ImgContentXS from "../ImgContent/ImgContentXS";
import { CardDetailsHero } from "./CardDetailsHero";
import { CardDetailsRandomCards } from "./CardDetailsRandomCards";

interface Props {
  data: IData;
}

const CardDetails: React.FC<Props> = ({ data }) => {
  const { width } = useWindowSize();
  const [isLoading, setIsLoading] = useState(true);
  const [cards, setCards] = useState<IData[]>([]);

  useEffect(() => {
    const cards =
      data.type == "Генпроектирование"
        ? (genprojectData as unknown as IData[])
        : (conceptData as IData[]);

    const res = getRandomCards(cards);

    setCards(res);
    setIsLoading(false);
  }, []);

  return (
    <>
      <CardDetailsHero title={data.title} img={data.img} subtitle={data.subtitle} />
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
          <CardDetailsRandomCards cards={cards} isLoading={isLoading} width={width} />
        </section>
      </main>
    </>
  );
};
export default CardDetails;
