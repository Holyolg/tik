export const CategoryButtons = ({onClickCategory, category, onLoading}: {onClickCategory: Function, category: string, onLoading:Function} ) => {

    return (
        <div className="flex items-center sm:space-y-0 space-x-0 lg:space-x-5">
					<button
						onClick={() => {
							{   onClickCategory("genproject");
								category == "genproject" ? "" : onLoading(true);
							}
						}}
						className={
							category === "genproject"
								? " w-full lg:w-72 h-10 bg-black border-black border lg:rounded-lg rounded-l-lg hover:bg-black text-white active:opacity-85"
								: " w-full lg:w-72 h-10 border-black border lg:rounded-lg rounded-l-lg  hover:bg-black hover:text-white active:opacity-85"
						}
					>
						<span>Генпроектирование</span>
					</button>
					<button
						onClick={() => {
							onClickCategory("concept");
							category == "concept" ? "" : onLoading(true);
						}}
						className={
							category === "concept"
								? " w-full lg:w-72 h-10 bg-black border-black border lg:rounded-lg rounded-r-lg hover:bg-black text-white active:opacity-85"
								: " w-full lg:w-72 h-10 border-black border lg:rounded-lg rounded-r-lg  hover:bg-black hover:text-white active:opacity-85"
						}
					>
						Концепция
					</button>
				</div>
    )
};
