import React, { PropsWithChildren } from 'react';
import { Athlete } from '../utils/types';
import Card from './Card';

interface Props extends PropsWithChildren {
	loadMoreAthletes: () => void;
}

const CardsMap: React.FC<Props> = (props): JSX.Element => {
	const { loadMoreAthletes, children } = props

	return (
		<div className='display-athletes'>
			<div className="athletes-map">
				{children}
			</div>
			<div className="load-more">
				<button onClick={loadMoreAthletes}>
					Load More Athletes
					<span>
						<img src="media/icons/down-arrow.png" alt="down-arrow icon" />
						<img src="media/icons/dots-5.png" alt="dots icon" />
					</span>
				</button>
			</div>
		</div>
	);
}

export default CardsMap;