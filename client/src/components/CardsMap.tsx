import React from 'react';
import { Athlete } from '../utils/types';
import Card from './Card';

interface Props {
	athletes: Athlete[];
	joinDrop: (id: number) => void;
}

const CardsMap: React.FC<Props> = (props): JSX.Element => {

	return (
		<div className='display-athletes'>
			<div className="athletes-map">
				{
					props.athletes.map(athlete => <Card key={athlete.id} athlete={athlete} joinDrop={props.joinDrop} />)
				}
			</div>
			<div className="load-more">
				<button>Load More Athletes</button>
			</div>
		</div>
	);
}

export default CardsMap;