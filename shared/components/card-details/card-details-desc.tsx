import React, { FC } from "react";
import { IData } from "../cards-list";
import { Accordion } from "../ui";

interface Props {
	data: IData;
}

export const CardDetailsDesc: FC<Props> = ({ data }) => {
	return (
		<div className="sticky top-28">
			<ul className="space-y-3">
				{data.category && (
					<li>
						<p className="font-semibold">Тип</p>
						<p className="text-sm">
							{data.category !== "Интерьеры" &&
							data.category !== "Благоустройство" &&
							data.category !== "Здания" &&
							data.category !== "Концепция"
								? `${data.category} здания`
								: data.category}
						</p>
					</li>
				)}
				{data.square && (
					<li>
						<p className="font-semibold">Площадь</p>
						<p className="text-sm">{data.square}</p>
					</li>
				)}
				{data.location && (
					<li>
						<p className="font-semibold">Расположение</p>
						<p className="text-sm">{data.location}</p>
					</li>
				)}
				{data.stage && (
					<li>
						<p className="font-semibold">Стадия</p>
						<p className="text-sm">{data.stage}</p>
					</li>
				)}
				{data.arch && (
					<li>
						<p className="font-semibold">Архитектура</p>
						<a
							href={data.archlink}
							target="_blank"
							className="text-sm hover:opacity-50 after:content-['_↗']">
							{data.arch}
						</a>
					</li>
				)}
				{data.partners && (
					<li>
						<p className="font-semibold">Партнеры</p>

						<a
							href={data.partnerslink}
							target="_blank"
							className="text-sm hover:opacity-50 after:content-['_↗']">
							{data.partners}
						</a>
					</li>
				)}
				{data.customer && (
					<li>
						<p className="font-semibold">Заказчик</p>
						<a
							href={data.customerlink}
							target="_blank"
							className="text-sm hover:opacity-50 after:content-['_↗']">
							{data.customer}
						</a>
					</li>
				)}
				{data.nolinkcustomer && (
					<li>
						<p className="font-semibold">Заказчик</p>
						<p className="text-sm">{data.nolinkcustomer}</p>
					</li>
				)}

				{data.date && (
					<li>
						<p className="font-semibold">Год</p>
						<p className="text-sm">{data.date}</p>
					</li>
				)}
				{data.status && (
					<li>
						<p className="font-semibold">Статус</p>
						<p className="text-sm">{data.status}</p>
					</li>
				)}
				{data.description && <Accordion description={data.description} />}
			</ul>
		</div>
	);
};
