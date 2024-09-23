"use client";
import { cardStore } from "@/shared/store/store";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export type category =
  | "Все"
  | "Здания"
  | "Жилые"
  | "Общественные"
  | "Интерьеры"
  | "Благоустройство";
type Props = {
  type: string;
  category: category;
};

export const Categories: React.FC<Props> = ({ type, category }) => {
  const categoriesProject: category[] = [
    "Все",
    "Жилые",
    "Общественные",
    "Интерьеры",
    "Благоустройство",
  ];

  const categoriesConcept: category[] = ["Все", "Здания", "Интерьеры", "Благоустройство"];

  const updateCategory = cardStore(state => state.updateCategory);

  const categoryValue = type == "genproject" ? categoriesProject : categoriesConcept;

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  return (
    <nav className="flex space-x-10 items-center overflow-x-auto snap-x snap-mandatory mt-6 xl:mt-0">
      {categoryValue.map(categoryName => (
        <span
          onClick={() => {
            updateCategory(categoryName);
            router.push(
              `${pathname}?
								${createQueryString("category", categoryName)}`,
              {
                scroll: false,
              }
            );
          }}
          key={categoryName}
          className={`snap-always snap-center hover:opacity-50 cursor-pointer ${
            category == categoryName ? "font-semibold" : " "
          }`}>
          {categoryName}
        </span>
      ))}
    </nav>
  );
};
