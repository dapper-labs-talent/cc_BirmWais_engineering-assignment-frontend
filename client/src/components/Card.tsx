import React from 'react';

interface Props {
	
}

const Card: React.FC<Props> = (props): JSX.Element => {

	return (
		<div className="card">

			<div className="card-shadow">
				<div className="card-header">
					<div className="drop-date">
						<p className="date">dropDate</p>
						<p className="description">Drop Date</p>
					</div>
					<span className="icon">icon</span>
				</div>

				<div className="card-body">
					<h4>name</h4>
					<div className="link">
						<span>;& </span>
						<a href="apple.com">website</a>
					</div>
				</div>
			</div>

			<div className="card-athletes-footer">
				<button className="join-drop">Join Drop ;&</button>
			</div>

		</div>
	);
}

export default Card;