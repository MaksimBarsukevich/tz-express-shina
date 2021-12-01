import { YMaps, Map } from 'react-yandex-maps';
import React from 'react';
export const YaMapMy = () => (
  <YMaps>
    <div>
      <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
    </div>
  </YMaps>
);