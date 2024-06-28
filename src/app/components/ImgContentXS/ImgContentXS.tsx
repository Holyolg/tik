import { useWindowSize } from "@/app/services/hooks/useWindowSize/useWindowSize";
import Image from "next/image";
import { CSSProperties } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import toBase64 from "../../services/toBase64/toBase64";
import shimmer from "../../ui/Shimer/Shimer";
const ImgContentXS = ({ imgContent, id }: { imgContent: any; id: string }) => {
	const { width } = useWindowSize();
	return (
		<>
			{imgContent.length > 0 ? (
				<Swiper
					style={
						{
							"--swiper-navigation-color": "#fff",
						} as CSSProperties
					}
					className="h-[550px] rounded-lg shadow-lg"
					modules={[Navigation]}
					spaceBetween={50}
					slidesPerView={1}
					navigation
					centeredSlides={true}
					loop={true}
				>
					{imgContent.map((img: string) => {
						return (
							<SwiperSlide key={img}>
								<Image
									className=""
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
