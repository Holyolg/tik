import { useEffect, useRef, useState } from "react";
const PLAYING_DEBOUNCE_TIME = 50;
const WAITING_DEBOUNCE_TIME = 200;

export const Video = ({ src, ...props }) => {
	const [isPlaying, setIsPlaying] = useState(false);
	const [isWaiting, setIsWaiting] = useState(false);

	const isWaitingTimeout = useRef(null);
	const isPlayingTimeout = useRef(null);

	const videoElementRef = useRef();

	useEffect(() => {
		if (!videoElementRef.current) {
			return;
		}

		const waitingHandler = () => {
			clearTimeout(isWaitingTimeout.current);

			isWaitingTimeout.current = setTimeout(() => {
				setIsWaiting(true);
			}, WAITING_DEBOUNCE_TIME);
		};

		const playHandler = () => {
			clearTimeout(isWaitingTimeout.current);
			clearTimeout(isPlayingTimeout.current);

			isPlayingTimeout.current = setTimeout(() => {
				setIsPlaying(true);
				setIsWaiting(false);
			}, PLAYING_DEBOUNCE_TIME);
		};

		const pauseHandler = () => {
			clearTimeout(isWaitingTimeout.current);
			clearTimeout(isPlayingTimeout.current);

			isPlayingTimeout.current = setTimeout(() => {
				setIsPlaying(false);
				setIsWaiting(false);
			}, PLAYING_DEBOUNCE_TIME);
		};

		const element = videoElementRef.current;

		element.addEventListener("waiting", waitingHandler);
		element.addEventListener("play", playHandler);
		element.addEventListener("playing", playHandler);
		element.addEventListener("pause", pauseHandler);

		// clean up
		return () => {
			clearTimeout(isWaitingTimeout.current);
			clearTimeout(isPlayingTimeout.current);

			element.removeEventListener("waiting", waitingHandler);
			element.removeEventListener("play", playHandler);
			element.removeEventListener("playing", playHandler);
			element.removeEventListener("pause", pauseHandler);
		};
	}, [videoElementRef]);

	const handlePlayPauseClick = () => {
		if (videoElementRef.current) {
			if (isPlaying) {
				videoElementRef.current.pause();
			} else {
				videoElementRef.current.play();
			}
		}
	};

	return (
		<div>
			<video
				{...props}
				ref={videoElementRef}
				src={src}
				className={
					isWaiting
						? "blur-lg md:w-full md:h-[90vh] h-[60vh] object-cover"
						: "md:w-full md:h-[90vh] h-[60vh] object-cover"
				}
				width="1920"
				height="1080"
				preload="none"
				autoPlay
				loop
				muted
				playsInline
			/>
		</div>
	);
};
