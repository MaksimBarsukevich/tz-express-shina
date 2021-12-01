import React from 'react';
import { ListSection } from '../listofoffices/listofoffices';
import { MapSection } from '../mapsection/mapsection';

import './pagelayout.sass'

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