function Categories({ category, onClickCategory }) {
	const categories = [
		"ЖИЛЬЕ",
		"СОЦИАЛЬНЫЕ",
		"КОНЦЕПТУАЛЬНЫЕ",
		"БЛАГОУСТРОЙСТВО",
	];
	return (
		<div className="categories lg:absolute -top-0 lg:w-10/12 xl:w-11/12 lg:text-white lg:text-xl font-semibold">
			<div className="flex md:flex-row p-4 md:h-[10vh] justify-around flex-col">
				{categories.map((categoryName, i) => (
					<button
						key={i}
						onClick={() => onClickCategory(i)}
						className={`text-left hover:underline decoration-white-100 ${
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
