"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export const TypeButtons = ({
	onClickType,
	type,
}: {
	onClickType: Function;
	type: string | null;
}) => {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const params = new URLSearchParams(searchParams.toString());

	const createQueryString = useCallback(
		(name: string, value: string) => {
			params.set(name, value);

			return params.toString();
		},
		[searchParams]
	);

	//сброс категории
	params.set("category", "Все");

	return (
		<div className="flex items-center sm:space-y-0 space-x-0 lg:space-x-5">
			<button
				onClick={() => {
					{
						onClickType("genproject");

						router.push(
							pathname + "?" + createQueryString("type", "genproject"),
							{
								scroll: false,
							}
						);
					}
				}}
				className={
					type === "genproject"
						? " w-full lg:w-72 h-10 bg-black border-black border lg:rounded-lg rounded-l-lg hover:bg-black text-white active:opacity-85"
						: " w-full lg:w-72 h-10 border-black border lg:rounded-lg rounded-l-lg  hover:bg-black hover:text-white active:opacity-85"
				}
			>
				<span>Генпроектирование</span>
			</button>
			<button
				onClick={() => {
					onClickType("concept");

					router.push(
						`${pathname}?
							${createQueryString("type", "concept")}`,
						{
							scroll: false,
						}
					);
				}}
				className={
					type === "concept"
						? " w-full lg:w-72 h-10 bg-black border-black border lg:rounded-lg rounded-r-lg hover:bg-black text-white active:opacity-85"
						: " w-full lg:w-72 h-10 border-black border lg:rounded-lg rounded-r-lg  hover:bg-black hover:text-white active:opacity-85"
				}
			>
				Концепции
			</button>
		</div>
	);
};
