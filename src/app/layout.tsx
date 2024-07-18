import { Inter } from "next/font/google";
import { Suspense } from "react";
import Footer from "./components/Footer/Footer";
import Menu from "./components/Menu/Menu";
import "./globals.css";
import Loading from "./loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TIK PRO, проектная организация",
  description: "Все стадии П и Р",
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
