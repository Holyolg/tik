"use client";
import { useEffect, useRef, useState } from "react";

export const Video = ({ src }: { src: string }) => {
  const [isWaiting, setIsWaiting] = useState(false);

  const videoElementRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoElementRef.current) {
      return;
    }

    const waitingHandler = () => {
      console.log("waiting");
      setIsWaiting(true);
    };

    const playHandler = () => {
      console.log("play");
      setIsWaiting(false);
    };

    const element = videoElementRef.current;

    element.addEventListener("waiting", waitingHandler);
    element.addEventListener("playing", playHandler);
  }, [videoElementRef]);

  return (
    <video
      ref={videoElementRef}
      className={
        isWaiting
          ? "blur-lg md:w-full md:h-[100vh] h-[100vh] object-cover"
          : "md:w-full md:h-[100vh] h-[100vh] object-cover"
      }
      width="100%"
      height="100%"
      preload="none"
      autoPlay
      loop
      muted
      playsInline
    >
      <source src={src} type="video/mp4" />
    </video>
  );
};
