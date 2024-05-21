'use client'

import dynamic from 'next/dynamic';

const Map = dynamic(() => import('../components/Map/Map'), { ssr: false });


export default function about() {
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
			<div>
				 {/* <YMaps>
				 <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }}/>

				 </YMaps>
				 <MapView/> */}
				 <Map/>
			</div>
		</section>
	);
}
