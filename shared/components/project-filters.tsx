"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useFilterStore } from "../store/filter";

export const ProjectFilters: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const { type, category, setCategory } = useFilterStore();

  const categories =
    type === "genproject"
      ? ["Все", "Жилые", "Общественные", "Интерьеры", "Благоустройство"]
      : ["Все", "Здания", "Интерьеры", "Благоустройство"];

  const handleCategoryChange = (newCategory: string) => {
    setCategory(newCategory);
    const params = new URLSearchParams(searchParams as any);
    params.set("category", newCategory);
    router.replace(`${pathname}?${params.toString()}`);
  };

  useEffect(() => {
    const categoryFromUrl = searchParams.get("category");
    if (categoryFromUrl) {
      setCategory(categoryFromUrl);
    }
  }, [searchParams, setCategory]);

  return (
    <nav className="flex space-x-10 items-center overflow-x-auto snap-x snap-mandatory mt-6 xl:mt-0">
      {categories.map(newCategory => (
        <span
          onClick={() => handleCategoryChange(newCategory)}
          key={newCategory}
          className={`snap-always snap-center hover:opacity-50 cursor-pointer ${
            category == newCategory ? "font-semibold" : " "
          }`}>
          {newCategory}
        </span>
      ))}
    </nav>
  );
};
