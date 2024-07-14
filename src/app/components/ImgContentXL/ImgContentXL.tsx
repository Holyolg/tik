import toBase64 from "@/app/services/toBase64/toBase64";
import shimmer from "@/app/ui/Shimer/Shimer";
import Image from "next/image";

const ImgContentXL = ({ imgContent }: { imgContent: string[] }) => {
	return (
		<>
			<div className="space-y-8">
				{imgContent.map((img: string) => (
					<div className="relative w-full h-[700px]" key={img}>
						<Image
							className=""
							src={img}
							sizes="2000px"
							fill
							alt="Изображение проекта"
							style={{ objectFit: "cover", borderRadius: "0.5rem" }}
							placeholder={`data:image/svg+xml;base64,${toBase64(
								shimmer(1536, 900)
							)}`}
						/>
					</div>
				))}
			</div>
		</>
	);
};

export default ImgContentXL;
