"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useWindowSize } from "../Accordion/useWindowSize";

const Menu = () => {
	// const categories = [
	// 	"ЖИЛЬЕ",
	// 	"СОЦИАЛЬНЫЕ",
	// 	"КОНЦЕПТУАЛЬНЫЕ",
	// 	"БЛАГОУСТРОЙСТВО",
	// ];
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
		<header className="menu fixed top-0 z-10 w-full bg-[#073355]/[.75]">
			<div className="menu-logo w-full flex py-2 px-8 border-b border-white h-16">
				<Link className="flex items-center" href="/">
					<motion.img
						className="w-[110px]"
						src="/logoWhite.svg"
						alt="Logo"
						whileTap={{ scale: 0.97 }}
					></motion.img>
				</Link>
				<div className="flex items-center mx-auto justify-between w-4/5"></div>
			</div>
		</header>
	);

	return <>{pathname == "/" ? homeHeader : ""}</>;
};

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

// export function Sort({ chooseCategory }) {
// 	const [categoryId, setCategoryId] = useState(0);
// 	// const [filteredCategories, setFilteredCategories] = useState([]);
// 	// const filterCategories = items.filter(item => item.type == categoryId);
// 	return (
// 		<>
// 			<div className="menu-logo w-full flex justify-end bg-[#003056] text-white p-5 border-b h-[10vh]">
// 				<div className="flex items-center mx-auto justify-between w-4/5">
// 					{/* <Categories
// 						type={items.type}
// 						category={categoryId}
// 						onClickCategory={i => {
// 							setCategoryId(i);
// 							// setFilteredCategories(filterCategories);
// 							chooseCategory(filterCategories);
// 						}}
// 					/> */}
// 					<Link className="flex items-center" href="/">
// 						<img className="w-[150px]" src="/logo.png"></img>
// 					</Link>
// 				</div>
// 			</div>
// 		</>
// 	);
// }

// const Nav = () => {
// 	return (
// 		<div className="menu-logo w-full flex justify-end bg-[#003056] p-5 text-white border-b h-[10vh]">
// 			<div className="flex items-center mx-auto justify-between w-4/5"></div>
// 			<Link className="flex items-center" href="/">
// 				<img className="w-[150px]" src="/logo.png"></img>
// 			</Link>
// 		</div>
// 	);
// };

export default Menu;
