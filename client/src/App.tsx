import React from 'react';
import CardsMap from './components/CardsMap';
import Header from './components/Header';
import useAthletes from './hooks/useAthletes';

const App: React.FC = (): JSX.Element => {
  const { athletes, joinDrop } = useAthletes();

  return (
    <>
      <Header />
      <CardsMap athletes={athletes} />
    </>
  );
}

export default App;