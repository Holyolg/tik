import { Montserrat } from "next/font/google";
import Menu from "../app/components/Menu/Menu";
import Footer from "./components/Footer/Footer";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
	title: "TIK PRO тестовый",
	description: "TIK PRO тестовый сервер",
	verification: {
		google: "b5nvzgpWzGQRLKd0y3C8WiXjkA-PyErwiEh7XHNJA8A",
		yandex: "c0ca61b48eb6ea99",
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="ru">
			<body className={`${montserrat.className}`}>
				<Menu />
				{children}
				<Footer />
			</body>
		</html>
	);
}
