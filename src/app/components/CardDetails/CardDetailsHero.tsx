import { useParallax } from "@/app/hooks/useWindowSize/useParallax";
import toBase64 from "@/app/lib/toBase64";
import shimmer from "@/app/ui/Shimer/Shimer";
import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import { FC, useRef } from "react";

interface Props {
  title: string;
  subtitle?: string;
  img: string;
  className?: string;
}

export const CardDetailsHero: FC<Props> = ({ title, subtitle, img, className }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);
  return (
    <div className={`min-h-[100vh] relative, ${className}`}>
      <motion.div
        className="absolute z-10 w-full top-1/2"
        ref={ref}
        style={{ y }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}>
        <h2 className="container mx-auto text-xl text-white ">{subtitle}</h2>
        <h1 className="container mx-auto mt-5 text-3xl sm:text-7xl font-semibold font-semibold text-white">
          {title}
        </h1>
      </motion.div>
      <Image
        src={img}
        alt="Изображение проекта"
        style={{ objectFit: "cover", filter: "brightness(65%)" }}
        sizes="2200px"
        fill
        placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(1920, 1080))}`}
        priority={true}
      />
    </div>
  );
};
