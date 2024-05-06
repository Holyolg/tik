import { Inter } from "next/font/google";
import Footer from "../components/Footer/Footer";
import Menu from "../components/Menu copy/MenuCopy";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "TIK PRO тестовый 2",
	description: "TIK PRO тестовый сервер",
	verification: {
		google: "b5nvzgpWzGQRLKd0y3C8WiXjkA-PyErwiEh7XHNJA8A",
		yandex: "c0ca61b48eb6ea99",
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="ru">
			<body className={`${inter.className}`}>
				<Menu />
				{children}
				<Footer />
			</body>
		</html>
	);
}
