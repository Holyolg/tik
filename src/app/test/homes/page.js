"use client";
import { useRouter } from "next/navigation";

export default function Redirect() {
	useRouter().push("/concept?category=0");
}
