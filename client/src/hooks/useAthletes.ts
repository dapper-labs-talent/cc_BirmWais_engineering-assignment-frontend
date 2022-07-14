import React, { useCallback, useEffect, useState } from 'react';
import { Athlete } from '../utils/types';
import { getMoreAthletes, joinDrop, loadAthletes } from '../utils/helpers';

const useAthletes = () => {
	const [athletes, setAthletes] = useState<Athlete[]>([]);

	const loadMoreAthletes = useCallback(() => {
		setAthletes(getMoreAthletes(athletes));
	}, [athletes]);

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