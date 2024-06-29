import Link from "next/link";

export const Contacts = () => {
	return (
		<>
			<h2 className="text-4xl lg:text-6xl font-semibold">
				Контактная информация
			</h2>
			<div className="mt-12 flex flex-col space-y-10 xl:space-y-0 xl:flex-row justify-between">
				<div className="flex space-x-16">
					<Link
						href={"https://yandex.ru/maps/-/CDCy5V9-"}
						className="cursor-pointer hover:opacity-75"
					>
						Москва <br /> 1-я Тверская-Ямская ул., 25, стр. 1
					</Link>
					<Link
						href={"https://yandex.ru/maps/-/CDCy5F6b"}
						className="cursor-pointer hover:opacity-75"
					>
						Тамбов <br /> Кронштадтская улица, 4Ак1
					</Link>
				</div>
				<div className="flex flex-row space-x-0 space-x-5 xl:space-x-16 md:items-center">
					<Link
						href="tel:+8 800 555 35 35"
						className="cursor-pointer hover:opacity-75"
					>
						Номер <br /> + 8 800 555 35 35
					</Link>
					<Link
						href="mailto:@info.tikpro"
						className="cursor-pointer hover:opacity-75"
					>
						Почта <br /> @info.tikpro
					</Link>
					<Link
						href="mailto:@info.tikpro"
						className="w-6 cursor-pointer hover:opacity-75"
					>
						<img src="/telegram.png" />
					</Link>
					<Link
						href="mailto:@info.tikpro"
						className="w-6 cursor-pointer hover:opacity-75"
					>
						<img src="/whatsapp.png" />
					</Link>
				</div>
			</div>
			<div className="mt-8">
				<iframe
					className="rounded-lg"
					src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa90f7f2ba45af4e6468c2980a10d94974abf6acb7da27d3f885a84b26606e57d&amp;source=constructor"
					width="100%"
					height="500"
				></iframe>
			</div>
		</>
	);
};
