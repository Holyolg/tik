"use client";
import { useFilterStore } from "@/shared/store/filter";
import { useInView } from "framer-motion";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { FC, useCallback, useRef } from "react";
import { CardsList, ProjectTypeSwitcher } from "..";
import { Arrow, ButtonLink } from "../ui";

type Props = {
  numItems: number;
};

export const CardsListWithCategory: FC<Props> = ({ numItems }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const searchParams = useSearchParams();

  const { type } = useFilterStore();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  return (
    <section
      ref={ref}
      style={{
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
      }}>
      <div className="flex justify-between items-center">
        <h2 className="text-4xl lg:text-6xl font-semibold">Проекты</h2>
      </div>

      <div className="mt-6 lg:flex justify-between">
        <ProjectTypeSwitcher />
        <ButtonLink>
          <Link
            href={`/projects?${createQueryString(
              "projectType",
              type == "genproject" ? "genproject" : "concept"
            )}`}>{`Больше ${type == "genproject" ? "проектов" : "концепций"}`}</Link>
        </ButtonLink>
      </div>

      <CardsList numItems={numItems} />

      <button className="w-full h-10 mt-10 flex justify-center items-center bg-black border-black border rounded-lg  hover:bg-black text-white active:opacity-85 lg:hidden space-x-2">
        <Link href={`/projects?${type == "genproject" ? "genproject" : "concept"}`}>
          {`Больше ${type == "genproject" ? "проектов" : "концепций"}`}
        </Link>
        <Arrow />
      </button>

      <div id="about"></div>
    </section>
  );
};
