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

	const homeHeader = (
		<header className="menu fixed top-0 z-10 w-full bg-[#073355]/[.75] text-black ">
			<div className="menu-logo w-full flex py-2 px-20 border-b border-white h-16">
				<div className="flex items-center mx-auto justify-between w-4/5"></div>
				<Link className="flex items-center" href="/">
					<img className="w-[110px]" src="/logoWhite.svg" alt="Logo"></img>
				</Link>
			</div>
		</header>
	);

	return <>{pathname == "/" ? homeHeader : ""}</>;
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
