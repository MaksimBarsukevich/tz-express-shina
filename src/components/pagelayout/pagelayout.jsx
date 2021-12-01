import React, { useEffect, useState } from "react";
import { ListSection } from '../listofoffices/listofoffices';
import { MapSection } from '../mapsection/mapsection';
import myJSON from '../../state.json'
import './pagelayout.sass'

export const shopsInfo = JSON.parse(JSON.stringify(myJSON))


const PageLayout = () => {

  return (
      <main className="contacts-page">
        <section className="contacts-page__wrapper">
          <ListSection/>
          <MapSection/>
        </section>
      </main>
  );
};

export default PageLayout;