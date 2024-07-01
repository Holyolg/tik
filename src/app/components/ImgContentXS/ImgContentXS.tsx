import { useWindowSize } from "@/app/services/hooks/useWindowSize/useWindowSize";
import toBase64 from "@/app/services/toBase64/toBase64";
import Image from "next/image";
import { CSSProperties } from "react";
import { Pagination, Zoom } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import shimmer from "../../ui/Shimer/Shimer";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/zoom";

const ImgContentXS = ({ imgContent, id }: { imgContent: any; id: string }) => {
	const { width } = useWindowSize();
	return (
		<>
			{imgContent.length > 0 ? (
				<Swiper
					style={
						{
							"--swiper-pagination-color": "#fff",
						} as CSSProperties
					}
					className="h-[550px] rounded-lg shadow-lg"
					modules={[Pagination, Zoom]}
					spaceBetween={40}
					slidesPerView={1}
					pagination={{ clickable: true }}
					zoom={true}
					loop={true}
				>
					{imgContent.map((img: string) => {
						return (
							<SwiperSlide key={img}>
								<Image
									src={img}
									alt="Изображение проекта"
									style={{ objectFit: "cover", borderRadius: "0.5rem" }}
									fill
									sizes="800px"
									placeholder={`data:image/svg+xml;base64,${toBase64(
										shimmer(width, 550)
									)}`}
								/>
							</SwiperSlide>
						);
					})}
				</Swiper>
			) : (
				<h2>Изображения не загрузились</h2>
			)}
		</>
	);
};
export default ImgContentXS;
