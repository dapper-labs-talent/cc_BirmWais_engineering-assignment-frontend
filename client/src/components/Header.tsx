import React, { memo } from 'react';

interface Props {
	sortParams: (sortOptions: string) => void
}

const Header: React.FC<Props> = ({sortParams}): JSX.Element => {

	const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
		sortParams(e.target.value);
	}

	return (
		<header>
			<nav>
				<h1>Upcoming Drops</h1>
				<div className="sort">
					<label htmlFor="sort-by">Sort By</label>
					<div className="select-wrapper">
						<i className="arrow right"></i>
						<select name="sort-by" id="sort-by" role='select' onChange={handleSelect}>
							{sortOptions.map(({value, label}) => {
								return <option value={value} key={label}>{label}</option>;
							})}
						</select>
					</div>
				</div>
			</nav>
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


export default memo(Header);