import React, { useCallback, useEffect, useState } from 'react';
import { Athlete } from '../utils/types';
import { getMoreAthletes, joinDrop, loadAthletes } from '../utils/helpers';

const useAthletes = () => {
	const [athletes, setAthletes] = useState<Athlete[]>([]);
	const [currentIndex, setCurrentIndex] = useState<number>(12);

	const loadMoreAthletes = useCallback(() => {
		const [newIndex, athletesArray] = getMoreAthletes(currentIndex, athletes);

		setCurrentIndex(newIndex);
		setAthletes(athletesArray);
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