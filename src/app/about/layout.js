import { YMapLoader } from "../components/YMapLoader/YMapLoader";

export const metadata = {
	title: "TIK PRO тестовый о компании",
	description: "TIK PRO тестовый сервер",

    
};

export default function RootLayout({ children }) {
	return (
		<html lang="ru">
			<body>
								<YMapLoader/>

				{children}
			</body>
		</html>
	);
}
