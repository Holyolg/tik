"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import translationsJson from "../../../../public/translation/translation.json";

interface IBreadcrumbs {
	pageTitle: string;
	category: string;
}
interface ITranslations {
	breadcrumbs: {
		[project: string]: string;
		concept: string;
		genproject: string;
		about: string;
		homes: string;
		conceptual: string;
		improvement: string;
		social: string;
	};
}

export default function Breadcrumbs({ pageTitle, category }: IBreadcrumbs) {
	const path = usePathname();
	const pathName = path.split("/").filter(path => path);
	pathName.pop();

	const translations: ITranslations = translationsJson;
	function translate(text: string) {
		return translations.breadcrumbs[text];
	}

	return (
		<nav
			className="flex text-gray-400 mt-10 overflow-x-auto min-w-full whitespace-nowrap uppercase"
			aria-label="Breadcrumb"
		>
			<ul className="inline-flex items-center space-x-3">
				<li className="inline-flex item-center hover:text-gray-700">
					<Link href={"/"}>TIK PRO</Link>
				</li>
				{pathName.map((link, index) => {
					let href = `/${pathName.slice(0, index + 1).join("/")}`;
					return (
						<li key={index} className="inline-flex item-center  space-x-3">
							<p>|</p>
							<Link className="hover:text-gray-700" href={href}>
								{translate(pathName[index])}
							</Link>
						</li>
					);
				})}
				<li className="inline-flex item-center space-x-3">
					<p>|</p>
					<p className="text-gray-700">{translate(category)}</p>
				</li>
				<li className="inline-flex item-center space-x-3">
					<p>|</p>
					<p className="text-gray-700">{pageTitle}</p>
				</li>
			</ul>
		</nav>
	);
}
