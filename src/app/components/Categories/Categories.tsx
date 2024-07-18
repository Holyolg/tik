interface ICategories {
  category: string;
  onClickCategory: Function;
  type: string;
}

function Categories({ category, onClickCategory, type }: ICategories) {
  const categoriesProject: string[] = [
    "Все",
    "Жилые",
    "Общественные",
    "Интерьеры",
    "Благоустройство",
  ];

  const categoriesConcept: string[] = [
    "Все",
    "Здания",
    "Интерьеры",
    "Благоустройство",
  ];

  const categoryValue =
    type == "genproject" ? categoriesProject : categoriesConcept;

  return (
    <nav className="flex space-x-10 items-center overflow-x-auto snap-x snap-mandatory mt-6 xl:mt-0">
      {categoryValue.map((categoryName) => (
        <span
          onClick={() => {
            onClickCategory(categoryName);
          }}
          key={categoryName}
          className={`snap-always snap-center hover:opacity-75 cursor-pointer ${
            category == categoryName ? "font-semibold" : " "
          }`}
        >
          {categoryName}
        </span>
      ))}
    </nav>
  );
}

export default Categories;
