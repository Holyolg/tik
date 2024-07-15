"use client";

import { useEffect, useRef, useState } from "react";
const PLAYING_DEBOUNCE_TIME = 50;
const WAITING_DEBOUNCE_TIME = 200;

interface IVideo {
	src: string;
}

export const Video = ({ src, ...props }: IVideo) => {
	const [isPlaying, setIsPlaying] = useState(false);
	const [isWaiting, setIsWaiting] = useState(false);

	const isWaitingTimeout: { current: NodeJS.Timeout | null } = useRef(null);
	const isPlayingTimeout: { current: NodeJS.Timeout | null } = useRef(null);

	const videoElementRef = useRef<HTMLVideoElement | null>(null);


	useEffect(() => {
		if (!videoElementRef.current) {
			return;
		}

		const waitingHandler = () => {
			clearTimeout(isWaitingTimeout.current as NodeJS.Timeout);

			isWaitingTimeout.current = setTimeout(() => {
				setIsWaiting(true);
			}, WAITING_DEBOUNCE_TIME);
		};

		const playHandler = () => {
			clearTimeout(isWaitingTimeout.current as NodeJS.Timeout);
			clearTimeout(isPlayingTimeout.current as NodeJS.Timeout);

			isPlayingTimeout.current = setTimeout(() => {
				setIsPlaying(true);
				setIsWaiting(false);
			}, PLAYING_DEBOUNCE_TIME);
		};

		const pauseHandler = () => {
			clearTimeout(isWaitingTimeout.current as NodeJS.Timeout);
			clearTimeout(isPlayingTimeout.current as NodeJS.Timeout);

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
			clearTimeout(isWaitingTimeout.current as NodeJS.Timeout);
			clearTimeout(isPlayingTimeout.current as NodeJS.Timeout);

			element.removeEventListener("waiting", waitingHandler);
			element.removeEventListener("play", playHandler);
			element.removeEventListener("playing", playHandler);
			element.removeEventListener("pause", pauseHandler);
		};
	}, [videoElementRef]);

	// для кнопки паузы
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
		<video
			{...props}
			ref={videoElementRef}
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
