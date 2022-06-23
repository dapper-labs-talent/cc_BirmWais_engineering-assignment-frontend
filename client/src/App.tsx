import React from 'react';
import CardsMap from './components/CardsMap';
import Header from './components/Header';

interface Props {
  
}

const Apps: React.FC<Props> = (): JSX.Element => {

  return (
    <>
      <Header />
      <CardsMap />
    </>
  );
}

export default Apps;