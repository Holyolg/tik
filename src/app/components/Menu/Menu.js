"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useActionState, useState } from "react";
import items from "../../Data/Cards";
import { useWindowSize } from "../Accordion/useWindowSize";
import Categories from "../Categories/Categories";

export default function Menu({}) {
const [state, setState] = useState('123')
const [filteredCategories, setFilteredCategories] = useState([]);
console.log(filteredCategories)
const changeCategory = (category) => {
	setFilteredCategories(category)
	console.log(category)
}

	const pathname = usePathname();
	const { width, height } = useWindowSize();

	return (
		<header className="menu">
							<p>{state}</p>
			{pathname == "/general" || pathname == "/project/concept" ? <Sort onClickCategory={changeCategory} /> : <Nav />}
		</header>
	);
}

function Sort({onClickCategory}) {
	const [state, setState] = useState('')
	const click = (state) => {
		onChange(state)
	}
	console.log(state)
	const [categoryId, setCategoryId] = useState(0);
	const [filteredCategories, setFilteredCategories] = useState([]);
	const filterCategories = items.filter(item => item.type == categoryId);
	console.log(filteredCategories)
	return (
		<>
			<div className="menu-logo w-full flex justify-end bg-[#003056] text-white p-5 border-b h-[10vh]">
				<div className="flex items-center mx-auto justify-between w-4/5">
					<Categories
						type={items.type}
						category={categoryId}
						onClickCategory={(i) => {setCategoryId(i), setFilteredCategories(filterCategories)}}
					/>
        <button onClick={() => {onChange('запущен')}}>Запустить бумеранг</button>
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
