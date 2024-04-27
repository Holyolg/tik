"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import translationsJson from "../../../../public/translation/translation";

export default function Breadcrumbs() {
	const path = usePathname();
	const pathName = path.split("/").filter(path => path);
	const translations = translationsJson;
	function translate(text) {
		return translations.breadcrumbs[text];
	}

	return (
		<nav
			className="flex text-gray-400 mt-10 overflow-x-auto min-w-full whitespace-nowrap"
			aria-label="Breadcrumb"
		>
			<ul className="inline-flex items-center space-x-4">
				<li className="inline-flex item-center hover:text-gray-700">
					<Link href={"/"}>TIK PRO</Link>
				</li>
				{pathName.map((link, index) => {
					let href = `/${pathName.slice(0, index + 1).join("/")}`;
					return (
						<>
							<li>|</li>
							<li
								key={index}
								className="inline-flex item-center hover:text-gray-700"
							>
								<Link href={href}>
									{translate(pathName[index]).toUpperCase()}
								</Link>
							</li>
						</>
					);
				})}
			</ul>
		</nav>
	);
}
