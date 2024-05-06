export default function Footer() {
	return (
		<footer class="bg-[#1c1c1c] h-[6vh] w-full px-4 flex justify-center">
			<div class="w-full mx-auto p-2 text-white grid grid-cols-3 text-sm">
				<p className="flex items-center">
					TIK-Projekt 2017-2024. Все права защищены
				</p>
				<ul className="flex flex-col text-center justify-center">
					<li>+7 800 555 3535</li>
					<li>info@tik.pro</li>
					<li>г. Москва, 1-я Тверская-Ямская ул., д.25, стр.1</li>
				</ul>
				<div className="space-x-5 flex items-center justify-end">
					<img className="h-[27px]" src="/telegram.png" />
					<img className="h-[27px]" src="/whatsapp.png" />
				</div>
			</div>
		</footer>
	);
}
