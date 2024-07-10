export const TypeButtons = ({onClickType, type, onLoading}: {onClickType: Function, type: string, onLoading:Function} ) => {

    return (
        <div className="flex items-center sm:space-y-0 space-x-0 lg:space-x-5">
					<button
						onClick={() => {
							{   onClickType("genproject");
								type == "genproject" ? "" : onLoading(true);
							}
						}}
						className={
							type === "genproject"
								? " w-full lg:w-72 h-10 bg-black border-black border lg:rounded-lg rounded-l-lg hover:bg-black text-white active:opacity-85"
								: " w-full lg:w-72 h-10 border-black border lg:rounded-lg rounded-l-lg  hover:bg-black hover:text-white active:opacity-85"
						}
					>
						<span>Генпроектирование</span>
					</button>
					<button
						onClick={() => {
							onClickType("concept");
							type == "concept" ? "" : onLoading(true);
						}}
						className={
							type === "concept"
								? " w-full lg:w-72 h-10 bg-black border-black border lg:rounded-lg rounded-r-lg hover:bg-black text-white active:opacity-85"
								: " w-full lg:w-72 h-10 border-black border lg:rounded-lg rounded-r-lg  hover:bg-black hover:text-white active:opacity-85"
						}
					>
						Концепции
					</button>
				</div>
    )
};
