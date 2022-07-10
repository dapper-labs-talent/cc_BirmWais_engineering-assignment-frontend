import React, { useEffect, useState } from 'react';
import { Athlete } from '../utils/types';
import athletesJson from '../utils/athletes.json';

const useAthletes = () => {
	const [athletes, setAthletes] = useState<Athlete[]>([]);
	const [currentIndex, setCurrentIndex] = useState<number>(2);

	const loadMoreAthletes = () => {
		const newIndex = currentIndex + 2;
		setAthletes(athletesJson.slice(0, newIndex))
		setCurrentIndex(newIndex);
	}

	const joinDrop = (id: number) => {
		console.log(id);
	}

	const loadAthletes = () => {
		const initialLoad = athletesJson.slice(0, 8)
		setAthletes(initialLoad);
	}

	useEffect(() => {
		loadAthletes();
  },[]);

	return {
		athletes,
		loadMoreAthletes,
		joinDrop,
	}
}

export default useAthletes;