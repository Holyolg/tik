import Image from "next/image";
import { FC } from "react";

interface Props {
	className?: String;
	title?: String | JSX.Element;
	desc?: String;
}

export const GrayCards: FC<Props> = ({ className, title, desc }) => {
	return (
		<>
			<div className="w-full lg:w-52 2xl:w-64 h-40 p-3 rounded-xl flex flex-col justify-between bg-gray-100">
				<b className="text-xl">{title}</b>
				<span className=" lg:text-sm">{desc}</span>
			</div>
		</>
	);
};
