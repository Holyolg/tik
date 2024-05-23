import toBase64 from "../../services/toBase64/toBase64";
import shimmer from "../../ui/Shimer/Shimer";
import Image from "next/image";

export default function CardDetails({ data }) {
	return (
		<>
			<h2 className="text-2xl mt-10 font-semibold">{data.title}</h2>
			<div className="mt-5">
				<Image
					src={data.img}
					width={1536}
					height={600}
					alt="Изображение проекта"
					style={{ height: "600px", objectFit: "cover" }}
					fill={false}
					placeholder={`data:image/svg+xml;base64,${toBase64(
						shimmer(1536, 600)
					)}`}
					priority={true}
				/>
				<ul className="">
					<li className="mt-5 text-xl">{data.date}</li>
					<li>ДАТА ПРОЕКТИРОВАНИЯ</li>
					<li className="md:text-right text-xl">{data.type}</li>
					<li className="md:text-right">ТИП ПРОЕКТА</li>
					<li className="ordinal text-xl">
						{data.square} M<sup>2</sup>
					</li>
					<li>ПЛОЩАДЬ</li>
					<li className="md:text-right text-xl">{data.location}</li>
					<li className="md:text-right">МЕСТОПОЛОЖЕНИЕ</li>
					<li className="text-xl">{data.status}</li>
					<li>СТАТУС</li>
				</ul>
			</div>

			<h2 className="text-2xl mt-10 font-semibold">ОПИСАНИЕ ПРОЕКТА</h2>
			<p className="mt-5">{data.description}</p>
			<Image
				className="mt-5"
				src={data.img2}
					width={1536}
					height={600}
					alt="Изображение проекта"
					style={{ height: "600px", objectFit: "cover" }}
					fill={false}
					placeholder={`data:image/svg+xml;base64,${toBase64(
						shimmer(1536, 600)
					)}`}
			/>
			<p className="mt-5">{data.text}</p>
			<Image
				className="mt-5"
				src={data.img3}
					width={1536}
					height={600}
					alt="Изображение проекта"
					style={{ height: "600px", objectFit: "cover" }}
					fill={false}
					placeholder={`data:image/svg+xml;base64,${toBase64(
						shimmer(1536, 600)
					)}`}
			/>
		</>
	);
}
