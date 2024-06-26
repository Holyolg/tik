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
		<nav className="flex space-x-10 items-center overflow-x-auto">
			{categories.map((categoryName, i) => (
				<span
					onClick={() => onClickCategory(i)}
					key={i}
					className={`hover:opacity-75 cursor-pointer ${
						category == i ? "font-semibold" : " "
					}`}
				>
					{categoryName}
				</span>
			))}
		</nav>
	);
}

const open = {
	type: "spring",
	stiffness: 700,
	damping: 30,
};

export default Categories;
