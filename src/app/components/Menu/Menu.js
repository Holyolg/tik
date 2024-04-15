import Link from "next/link";

export default function Menu() {
	return (
		<div className="menu">
			<div className="menu-logo w-full flex justify-end bg-[#003056] p-3 border-b">
				<Link href="/">
					<img className="w-[150px]" src="/logo.png"></img>
				</Link>
			</div>
			{/* <div className="menu-logo">
				<Link href="/info">Project</Link>
			</div>
			<div className="menu-logo">
				<Link href="/contacts">TIK</Link>
			</div> */}
		</div>
	);
}
