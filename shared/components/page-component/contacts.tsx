import Image from "next/image";
import Link from "next/link";
import mail from "@/public/img/icons/mail.svg";
import phone from "@/public/img/icons/phone.svg";
import { Map } from "../map";
import { FC } from "react";

export const Contacts: FC = () => {
	return (
		<>
			<h2 className="text-4xl lg:text-6xl font-semibold">
				Контактная информация
			</h2>
			<div className="mt-10 flex flex-col space-y-10 xl:space-y-0 xl:flex-row justify-between">
				<div className="flex space-x-5 xl:space-x-16 md:items-center">
					<Link
						href="tel:+8 800 555 35 35"
						className="cursor-pointer hover:opacity-50 flex space-x-4">
						<Image width={18} height={18} alt="телефон" src={phone}></Image>
						<span>+7 (495) 006-29-87</span>
					</Link>
					<Link
						href="mailto:@info.tikpro"
						className="cursor-pointer hover:opacity-50 flex space-x-4">
						<Image width={18} height={18} alt="почта" src={mail}></Image>
						<span>info@tik.pro</span>
					</Link>
				</div>
			</div>
			<div className="mt-8">
				<Map />
			</div>
		</>
	);
};
