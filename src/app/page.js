"use client";

import { useState } from "react";

export default function Home() {
	const [isShowing, setIsShowing] = useState(false);

	return (
		<div class="hero-container flex">
			<div
				className="slide relative p-5 cursor-pointer bg-[#132f54] text-white text-5xl bg-cover bg-center bg-no-repeat flex-none"
				onMouseEnter={() => setIsShowing(true)}
				onMouseLeave={() => setIsShowing(false)}
			>
				<div className="absolute left-0 bottom-0 origin-top-left -rotate-90">
					КОНЦЕПЦИЯ
				</div>
			</div>
			<div className="slide relative h-[90vh] p-5 cursor-pointer bg-[#132f54] text-white text-5xl flex-1 bg-cover bg-center bg-no-repeat">
				<div className="absolute left-10 bottom-1/2 origin-top-left -rotate-90">
					ГЕНПРОЕКТИРОВАНИЕ
				</div>
			</div>
			<div className="slide relative h-[90vh] p-5 cursor-pointer bg-[#132f54] text-white text-5xl flex-1 bg-cover bg-center bg-no-repeat">
				<div className="absolute left-10 bottom-20 origin-top-left -rotate-90">
					О НАС
				</div>
			</div>
		</div>
	);
}
