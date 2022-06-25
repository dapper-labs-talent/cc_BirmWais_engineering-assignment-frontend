import React, { useEffect, useMemo, useState } from 'react';
import CardsMap from './components/CardsMap';
import Header from './components/Header';
import useAthletes from './hooks/useAthletes';
import { Athlete } from './utils/types';

const App: React.FC = (): JSX.Element => {
  const { athletes, joinDrop, loadMoreAthletes } = useAthletes();
	const [sortedAthletes, setSortedAthletes] = useState<Array<Athlete>>([...athletes]);
	const [sortParams, setSortParams] = useState<string>('newest');

	const sortAthletes = () => {
		if (sortParams === "newest") {
			setSortedAthletes(
				athletes.sort((a, b) => {
					return +new Date(b.dropDate) - +new Date(a.dropDate);
				})
			)
		} else {
			setSortedAthletes(
			athletes.sort((a, b) => {
				return +new Date(a.dropDate) - +new Date(b.dropDate);
			}))
		}
	}

	useMemo(() => {
		setSortedAthletes(athletes)
		sortAthletes();
	}, [athletes, sortParams])

  return (
    <>
      <Header sortParams={setSortParams} />
      <CardsMap 
        athletes={sortedAthletes} 
        joinDrop={joinDrop} 
        loadMoreAthletes={loadMoreAthletes} 
      />
    </>
  );
}

export default App;