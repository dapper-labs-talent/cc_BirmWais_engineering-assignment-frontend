import React from 'react';
import CardsMap from './components/CardsMap';
import Header from './components/Header';
import useAthletes from './hooks/useAthletes';

const App: React.FC = (): JSX.Element => {
  const { athletes, joinDrop, loadMoreAthletes } = useAthletes();

  return (
    <>
      <Header />
      <CardsMap athletes={athletes} joinDrop={joinDrop} loadMoreAthletes={loadMoreAthletes} />
    </>
  );
}

export default App;