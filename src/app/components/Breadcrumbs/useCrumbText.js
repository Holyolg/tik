import translationsJson from "@/public/translations/translations.json";

export const useCrumbText = initialText => {
	const crumbText = translationsJson[lang].breadcrumbs[initialText];

	return { crumbText };
};
