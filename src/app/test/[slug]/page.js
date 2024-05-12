"use client";
import { useRouter } from "next/navigation";

export default function CardCategory({ params }) {
	params = "concept";
	useRouter().push("/concept?category=2");
}
