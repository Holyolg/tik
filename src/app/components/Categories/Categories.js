import Link from "next/link";
import { useState } from "react";

function Categories({ category, onClickCategory }) {
	const [open, setOpen] = useState(false);

	const categories = [
		// "ВСЕ",
		"ЖИЛЫЕ",
		"ОБЩЕСТВЕННЫЕ",
		"ИНТЕРЬЕРЫ",
		"БЛАГОУСТРОЙСТВО",
	];

	return (
		<>
			<header className="menu fixed top-0 z-10 w-full text-[#003056] font-bold text-xl">
				<div className="menu-logo w-full flex py-2 px-20 h-16">
					<Link className="flex items-center" href="/">
						<img className="w-[110px]" src="/logo.svg" alt="Logo"></img>
					</Link>

					<div className="flex items-center w-full justify-around">
						<div
							onClick={() => setOpen(!open)}
							className="cursor-pointer  flex items-center hover:underline relative"
							href="/"
						>
							<div className="w-2 h-2 mr-2 relative border-[#003056] border-r-2 border-b-2 rotate-45">
								{/* <span className="bg-[#003056] float-right left-10 w-[2px] h-4  block rotate-[35deg]  rounded-sm"></span>
								<span className="bg-[#003056] left-0 float-right w-[2px] h-4  block rotate-[-35deg] rounded-sm"></span> */}
							</div>
							ПРОЕКТ
							{open ? (
								<div className="categories font-bold absolute top-5">
									<div className="py-4">
										{categories.map((categoryName, i) => (
											<div
												key={i}
												onClick={() => onClickCategory(i)}
												className={`hover:underline decoration-white-100 text-sm min-w-[160px] ${
													category == i ? "underline" : " "
												}`}
											>
												{categoryName}
											</div>
										))}
									</div>
								</div>
							) : (
								""
							)}
						</div>
						<Link className="flex items-center hover:underline" href="/about">
							О НАС
						</Link>
						<Link
							className="flex items-center hover:underline"
							href="/contacts"
						>
							КОНТАКТЫ
						</Link>
					</div>
					<Link className="flex items-center hover:underline" href="/">
						EN
					</Link>
				</div>
			</header>
		</>
	);
}

export default Categories;
