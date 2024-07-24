"use client";
import { useState } from "react";

export const Video = ({ src, ...props }: { src: string }) => {
	const [isWaiting, setIsWaiting] = useState(false);
	return (
		<video
			{...props}
			src={src}
			className={
				isWaiting
					? "blur-lg md:w-full md:h-[100vh] h-[100vh] object-cover brightness-50"
					: "md:w-full md:h-[100vh] h-[100vh] object-cover brightness-50"
			}
			width="100%"
			height="100%"
			preload="none"
			autoPlay
			loop
			muted
			playsInline
		/>
	);
};
