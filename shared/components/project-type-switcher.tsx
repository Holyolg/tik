"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FC, useEffect } from "react";
import { useFilterStore } from "../store/filter";

export const ProjectTypeSwitcher: FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const { type, setType, setCategory } = useFilterStore();

  useEffect(() => {
    const typeFromUrl = searchParams.get("projectType");
    const categoryFromUrl = searchParams.get("category");

    if (typeFromUrl && (typeFromUrl === "genproject" || typeFromUrl === "concept")) {
      setType(typeFromUrl);
    }
    if (categoryFromUrl) {
      if (
        (typeFromUrl === "genprojects" &&
          ["Все", "Жилые", "Общественные", "Интерьеры", "Благоустройство"].includes(
            categoryFromUrl
          )) ||
        (typeFromUrl === "concepts" &&
          ["Все", "Здания", "Интерьеры", "Благоустройство"].includes(categoryFromUrl))
      ) {
        setCategory(categoryFromUrl);
      } else {
        setCategory("Все");
      }
    } else {
      setCategory("Все");
    }
  }, [searchParams, setCategory, setType]);

  const switchToType = (newType: "genproject" | "concept") => {
    setType(newType);
    setCategory("Все");
    const params = new URLSearchParams(searchParams as any);
    params.set("projectType", newType);
    params.delete("category");
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="flex items-center sm:space-y-0 space-x-0 lg:space-x-5">
      <button
        className={
          type === "genproject"
            ? " w-full lg:w-72 h-10 bg-black border-black border lg:rounded-lg rounded-l-lg hover:bg-black text-white active:opacity-85"
            : " w-full lg:w-72 h-10 border-black border lg:rounded-lg rounded-l-lg  hover:bg-black hover:text-white active:opacity-85"
        }
        onClick={() => switchToType("genproject")}>
        Генпроектирование
      </button>
      <button
        className={
          type === "concept"
            ? " w-full lg:w-72 h-10 bg-black border-black border lg:rounded-lg rounded-l-lg hover:bg-black text-white active:opacity-85"
            : " w-full lg:w-72 h-10 border-black border lg:rounded-lg rounded-l-lg  hover:bg-black hover:text-white active:opacity-85"
        }
        onClick={() => switchToType("concept")}>
        Концепции
      </button>
    </div>
  );
};
