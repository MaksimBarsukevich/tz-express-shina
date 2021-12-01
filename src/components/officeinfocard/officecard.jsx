import React from "react";
import { CardChips } from "../officecardchips/officecardchips";
import { StreetName } from "../streetnametitle/streetname";
import "./officecard.sass"

export const OfficeCard = (props) => {
    return <div className="contacts-page__list-section-card"><StreetName address={props.address}></StreetName>
    {props.budgets.map((item) => (
        <CardChips key={item} budgets={item}></CardChips>
      ))}</div>
}