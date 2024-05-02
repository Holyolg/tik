import { Inter } from "next/font/google";
import "./globals.css";
import Menu from "./components/Menu/Menu";

const inter = Inter({ subsets: ["latin"] });


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
			<body className={`${inter.className}`}>
			<Menu 
			/>
				{children}
			</body>
		</html>
	);
}
