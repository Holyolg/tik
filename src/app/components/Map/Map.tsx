import { motion } from "framer-motion";
import Image from "next/image";

export const Map = () => (
	<section className="w-full">
		<div className="flex flex-col lg:flex-row justify-between lg:space-x-10 space-y-6 lg:space-y-0">
			<div>
				<p>
					Офис в г. Москве <br />
					ул. 1-я Тверская-Ямская, дом 25, стр. 1
				</p>
				<motion.div
					className="rounded-lg"
					whileHover={{
						boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.2)",
					}}
				>
					<a href="https://yandex.ru/maps/-/CDCy5V9-" target="_blank">
						<Image
							src={"/moscovMap.jpg"}
							width={850}
							height={500}
							alt="Офис в Москве"
							className="rounded-lg mt-4"
							sizes="900"
						/>
					</a>
				</motion.div>
			</div>
			<div>
				<p>
					Офис в г. Тамбове <br />
					ул. Кронштадтская, дом 4Ак1
				</p>
				<motion.div
					className="rounded-lg"
					whileHover={{
						boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.2)",
					}}
				>
					<a href="https://yandex.ru/maps/-/CDCy5F6b" target="_blank">
						<Image
							src={"/tambovMap.jpg"}
							width={850}
							height={500}
							alt="Офис в Москве"
							className="rounded-lg mt-4"
							sizes="900"
						/>
					</a>
				</motion.div>
			</div>
		</div>
	</section>
);
