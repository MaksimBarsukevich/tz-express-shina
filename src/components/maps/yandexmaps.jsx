import React from "react";
import {
  YMaps,
  Map,
  Placemark,
  Clusterer,
  GeoObject,
  ObjectManager,
} from "react-yandex-maps";
import { shopsInfo } from "../pagelayout/pagelayout";

export const YaMapMy = (props) => (
  
  <YMaps>
    <div>
      <Map
        width={500}
        height={450}
        defaultState={{
          center: [props.targetCoordinates.targetLatitude, props.targetCoordinates.targetLongitude],
          zoom: 9,
          behaviors: ["default", "scrollZoom"],
        }}
      >
        <Clusterer
          options={{
            preset: "islands#invertedVioletClusterIcons",
            groupByCoordinates: false,
            hasBalloon: true,
          }}
        >
          {shopsInfo.pickPoints.map((item) => (
            <GeoObject
              key={item.address}
              geometry={{
                type: "Point",
                coordinates: [item.latitude, item.longitude],
              }}
              properties={{
                iconCaption: item.address,
              }}
            />
          ))}
        </Clusterer>
      </Map>
      
    </div>
  </YMaps>
);
// 56.832203, 60.645512 шарташ
