import Image from "next/image";
import Link from "next/link";
import img404 from '../../public/404.png'
export default function notFound() {
	return (
		<main className="grid min-h-full place-items-center bg-white px-6 py-16 sm:py-32 lg:px-8">
			<div className="text-center">
				<div className="flex items-center justify-center gap-x-6">
					<Image
						className="mt-5"
						src={img404}
						width={200}
						height={153}
						alt="Изображение проекта"
						style={{ objectFit: "cover" }}
						placeholder='blur'
					/>
				</div>
				<p className="mt-10 text-3xl font-semibold">404</p>
				<h1 className="mt-4 text-2xl">Страница не найдена</h1>

				<button className="mt-10 bg-[#003056] rounded-xl px-4 py-3 text-white hover:bg-[#002f56d7]">
					<Link href="/">Вернуться на главную</Link>
				</button>
			</div>
		</main>
	);
}
