import React from "react";
import { YaMapMy } from "../maps/yandexmaps";

import "./mapsection.sass"

export const MapSection = () => {
    return <div className="contacts-page__map-section"><YaMapMy></YaMapMy></div>
}