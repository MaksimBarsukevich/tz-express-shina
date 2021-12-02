import React from "react";
import { YaMapMy } from "../maps/yandexmaps";

import "./mapsection.sass";

export const MapSection = (props) => {
  return (
    <div className="contacts-page__map-section">
      <YaMapMy targetCoordinates={props.targetCoordinates}></YaMapMy>
    </div>
  );
};
