import toBase64 from "@/app/services/toBase64/toBase64";
import shimmer from "@/app/ui/Shimer/Shimer";
import Image from "next/image";

export const About = () => {
	return (
		<div className="w-full h-[450px] relative">
			<Image
				src="/about.png"
				alt="about"
				style={{ objectFit: "cover", borderRadius: "0.5rem" }}
				fill
				sizes="1300px"
				placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(550, 250))}`}
			/>
		</div>
	);
};
