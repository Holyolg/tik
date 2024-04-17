function Categories({ category, onClickCategory }) {
	const categories = [
		"ЖИЛЬЕ",
		"СОЦИАЛЬНЫЕ",
		"КОНЦЕПТУАЛЬНЫЕ",
		"БЛАГОУСТРОЙСТВО",
	];
	return (
		<div className="categories">
			{categories.map((categoryName, i) => (
				<div
					key={i}
					onClick={() => onClickCategory(i)}
					className={category == i ? "text-violet-600" : " "}
				>
					{categoryName}
				</div>
			))}
		</div>
	);
}

export default Categories;
