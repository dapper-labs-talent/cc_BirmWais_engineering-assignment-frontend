import { Athlete } from "./types";
import athletesJson from './athletes.json';

export const sortAthletes = (athletes: Athlete[], sortParams: string): Athlete[] => {
	const athletesArray = [...athletes];
	
	if (sortParams === "newest") {
		return (
			athletesArray.sort((a, b) => {
				return +new Date(b.drop_date) - +new Date(a.drop_date);
			})
		)
	} else {
		return (
		athletesArray.sort((a, b) => {
			return +new Date(a.drop_date) - +new Date(b.drop_date);
		}))
	}
}

export const loadAthletes = (): Athlete[] => {
	const initialLoad = athletesJson.slice(0, 12)
	return initialLoad;
}

export const joinDrop = (id: number) => {
	console.log(id);
}

export const getMoreAthletes = (athletesArray: Athlete[]): Athlete[] => {
	if (athletesArray.length >= 16) {
		return athletesArray;
	}

	return athletesJson;
};