"use client";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/app/components/Map/Map"), { ssr: false });

export default function About() {
	return (
		<>
			<main className="relative">
				<Map />
			</main>
		</>
	);
}
