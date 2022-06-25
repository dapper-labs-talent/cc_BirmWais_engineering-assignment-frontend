import React, { useEffect, useState } from 'react';
import { Athlete } from '../utils/types';
import athletesJson from '../utils/dummy.json';

const useAthletes = () => {
	const [athletes, setAthletes] = useState<Athlete[]>([]);

	const joinDrop = (id: number) => {
		console.log(id);
	}

	const loadAthletes = () => {
		const initialLoad = athletesJson.slice(0, 3)
		setAthletes(initialLoad);
	}

	useEffect(() => {
		loadAthletes();
  },[]);

	return {
		athletes,
		joinDrop,
	}
}

export default useAthletes;