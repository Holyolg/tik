"use client";
import Image from "next/image";
import { CSSProperties } from "react";
import { Pagination, Zoom } from "swiper/modules";
import { shimmer, toBase64 } from "@/shared/lib";
import { useWindowSize } from "@/shared/hooks/use-window-size";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/zoom";

type Props = {
	imgContent: string[] | undefined;
};

export const ImgContentMobile: React.FC<Props> = ({ imgContent }) => {
	const { width } = useWindowSize();
	return (
		<>
			{imgContent ? (
				<Swiper
					style={
						{
							"--swiper-pagination-color": "#fff",
						} as CSSProperties
					}
					className="h-[550px] rounded-lg"
					modules={[Pagination, Zoom]}
					spaceBetween={40}
					slidesPerView={1}
					pagination={{ clickable: true }}
					zoom={true}
					loop={true}>
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
