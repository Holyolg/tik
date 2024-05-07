function Categories({ category, onClickCategory }) {
	const categories = [
		"ВСЕ",
		"ЖИЛЬЕ",
		"СОЦИАЛЬНЫЕ",
		"КОНЦЕПТУАЛЬНЫЕ",
		"БЛАГОУСТРОЙСТВО",
	];
	return (
		<div className="categories lg:fixed top-0 z-20 lg:w-10/12 xl:w-9/12 lg:text-xl font-semibold">
			<div className="flex md:flex-row py-4 pl-36 md:h-[8vh] justify-around flex-col text-white">
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
