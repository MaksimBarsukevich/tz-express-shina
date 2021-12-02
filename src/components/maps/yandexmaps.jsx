import React from "react";
import { YMaps, Map, Placemark, Clusterer, GeoObject } from "react-yandex-maps";
import { shopsInfo } from "../pagelayout/pagelayout";

/* Реализовал вариант с подгружением всех точек за раз, он в комментарии, но потом понял, 
 что не по ТЗ. Вариантов отобразить точку масса, но API яндекса наотрез отказывался у меня работать нормально, 
 С метками задумывал много разных штук, но у меня не работало, а в песочнице яндекса на ура, убил на это 4 часа - решил обойтись малой кровью */
 
export const YaMapMy = (props) => (
  <YMaps>
    <div>
      <Map
        width={500}
        height={450}
        state={{
          center: [
            props.targetCoordinates.targetLatitude,
            props.targetCoordinates.targetLongitude,
          ],
          zoom: 12,
          behaviors: ["default", "scrollZoom"],
        }}
      >
        {/* <Clusterer
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
        </Clusterer> */}
        <GeoObject
          geometry={{
            type: "Point",
            coordinates: [
              props.targetCoordinates.targetLatitude,
              props.targetCoordinates.targetLongitude,
            ],
          }}
          properties={{
            iconCaption: props.targetCoordinates.targetAddress,
          }}
        />
      </Map>
    </div>
  </YMaps>
);
