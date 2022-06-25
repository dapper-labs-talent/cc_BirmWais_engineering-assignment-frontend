import React from 'react';
import { Athlete } from '../utils/types';
import Card from './Card';

interface Props {
	athletes: Athlete[]
}

const CardsMap: React.FC<Props> = (props): JSX.Element => {

	return (
		<div className='display-athletes'>
			<div className="athletes-map">
				{
					props.athletes.map(athlete => <Card key={athlete.id} athlete={athlete} />)
				}
			</div>
			<div className="load-more">
				<button>Load More Athletes</button>
			</div>
		</div>
	);
}

export default CardsMap;