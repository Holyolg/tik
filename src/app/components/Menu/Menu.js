'use client'
import Link from "next/link";
import {usePathname} from 'next/navigation'


export default function Menu() {
	const pathname = usePathname()


	return (
		<div className="menu">
				{pathname == '/general' || pathname == '/concept' ? <Sort/> : <Nav/>}
		</div>
	);
}

const Sort = () => {
	return (
	<>
			<div className="menu-logo w-full flex bg-[#003056] justify-between p-3 border-b text-white text-2xl">
			<div className="flex items-center mx-auto justify-between w-4/5">
			<Link className="" href="/">ЖИЛЬЕ</Link>
			<Link className="" href="/">СОЦИАЛЬНЫЕ</Link>
			<Link className="" href="/">КОНЦЕПТУАЛЬНЫЕ</Link>
			<Link className="" href="/">БЛАГОУСТРОЙСТВО</Link>
			</div>
				<Link className="ml-10" href="/">
					<img className="w-[150px]" src="/logo.png"></img>
				</Link>
			</div>
</>
	)
}

const Nav = () => {
	return (
		<>
		<div className="menu-logo w-full flex justify-end bg-[#003056] p-3 border-b">
		<div className="flex items-center mx-auto justify-between w-4/5">
			</div>
				<Link href="/">
					<img className="w-[150px]" src="/logo.png"></img>
				</Link>
			</div></>
	)
}
