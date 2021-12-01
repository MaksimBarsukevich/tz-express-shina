import React from "react";
import { OfficeCard } from "../officeinfocard/officecard";
import "./listofoffices.sass";
import { shopsInfo } from "../pagelayout/pagelayout";

export const ListSection = () => {
  return (
    <div className="contacts-page__list-section">
      {shopsInfo.pickPoints.map((item) => (
        <OfficeCard key={item.address} address={item.address} budgets={item.budgets}></OfficeCard>
      ))}
    </div>
  );
};
