"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useWindowSize } from "../Accordion/useWindowSize";

export default function Menu({ category, onClickCategory, name }) {
	const categories = [
		"ЖИЛЬЕ",
		"СОЦИАЛЬНЫЕ",
		"КОНЦЕПТУАЛЬНЫЕ",
		"БЛАГОУСТРОЙСТВО",
	];
	// const [filteredCategories, setFilteredCategories] = useState([]);
	// function chooseCategory(category) {
	// 	setFilteredCategories(category);
	// 	console.log(filteredCategories);
	// }
	const pathname = usePathname();
	const { width, height } = useWindowSize();

	// const [categoryId, setCategoryId] = useState(0);
	// const filterCategories = items.filter(item => item.type == categoryId);

	return (
		<header className="menu fixed z-10 w-full bg-[#e8e8e8a1]  backdrop-blur-xl text-black">
			<div className="menu-logo w-full flex p-2 border-b border-gray-600 h-[8vh]">
				<Link className="flex items-center" href="/">
					<img className="w-[180px]" src="/logo.png" alt="Logo"></img>
					<p className="text-sm">
						Technologies <br /> Innovations <br /> Knowledge
					</p>
				</Link>
				<div className="flex items-center mx-auto justify-between w-4/5"></div>
			</div>
		</header>
	);
}

{
	/* <Categories
					type={items.type}
					// category={categoryId}
					onClickCategory={i => {
						chooseCategory(i);
						// setFilteredCategories(filterCategories);
					}}
				/> */
}

{
	/* <Sort
chooseCategory={chooseCategory}
onClick={() => showCards(filteredCategories)}
/> */
}

export function Sort({ chooseCategory }) {
	const [categoryId, setCategoryId] = useState(0);
	// const [filteredCategories, setFilteredCategories] = useState([]);
	// const filterCategories = items.filter(item => item.type == categoryId);
	return (
		<>
			<div className="menu-logo w-full flex justify-end bg-[#003056] text-white p-5 border-b h-[10vh]">
				<div className="flex items-center mx-auto justify-between w-4/5">
					{/* <Categories
						type={items.type}
						category={categoryId}
						onClickCategory={i => {
							setCategoryId(i);
							// setFilteredCategories(filterCategories);
							chooseCategory(filterCategories);
						}}
					/> */}
					<Link className="flex items-center" href="/">
						<img className="w-[150px]" src="/logo.png"></img>
					</Link>
				</div>
			</div>
		</>
	);
}

const Nav = () => {
	return (
		<div className="menu-logo w-full flex justify-end bg-[#003056] p-5 text-white border-b h-[10vh]">
			<div className="flex items-center mx-auto justify-between w-4/5"></div>
			<Link className="flex items-center" href="/">
				<img className="w-[150px]" src="/logo.png"></img>
			</Link>
		</div>
	);
};
