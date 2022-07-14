import React, { PropsWithChildren } from 'react';
import { Athlete } from '../utils/types';
import Card from './Card';

interface Props extends PropsWithChildren {
	loadMoreAthletes: () => void;
}

const CardsMap: React.FC<Props> = (props): JSX.Element => {
	const { loadMoreAthletes, children } = props

	return (
		<main className='display-athletes'>
			<section className="athletes-map">
				<h2>List of Athletes</h2>
				{children}
			</section>
			<div className="load-more">
				<button onClick={loadMoreAthletes}>
					Load More Athletes
					<span>
						<img src="media/icons/down-arrow-overlay.png" alt="down-arrow icon" />
					</span>
				</button>
			</div>
		</main>
	);
}

export default CardsMap;