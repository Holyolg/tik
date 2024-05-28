"use client";
import { usePathname, useRouter } from "next/navigation";

export default function Redirect({ params }: { params: string}) {
	const pathname = usePathname()
	params = pathname
	const path = pathname.split("/").filter(path => path);
	const category = path[0]
	const type = path[1]
	useRouter().push(`/${category}?category=${type}`);
} 

