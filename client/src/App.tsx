import React from 'react';
import CardsMap from './components/CardsMap';
import Header from './components/Header';
import athletesJson from './utils/dummy.json';

const App: React.FC = (): JSX.Element => {

  return (
    <>
      <Header />
      <CardsMap athletes={athletesJson} />
    </>
  );
}

export default App;