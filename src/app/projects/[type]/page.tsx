"use client";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";

export default function Redirect({ params }: { params: string }) {
	const pathname = usePathname();
	params = pathname;
	const path = pathname.split("/").filter(path => path);
	const category = path[0];
	const type = path[1];
	useRouter().push(`/${category}?category=${type}`);
}
