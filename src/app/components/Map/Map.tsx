import Image from "next/image";

export const Map = () => (
	<section className="w-full">
		<div className="flex flex-col lg:flex-row justify-between lg:space-x-10 space-y-6 lg:space-y-0">
			<div>
				<p>Москва 1-я Тверская-Ямская ул., 25, стр. 1</p>
				<a href="https://yandex.ru/maps/-/CDCy5F6b">
					<Image
						src={"/moscovMap.jpg"}
						width={850}
						height={500}
						alt="Офис в Москве"
						className="rounded-lg mt-4"
						sizes="900"
					/>
				</a>
			</div>
			<div>
				<p>Тамбов Кронштадтская улица, 4Ак1</p>
				<a href="https://yandex.ru/maps/-/CDCy5V9-">
					<Image
						src={"/tambovMap.jpg"}
						width={850}
						height={500}
						alt="Офис в Москве"
						className="rounded-lg mt-4"
						sizes="900"
					/>
				</a>
			</div>
		</div>
	</section>
);
