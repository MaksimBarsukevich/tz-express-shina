import React, { useState } from "react";
import { OfficeCard } from "../officeinfocard/officecard";
import { shopsInfo } from "../pagelayout/pagelayout";
import "./listofoffices.sass";

export const ListSection = (props) => {
  return (
    <div className="contacts-page__list-section">
      {shopsInfo.pickPoints.map((item) => (
        <OfficeCard
          key={item.address}
          address={item.address}
          budgets={item.budgets}
          latitude={item.latitude}
          longitude={item.longitude}
          onClick={() =>
            props.setCoordinates({
              targetLatitude: item.latitude,
              targetLongitude: item.longitude,
              targetAddress: item.address
            })
          }
        ></OfficeCard>
      ))}
    </div>
  );
};
