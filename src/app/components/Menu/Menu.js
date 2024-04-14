import Link from "next/link";

export default function Menu() {
	return (
		<div className="menu">
			<div className="menu-logo">
				<Link href="/">TIK</Link>
			</div>
			<div className="menu-logo">
				<Link href="/project">Project</Link>
			</div>
			<div className="menu-logo">
				<Link href="/contacts">TIK</Link>
			</div>
		</div>
	);
}
