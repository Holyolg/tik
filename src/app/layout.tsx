import { Inter } from "next/font/google";
import Head from "next/head";
import { Suspense } from "react";
import Footer from "./components/Footer/Footer";
import Menu from "./components/Menu/Menu";
import "./globals.css";
import Loading from "./loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "TIKPRO - проектная организация",
	description: "Все стадии П и Р ",
	verification: {
		google: "b5nvzgpWzGQRLKd0y3C8WiXjkA-PyErwiEh7XHNJA8A",
		yandex: "c0ca61b48eb6ea99",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="ru">
			<Head>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="manifest" href="/site.webmanifest" />
				<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
				<meta name="msapplication-TileColor" content="#da532c" />
				<meta name="theme-color" content="#ffffff" />
			</Head>
			<body
				className={`${inter.className} min-h-[100vh] flex flex-col justify-between`}
			>
				<Menu />
				<Suspense fallback={<Loading />}>{children}</Suspense>
				<Footer />
			</body>
		</html>
	);
}
