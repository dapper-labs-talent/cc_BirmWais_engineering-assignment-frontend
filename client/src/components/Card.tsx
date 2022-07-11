import React from 'react';
import { Athlete } from '../utils/types';

interface Props {
	athlete: Athlete;
	joinDrop: (id: number) => void;
}

const Card: React.FC<Props> = (props): JSX.Element => {
	const { id, drop_date, icon_path, image_path, name, site_url } = props.athlete;

	return (
		<div className="card">

			<div className="image-container">

				<img src={`media/images/${image_path}`} alt={`${name}`} className="card-image" />

				<div className="card-content">
					<div className="card-header">
						<div className="drop-date">
							<p className="date">{drop_date}</p>
							<p className="description">Drop Date</p>
						</div>
						<img src={`media/icons/${icon_path}`} alt={`${name} icon`} />
					</div>

					<div className="card-body">
						<h4>{name}</h4>
						<div className="link">
							<img src="media/icons/link-vector.png" alt="link icon" />
							<a href={site_url}>{site_url}</a>
						</div>
					</div>
				</div>

			</div>

			<div className="card-athletes-footer">
				<button className="join-drop" onClick={() => props.joinDrop(id)}>Join Drop <span><img src="media/icons/shopping-cart.png" alt="shopping cart icon" /></span></button>
			</div>

		</div>
	);
}

export default Card;