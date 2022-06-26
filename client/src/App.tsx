import React, { useEffect, useMemo, useState } from 'react';

import './styles/app/app.css';
import useAthletes from './hooks/useAthletes';
import { Athlete } from './utils/types';

import CardsMap from './components/CardsMap';
import Header from './components/Header';


const App: React.FC = (): JSX.Element => {
  const { athletes, joinDrop, loadMoreAthletes } = useAthletes();
	const [sortedAthletes, setSortedAthletes] = useState<Array<Athlete>>([...athletes]);
	const [sortParams, setSortParams] = useState<string>('newest');

	const sortAthletes = () => {
		const athletesArray = [...athletes];
		
		if (sortParams === "newest") {
			setSortedAthletes(
				athletesArray.sort((a, b) => {
					return +new Date(b.dropDate) - +new Date(a.dropDate);
				})
			)
		} else {
			setSortedAthletes(
			athletesArray.sort((a, b) => {
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