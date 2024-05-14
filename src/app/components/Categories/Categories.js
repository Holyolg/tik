function Categories({ category, onClickCategory }) {
	const categories = [
		"ВСЕ",
		"ЖИЛЬЕ",
		"ОБЩЕСТВЕННЫЕ",
		"БЛАГОУСТРОЙСТВО",
		"ИНТЕРЬЕРЫ",
	];
	return (
		<div className="categories lg:fixed top-0 right-1/4 z-20 w-1/2 font-bold">
			<div className="flex md:flex-row py-4 md:h-16 justify-between flex-col text-white">
				{categories.map((categoryName, i) => (
					<button
						key={i}
						onClick={() => onClickCategory(i)}
						className={`text-left hover:underline decoration-white-100 min-w-[160px] text-center ${
							category == i ? "underline" : " "
						}`}
					>
						{categoryName}
					</button>
				))}
			</div>
		</div>
	);
}

export default Categories;
