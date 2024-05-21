import { YMaps, Map, Placemark, YMapDefaultFeaturesLayer } from '@pbe/react-yandex-maps';
import mapStyles from './mapStyles.json'


const YandexMap = () => (
<YMaps>
    <Map
      defaultState={{ center: [55.751574, 37.573856], zoom: 9 }}
      width="100%"
      height="400px"
      options={{
        mapAutoFocus: false,
        suppressMapOpenBlock: true,
        yandexMapDisablePoiInteractivity: true,
        mapStyle: mapStyles
        }}
    >
      <Placemark geometry={[55.751574, 37.573856]} />
    </Map>
  </YMaps>
);

export default YandexMap;