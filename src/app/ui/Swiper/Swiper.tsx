import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import shimmer from "../Shimer/Shimer";

import toBase64 from "@/app/services/toBase64/toBase64";
import "swiper/css";

export const MainSwiper = ({ img2, img3 }: { img2: string; img3: string }) => {
	return (
		<Swiper
			spaceBetween={50}
			slidesPerView={1}
			onSlideChange={() => console.log("slide change")}
			onSwiper={swiper => console.log(swiper)}
		>
			<SwiperSlide>
				<Image
					className="mt-5"
					src={img2}
					alt="Изображение проекта"
					style={{ objectFit: "cover" }}
					fill
					placeholder={`data:image/svg+xml;base64,${toBase64(
						shimmer(1536, 900)
					)}`}
				/>
			</SwiperSlide>
			<SwiperSlide>
				<Image
					className="mt-5"
					src={img3}
					alt="Изображение проекта"
					style={{ objectFit: "cover" }}
					fill
					placeholder={`data:image/svg+xml;base64,${toBase64(
						shimmer(1536, 900)
					)}`}
				/>
			</SwiperSlide>
		</Swiper>
	);
};
