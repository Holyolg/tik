import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

export const YMap = () => (

  <section className='w-full h-[500px]'>
  <YMaps>
    <Map className='w-full h-[500px]'
    defaultState={{
      center: [54.502085, 39.950956],
      zoom: 6,
      behaviors: ["drag"],
      controls: ["zoomControl", "fullscreenControl"],
    }}
    modules={["control.ZoomControl", "control.FullscreenControl"]}
  >
    <Placemark
      modules={["geoObject.addon.balloon"]}
      defaultGeometry={[55.775586, 37.586006]}
      properties={{
        balloonContentBody:
          "1-я Тверская-Ямская ул., 25, стр. 1, Москва",
      }}
    />
    <Placemark
      modules={["geoObject.addon.balloon"]}
      defaultGeometry={[52.715219, 41.462622]}
      properties={{
        balloonContentBody:
          "Тамбов, Кронштадтская улица, 4Ак1",
      }}
    />
  </Map>
  </YMaps>
  </section>
);