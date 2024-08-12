"use client";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import Cards from "../components/Cards/Cards";
import Categories from "../components/Categories/Categories";
import { TypeButtons } from "../components/TypeButtons/TypeButtons";
import { cardStore } from "../store/store";

export default function Projects() {
  const loading = cardStore((state) => state.loading);
  const type = cardStore((state) => state.type);
  const category = cardStore((state) => state.category);

  const updateType = cardStore((state) => state.updateType);

  const searchParams = useSearchParams();
  const paramsCategory = searchParams.get("category");
  const paramsType = searchParams.get("type");

  useEffect(() => {
    if (paramsType !== "genproject" && paramsType !== "concept") {
      updateType("genproject");
    }
  }, []);

  return (
    <main className="mx-auto container mt-32">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl lg:text-6xl font-semibold">Проекты</h1>
      </div>
      <div className="mt-12 xl:flex justify-between">
        <TypeButtons type={type} />
        <Categories type={type} category={category} />
      </div>
      <Cards type={type} category={category} loading={loading} />
    </main>
  );
}
