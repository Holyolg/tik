import classNames from "classnames";
import Image from "next/image";
import { FC } from "react";

interface Props {
	className?: String;
}

export const AboutDesc: FC<Props> = ({ className }) => {
	return (
		<>
			<div
				className={classNames(
					"flex flex-col justify-between max-w-xl xl:max-w-3xl",
					className
				)}>
				<p className=" text-gray-500 leading-relaxed mt-10 lg:mt-0">
					ТИК-ПРОДЖЕКТ - команда архитекторов, конструкторов, инженеров и
					ТИМ-специалистов. <br /> В аббревиатуре «TIK»: «Technologies
					Innovations Knowledge» заложены основные принципы и ценности компании,
					которым мы следуем с 2017 года. <br /> Применение современных
					технологий, креативность и энергичность молодых специалистов, знания и
					опыт старших коллег - такой симбиоз позволяет нам создавать уникальный
					продукт, задающий новые стандарты качества и удовлетворяющий всем
					потребностям наших заказчиков. <br />
					Основной вид деятельности компании - оказание услуг генпроектирования.
					Мы проектируем жилые и многофункциональные комплексы, офисные здания и
					торговые центры, социальные объекты, а также занимаемся разработкой
					архитектурных концепций, интерьеров и комфортной городской среды.
				</p>
			</div>
			<div className="">
				<Image
					width={500}
					height={158}
					src="/logo.svg"
					alt="logo"
					sizes="400px"
				/>
			</div>
		</>
	);
};
