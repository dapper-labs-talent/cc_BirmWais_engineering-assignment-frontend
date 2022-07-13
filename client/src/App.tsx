import React, { useMemo, useState } from 'react';

import './styles/app/app.css';
import useAthletes from './hooks/useAthletes';
import { Athlete } from './utils/types';
import { sortAthletes } from './utils/helpers';

import { Card, CardsMap, Header } from './components';

const App: React.FC = (): JSX.Element => {
  const { athletes, joinDrop, loadMoreAthletes } = useAthletes();
	const [sortedAthletes, setSortedAthletes] = useState<Athlete[]>([...athletes]);
	const [sortParams, setSortParams] = useState<string>('newest');

	useMemo(() => {
		setSortedAthletes(athletes)
		setSortedAthletes(sortAthletes(athletes, sortParams))
	}, [athletes, sortParams])

  return (
    <>
      <Header sortParams={setSortParams} />
      <CardsMap loadMoreAthletes={loadMoreAthletes} >
				{
					sortedAthletes.map(athlete => <Card key={athlete.id} athlete={athlete} joinDrop={joinDrop} />)
				}
			</CardsMap>
    </>
  );
}

export default App;