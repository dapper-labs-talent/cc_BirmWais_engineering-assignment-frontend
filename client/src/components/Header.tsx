import React from 'react';

interface Props {
	
}

const Header: React.FC<Props> = (): JSX.Element => {

	return (
		<header>
			<h1>Upcoming Drops</h1>
			<div className="sort">
				<label htmlFor="sort-by">Sort By</label>
				<select name="sort-by" id="sort-by">
					
				</select>
			</div>
		</header>
	);
}

export default Header;