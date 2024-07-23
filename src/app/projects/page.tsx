"use client";
import { useEffect, useState } from "react";
import Cards from "../components/Cards/Cards";
import Categories from "../components/Categories/Categories";
import { TypeButtons } from "../components/TypeButtons/TypeButtons";
import { useSearchParams } from "next/navigation";

export default function Projects() {
  const path = useSearchParams().toString().slice(0, -1);
  const [category, setCategory] = useState("Все");
  const [type, setType] = useState(path ? path : "genproject");
  const [isLoading, setIsLoading] = useState(true);

  //Проверка на категорию, если ее нет
  useEffect(() => {
    if (category === undefined) {
      setCategory("Все");
    }
  }, [category]);

  return (
    <main className="mx-auto container mt-32">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl lg:text-6xl font-semibold">Проекты</h1>
      </div>
      <div className="mt-12 xl:flex justify-between">
        <TypeButtons
          type={type}
          onClickType={(type: string) => {
            setType(type);
            setCategory("Все");
          }}
          onLoading={(isLoading: boolean) => {
            setIsLoading(isLoading);
          }}
        />
        <Categories
          type={type}
          category={category}
          onClickCategory={(categoryName: string) => {
            setCategory(categoryName);
          }}
        />
      </div>
      <Cards type={type} category={category} loading={isLoading} />
    </main>
  );
}
