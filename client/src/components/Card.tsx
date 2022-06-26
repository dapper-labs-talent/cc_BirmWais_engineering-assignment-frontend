import React from 'react';
import { Athlete } from '../utils/types';

interface Props {
	athlete: Athlete;
	joinDrop: (id: number) => void;
}

const Card: React.FC<Props> = (props): JSX.Element => {
	const { id, dropDate, icon, image, name, website } = props.athlete;

	return (
		<div className="card">

			<div className="image-container">

				<img src={image} alt={`${name} photo`} />

				<div className="card-shadow">
					<div className="card-header">
						<div className="drop-date">
							<p className="date">{dropDate}</p>
							<p className="description">Drop Date</p>
						</div>
						<span className="icon">{icon}</span>
					</div>

					<div className="card-body">
						<h4>{name}</h4>
						<div className="link">
							<span>;& </span>
							<a href={website}>{website}</a>
						</div>
					</div>
				</div>

			</div>

			<div className="card-athletes-footer">
				<button className="join-drop" onClick={() => props.joinDrop(id)}>Join Drop ;&</button>
			</div>

		</div>
	);
}

export default Card;