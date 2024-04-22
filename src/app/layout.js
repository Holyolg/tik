import { Inter } from "next/font/google";
import "./globals.css";
import Menu from "./components/Menu/Menu";

const inter = Inter({ subsets: ["latin"] });


export const metadata = {
	title: "TIK PRO",
	description: "TIK PRO",
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
