import React from 'react';

interface Props {
	
}

const Header: React.FC<Props> = (): JSX.Element => {

	const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
		console.log("selected option:", e.target.value)
	}

	return (
		<header>
			<h1>Upcoming Drops</h1>
			<div className="sort">
				<label htmlFor="sort-by">Sort By</label>
				<select name="sort-by" id="sort-by" onChange={handleSelect}>
					{sortOptions.map(({value, label}) => {
						return <option value={value} key={label}>{label}</option>;
					})}
				</select>
			</div>
		</header>
	);
}

const sortOptions = [
	{
		label: "Newest First",
		value: "newest",
	},
	{
		label: "Oldest First",
		value: "oldest",
	}
];


export default Header;