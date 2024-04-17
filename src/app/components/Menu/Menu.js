"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import items from "../../Cards/Cards";
import { useWindowSize } from "../Accordion/useWindowSize";
import Categories from "../Categories/Categories";

export default function Menu() {
	console.log(items);
	const pathname = usePathname();
	const { width, height } = useWindowSize();
	console.log(height);

	return (
		<header className="menu">
			{pathname == "/general" || pathname == "/concept" ? <Sort /> : <Nav />}
		</header>
	);
}

const Sort = () => {
	const [categoryId, setCategoryId] = useState(0);
	const [filteredCategories, setFilteredCategories] = useState([]);
	const filteredCategories = items.filter(item => item.type == categoryId);
	return (
		<>
			<div className="menu-logo w-full flex justify-end bg-[#003056] text-white p-5 border-b h-[10vh]">
				<div className="flex items-center mx-auto justify-between w-4/5">
					<Categories
						type={items.type}
						category={categoryId}
						onClickCategory={i => setCategoryId(i)}
					/>
					<Link className="flex items-center" href="/">
						<img className="w-[150px]" src="/logo.png"></img>
					</Link>
				</div>
			</div>
		</>
	);
};

const Nav = () => {
	return (
		<>
			<div className="menu-logo w-full flex justify-end bg-[#003056] p-5 text-white border-b h-[10vh]">
				<div className="flex items-center mx-auto justify-between w-4/5"></div>
				<Link className="flex items-center" href="/">
					<img className="w-[150px]" src="/logo.png"></img>
				</Link>
			</div>
		</>
	);
};
