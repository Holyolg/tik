export default function about() {
	async function createMap() {
		return "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Aa90f7f2ba45af4e6468c2980a10d94974abf6acb7da27d3f885a84b26606e57d&amp;width=500&amp;height=400&amp;lang=ru_RU&amp;scroll=true";
	}

	return (
		<section className="container flex mx-auto mt-10">
			<div>
				<div className="text-xl flex">
					<img src="/map.png" className="w-5 h-5" />
					<p className="ml-1">ТАМБОВ</p>
				</div>
				<ul className="space-y-5 mt-10">
					<li>
						<p className="text-xs">АДРЕС</p>
						<p className="">ТАМБОВ, 123</p>
					</li>
					<li>
						<p className="text-xs">ПОЧТА</p>
						<a className="">@TIK.RU</a>
					</li>
					<li>
						<p className="text-xs">ТЕЛЕФОН</p>
						<a className="">+7 (111) 111-11-11</a>
					</li>
				</ul>
			</div>
			<div></div>
		</section>
	);
}
