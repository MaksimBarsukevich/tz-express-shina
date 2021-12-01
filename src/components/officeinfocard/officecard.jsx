import React from "react";
import { CardChips } from "../officecardchips/officecardchips";
import { StreetName } from "../streetnametitle/streetname";
import "./officecard.sass"

export const OfficeCard = () => {
    return <div className="contacts-page__list-section-card"><StreetName></StreetName><CardChips></CardChips></div>
}