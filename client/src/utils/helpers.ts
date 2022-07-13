import { Athlete } from "./types";

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