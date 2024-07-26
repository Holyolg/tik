"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 w-full mt-14 sm:mt-32">
      <div className=" mx-auto container py-8 flex flex-col-reverse md:flex-row items-center md:justify-between">
        <div className="w-full text-gray-500 flex items-center space-x-4 mt-10 md:mt-0">
          <Link className="flex items-center content-center" href="/">
            <motion.img
              className="w-[110px]"
              src="/logo.svg"
              alt="Logo"
              whileTap={{ scale: 0.97 }}
            ></motion.img>
          </Link>
          <span>ООО «ТИК-ПРОДЖЕКТ», {year}</span>
        </div>
        <ul className="flex flex-col sm:flex-row flex-wrap w-full justify-between md:justify-end md:max-w-xs lg:max-w-xl mt-3 space-y-4 sm:space-y-0 sm:space-x-5 xl:space-x-8 text-gray-500 sm:mt-0">
          <li>
            <Link href="/" className="cursor-pointer hover:opacity-50">
              Главная
            </Link>
          </li>
          <li>
            <Link href="/projects" className="cursor-pointer hover:opacity-50">
              Проекты
            </Link>
          </li>
          <li>
            <Link href="/#about" className="cursor-pointer hover:opacity-50">
              О компании
            </Link>
          </li>
          <li>
            <Link href="/#services" className="cursor-pointer hover:opacity-50">
              Услуги
            </Link>
          </li>
          <li>
            <Link href="/#contacts" className="cursor-pointer hover:opacity-50">
              Контакты
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
