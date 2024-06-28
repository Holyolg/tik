import toBase64 from "@/app/services/toBase64/toBase64";
import shimmer from "@/app/ui/Shimer/Shimer";
import Image from "next/image";

const ImgContentXL = ({ imgContent, id }: { imgContent: any; id: string }) => {
	return (
		<>
			{imgContent.map((img: string) => (
				<div className="relative w-full h-[800px] mb-8" key={img}>
					<Image
						className=""
						src={img}
						sizes="1000px"
						fill
						alt="Изображение проекта"
						style={{ objectFit: "cover", borderRadius: "0.5rem" }}
						placeholder={`data:image/svg+xml;base64,${toBase64(
							shimmer(1536, 900)
						)}`}
					/>
				</div>
			))}
		</>
	);
};

export default ImgContentXL;