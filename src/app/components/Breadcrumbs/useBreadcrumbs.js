import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { useCrumbText } from "./useCrumbText";
import { useLang } from "./useLang";
import { usePageTitle } from "./usePageTitle";

export const useBreadcrumbs = page => {
	const [dynamicTitle, setDynamicTitle] = useState("");
	const { lang, translations } = useLang();
	const pathname = usePathname();
	const breadcrumbs = document.querySelector(".breadcrumbs");
	const { crumbText } = useCrumbText(page);
	const getDefaultTextGenerator = useCallback(() => crumbText, [crumbText]);
	const getTextGenerator = useCallback(param => ({}[param]), []);
	usePageTitle(page, dynamicTitle);

	useEffect(() => {
		const lastCrumb = document.querySelector(".last-crumb");

		if (lastCrumb) {
			const productTypePathname = pathname.split(`/${page}/`)[1];

			if (!productTypePathname) {
				setDynamicTitle("");
				lastCrumb.textContent = crumbText;
				return;
			}

			const text =
				translations[lang][
					page === "comparison" ? "comparison" : "breadcrumbs"
				][productTypePathname];
			setDynamicTitle(text);
			lastCrumb.textContent = text;
		}
	}, [breadcrumbs, crumbText, lang, pathname, translations, page]);

	return { getDefaultTextGenerator, getTextGenerator };
};
