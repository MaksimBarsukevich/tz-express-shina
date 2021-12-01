import React from "react";
import "./streetname.sass"

export const StreetName = (props) => {
    return <h3 className="contacts-page__list-section-card__streetname">{props.address}</h3>
}