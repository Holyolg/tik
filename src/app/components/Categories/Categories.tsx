interface ICategories {
	category: number;
	onClickCategory: Function;
}

function Categories({ category, onClickCategory }: ICategories) {
	const categories: string[] = [
		"Все",
		"Жилые",
		"Общественные",
		"Интерьеры",
		"Благоустройство",
	];

	return (
		<nav className="flex space-x-10 items-center overflow-x-auto snap-x snap-mandatory mt-6 xl:mt-0">
			{categories.map((categoryName, i) => (
				<span
					onClick={() => onClickCategory(i)}
					key={i}
					className={`snap-always snap-center hover:opacity-75 cursor-pointer ${
						category == i ? "font-semibold" : " "
					}`}
				>
					{categoryName}
				</span>
			))}
		</nav>
	);
}

export default Categories;
