import toBase64 from "@/app/services/toBase64/toBase64";
import shimmer from "@/app/ui/Shimer/Shimer";
import Image from "next/image";

type Props = {
  imgContent: string[] | undefined;
};

const ImgContentXL: React.FC<Props> = ({ imgContent }) => {
  return (
    <div className="space-y-8">
      {imgContent?.map((img: string) => (
        <div className="relative w-full h-[700px]" key={img}>
          <Image
            src={img}
            sizes="1400px"
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
  );
};

export default ImgContentXL;
