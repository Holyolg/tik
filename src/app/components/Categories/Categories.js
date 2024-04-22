function Categories({ category, onClickCategory }) {
	const categories = [
		"ЖИЛЬЕ",
		"СОЦИАЛЬНЫЕ",
		"КОНЦЕПТУАЛЬНЫЕ",
		"БЛАГОУСТРОЙСТВО",
	];
	return (
		<div className="categories absolute -top-0 w-11/12 text-white text-xl">
            <div className="flex item-center  p-1 h-[10vh] justify-around">
			{categories.map((categoryName, i) => (
				<button 
					key={i}
					onClick={() => onClickCategory(i)}
					className={`hover:underline decoration-white-100 ${category == i ? "underline" : " "}`}
				>
					{categoryName}
				</button>
			))}
            </div>
		</div>
	);
}

export default Categories;
