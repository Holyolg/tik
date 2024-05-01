import Image from "next/image";
import Link from "next/link";
export default function notFound() {
	return (
		<main class="grid min-h-full place-items-center bg-white px-6 py-16 sm:py-32 lg:px-8">
			<div class="text-center">
				<div class="flex items-center justify-center gap-x-6">
					<Image
						className="mt-5"
						src="/404.png"
						width={200}
						height={153}
						alt="Изображение проекта"
						style={{ objectFit: "cover" }}
					/>
				</div>
				<p class="mt-10 text-3xl font-semibold">404</p>
				<h1 class="mt-4 text-2xl">Страница не найдена</h1>

				<button className="mt-10 bg-[#003056] rounded-xl px-4 py-3 text-white hover:bg-[#002f56d7]">
					<Link href="/">Вернуться на главную</Link>
				</button>
			</div>
		</main>
	);
}
