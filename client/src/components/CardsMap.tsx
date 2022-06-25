import React from 'react';
import { Athlete } from '../utils/types';
import Card from './Card';

interface Props {
	athletes: Athlete[];
	joinDrop: (id: number) => void;
	loadMoreAthletes: () => void;
}

const CardsMap: React.FC<Props> = (props): JSX.Element => {
	const { athletes, joinDrop, loadMoreAthletes } = props

	return (
		<div className='display-athletes'>
			<div className="athletes-map">
				{
					athletes.map(athlete => <Card key={athlete.id} athlete={athlete} joinDrop={joinDrop} />)
				}
			</div>
			<div className="load-more">
				<button onClick={loadMoreAthletes}>Load More Athletes</button>
			</div>
		</div>
	);
}

export default CardsMap;