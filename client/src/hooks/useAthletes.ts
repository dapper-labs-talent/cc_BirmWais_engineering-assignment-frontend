import React, { useCallback, useEffect, useState } from 'react';
import { Athlete } from '../utils/types';
import athletesJson from '../utils/athletes.json';


const loadAthletes = (): Athlete[] => {
	const initialLoad = athletesJson.slice(0, 12)
	return initialLoad;
}

const joinDrop = (id: number) => {
	console.log(id);
}

const useAthletes = () => {
	const [athletes, setAthletes] = useState<Athlete[]>([]);
	const [currentIndex, setCurrentIndex] = useState<number>(12);

	const loadMoreAthletes = useCallback(() => {
		if (currentIndex > 12) {
			return;
		}

		const newIndex = currentIndex + 4;
		setAthletes(athletesJson.slice(0, newIndex))
		setCurrentIndex(newIndex);
	}, [currentIndex]);

	useEffect(() => {
		setAthletes(loadAthletes());
  },[]);

	return {
		athletes,
		loadMoreAthletes,
		joinDrop,
	}
}

export default useAthletes;