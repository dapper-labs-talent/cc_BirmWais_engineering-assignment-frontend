import React, { useEffect, useState } from 'react';
import { Athlete } from '../utils/types';
import athletesJson from '../utils/athletes.json';


const loadAthletes = (): Athlete[] => {
	const initialLoad = athletesJson.slice(0, 16)
	return initialLoad;
}

const joinDrop = (id: number) => {
	console.log(id);
}

const useAthletes = () => {
	const [athletes, setAthletes] = useState<Athlete[]>([]);
	const [currentIndex, setCurrentIndex] = useState<number>(2);

	const loadMoreAthletes = () => {
		const newIndex = currentIndex + 2;
		setAthletes(athletesJson.slice(0, newIndex))
		setCurrentIndex(newIndex);
	}

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