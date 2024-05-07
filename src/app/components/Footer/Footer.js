"use client";
import { usePathname } from "next/navigation";

export default function Footer() {
	const pathname = usePathname();
	const footerItem = (
		<>
			<footer class=" bg-[#f4f4f4] h-[8vh] w-full px-4 flex justify-center">
				<div class="w-full mx-auto p-2 grid grid-cols-3 text-sm">
					<p className="flex items-center">ТИК ПРОДЖЕКТ</p>
					<ul className="flex flex-col text-center justify-center">
						<li>+7 800 555 3535</li>
						<li>info@tik.pro</li>
						<li>г. Москва, 1-я Тверская-Ямская ул., д.25, стр.1</li>
					</ul>
					<div className="space-x-5 flex items-center justify-end">
						<img className="h-[27px]" src="/telegram.png" />
						<img className="h-[27px]" src="/whatsapp.png" />
					</div>
				</div>
			</footer>
		</>
	);
	const footerItemEmpty = (
		<>
			<footer class="absolute bottom-8 text-white w-1/6 px-4 flex justify-center">
				<div class="w-full mx-auto p-2 grid grid-cols-3 font-semibold">
					<p className="flex items-center text-9xl">
						ТИК <br />
						ПРОДЖЕКТ
					</p>
				</div>
			</footer>
		</>
	);

	return <>{pathname == "/" ? footerItemEmpty : footerItem}</>;
}
