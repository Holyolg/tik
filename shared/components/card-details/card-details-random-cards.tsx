import { Skeleton } from "@mui/material";
import { FC } from "react";
import { Card } from "../card";
import { IData } from "../cards-list";

interface Props {
	cards: IData[];
	isLoading: boolean;
	width: number;
}

export const CardDetailsRandomCards: FC<Props> = ({
	cards,
	isLoading,
	width,
}) => {
	const skeletons = [...new Array(2)].map((_, index) => (
		<Skeleton
			sx={{ borderRadius: "0.5rem" }}
			variant="rounded"
			height={width > 1920 ? 360 : 300}
			key={index}
		/>
	));

	return (
		<div className="grid grid-cols-1 w-full md:grid-cols-2 gap-10 mt-10">
			{isLoading
				? skeletons
				: cards.map((card: any) => {
						return (
							<Card
								key={card.id}
								id={card.id}
								title={card.title}
								link={card.link}
								img={card.img}
								subtitle={card.subtitle}
								category={card.category}
							/>
						);
				  })}
		</div>
	);
};
