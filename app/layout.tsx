import { Inter } from "next/font/google";
import { Suspense } from "react";
import Loading from "./loading";
import { Header } from "../shared/components/header";
import { Footer } from "../shared/components/footer";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "TIK PRO, проектная организация",
	description: "Все стадии П и Р",
	keywords: [
		"Проектирование",
		"Тик про",
		"tik pro",
		"проектная организация",
		"тик про проекты",
		"тик про проектная организация",
		"проектная организация Тамбов",
		"проектная организация Москва",
		"проектирование подрядчик",
		"проектная",
	],
	verification: {
		google: "tDP_s_6lp0HblEYeB0rGg6HPxIvj-pThxaEwoZ5bVhY",
		yandex: "8789f162c0f96504",
	},
	icons: {
		icon: { url: "/icon.png", sizes: "180x180", type: "image/pgn" },
		apple: "./icons/apple-icon.png",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="ru">
			<body
				className={`${inter.className} min-h-screen flex flex-col justify-between antialiased`}>
				<Header />
				<Suspense fallback={<Loading />}>{children}</Suspense>
				<Footer />
			</body>
		</html>
	);
}
