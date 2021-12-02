import React, { useEffect, useState } from "react";
import { ListSection } from '../listofoffices/listofoffices';
import { MapSection } from '../mapsection/mapsection';
import myJSON from '../../state.json'
import './pagelayout.sass'

export const shopsInfo = JSON.parse(JSON.stringify(myJSON))


const PageLayout = () => {

  const [targetCoordinates, setCoordinates] = useState({
    targetLatitude: 56.838011,
    targetLongitude: 60.597474,
  });

  return (
      <main className="contacts-page">
        <section className="contacts-page__wrapper">
          <ListSection setCoordinates={setCoordinates}/>
          <MapSection targetCoordinates={targetCoordinates}/>
          {console.log(targetCoordinates)}
        </section>
      </main>
  );
};

export default PageLayout;