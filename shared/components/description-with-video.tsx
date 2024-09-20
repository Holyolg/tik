import classNames from "classnames";
import { FC } from "react";

interface Props {
	className?: string;
	desc: JSX.Element;
	video: string;
}

export const DescriptionWithVideo: FC<Props> = ({ className, desc, video }) => {
	return (
		<div
			className={classNames(
				"mt-6 flex flex-col w-full h-full justify-between gap-4 text-gray-500",
				className
			)}>
			<div className="max-w-2xl xl:max-w-3xl">{desc}</div>
			<div className="min-h-fit non-clickable relative bg-[url('/genproject_min.jpg')] bg-cover bg-no-repeat bg-center rounded-lg max-w-2xl xl:max-w-4xl w-full">
				<video
					className="max-w-2xl xl:max-w-4xl h-full object-cover rounded-lg"
					width="100%"
					height="100%"
					preload="none"
					autoPlay
					loop
					muted
					playsInline>
					<source src={video} type="video/mp4" />
				</video>
			</div>
		</div>
	);
};
