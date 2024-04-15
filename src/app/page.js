"use client";

import { useState } from "react";
import VerticalAccordion from './components/Accordion/Accordion';
import Image from 'next/image';

export default function Home() {
	// const [isShowing, setIsShowing] = useState(true);
	// let cardClass = 'slide relative p-5 cursor-pointer bg-black text-white text-5xl bg-cover bg-center bg-no-repeat w-20'
	// let show = cardClass + ' animate-card'
	// let hide = cardClass + ' animate-card-reverse'


	return (
		<main className="bg-[#003056]">
		<div className="video">
		{/* <iframe className="absolute z-0" width="80%" height="100%" src="https://www.youtube.com/embed/JcYMICpVTCA?si=8LQjeQgxGgfvt_2V" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
		<VerticalAccordion />
		</div>

		</main>
	);
}

// <div class="hero-container flex">
		// 	<div
		// 		className={isShowing ? show : hide}
		// 		onClick={() => setIsShowing(true)}
		// 		onMouseLeave={() => setIsShowing(false)}
		// 	>
		// 		<div className="absolute left-0 bottom-0 origin-top-left -rotate-90">
		// 			КОНЦЕПЦИЯ
		// 		</div>
		// 	</div>
		// 	<div className="slide relative h-[90vh] p-5 cursor-pointer bg-[#132f54] text-white text-5xl flex-1 bg-cover bg-center bg-no-repeat">
		// 		<div className="absolute left-10 bottom-1/2 origin-top-left -rotate-90">
		// 			ГЕНПРОЕКТИРОВАНИЕ
		// 		</div>
		// 	</div>
		// 	<div className="slide relative h-[90vh] p-5 cursor-pointer bg-[#132f54] text-white text-5xl flex-1 bg-cover bg-center bg-no-repeat">
		// 		<div className="absolute left-10 bottom-20 origin-top-left -rotate-90">
		// 			О НАС
		// 		</div>
		// 	</div>
		// </div>