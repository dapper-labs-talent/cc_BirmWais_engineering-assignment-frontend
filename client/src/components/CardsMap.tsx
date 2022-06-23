import React from 'react';

interface Props {
	
}

const CardsMap: React.FC<Props> = (props): JSX.Element => {

	return (
		<div className='display-athletes'>
			<div className="athletes-map">
				{
					// map cards
				}
			</div>
			<div className="load-more">
				<button>Load More Athletes</button>
			</div>
		</div>
	);
}

export default CardsMap;