import { YMaps, Map, Placemark } from 'react-yandex-maps';
import React from 'react';


export const YaMapMy = () => (
  <YMaps>
    <div >
      <Map width={500} height={500} defaultState={{ center: [56.838011, 60.597474], zoom: 9} }> 
      <Placemark geometry={[56.832203, 60.645512]} /></Map>
    </div>
  </YMaps>
);
// 56.832203, 60.645512 шарташ