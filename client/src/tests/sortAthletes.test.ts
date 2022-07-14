import { sortAthletes } from "../utils/helpers";

const athletesUnsorted = [
	{ "id": 1, "drop_date": "4/12/2022", "name": "Micah Parsons", "site_url": "themicahparsons.com", "image_path": "Micah-Parsons.png", "icon_path": "Micah-Parsons.png" },
	{ "id": 3, "drop_date": "4/14/2022", "name": "DeMarcus Lawrence", "site_url": "gethotboyz.com", "image_path": "DeMarcus-Lawrence.png", "icon_path": "DeMarcus-Lawrence.png"}, 
	{ "id": 4, "drop_date": "4/15/2022", "name": "Rob Font", "site_url": "newenglandcartel.com", "image_path": "Rob-Font.png", "icon_path": "Rob-Font.png"},
  { "id": 2, "drop_date": "4/13/2022", "name": "Terry McLaurin", "site_url": "mclaurin17.com", "image_path": "Terry-McLaurin.png", "icon_path": "Terry-McLaurin.png"}, 
]

const athletesSortedByNewest = [
	{ "id": 4, "drop_date": "4/15/2022", "name": "Rob Font", "site_url": "newenglandcartel.com", "image_path": "Rob-Font.png", "icon_path": "Rob-Font.png"},
	{ "id": 3, "drop_date": "4/14/2022", "name": "DeMarcus Lawrence", "site_url": "gethotboyz.com", "image_path": "DeMarcus-Lawrence.png", "icon_path": "DeMarcus-Lawrence.png"}, 
	{ "id": 2, "drop_date": "4/13/2022", "name": "Terry McLaurin", "site_url": "mclaurin17.com", "image_path": "Terry-McLaurin.png", "icon_path": "Terry-McLaurin.png"}, 
	{ "id": 1, "drop_date": "4/12/2022", "name": "Micah Parsons", "site_url": "themicahparsons.com", "image_path": "Micah-Parsons.png", "icon_path": "Micah-Parsons.png" },
]

const athletesSortedByOldest = [
	{ "id": 1, "drop_date": "4/12/2022", "name": "Micah Parsons", "site_url": "themicahparsons.com", "image_path": "Micah-Parsons.png", "icon_path": "Micah-Parsons.png" },
	{ "id": 2, "drop_date": "4/13/2022", "name": "Terry McLaurin", "site_url": "mclaurin17.com", "image_path": "Terry-McLaurin.png", "icon_path": "Terry-McLaurin.png"}, 
	{ "id": 3, "drop_date": "4/14/2022", "name": "DeMarcus Lawrence", "site_url": "gethotboyz.com", "image_path": "DeMarcus-Lawrence.png", "icon_path": "DeMarcus-Lawrence.png"}, 
	{ "id": 4, "drop_date": "4/15/2022", "name": "Rob Font", "site_url": "newenglandcartel.com", "image_path": "Rob-Font.png", "icon_path": "Rob-Font.png"}
]

// Newest
test('Sort by newest should return the dates in reverse chronological order', () => {
	const unsortedAthletesArray = [...athletesUnsorted]

	expect(
		sortAthletes(unsortedAthletesArray, "newest")
	).toEqual(athletesSortedByNewest);
});

test('Sort by newest should not return unsorted', () => {
	const unsortedAthletesArray = [...athletesUnsorted]

	expect(
		sortAthletes(unsortedAthletesArray, "newest")
	).not.toEqual(unsortedAthletesArray);
});

test('Sort by newest should not return dates in chronological order', () => {
	const unsortedAthletesArray = [...athletesUnsorted]

	expect(
		sortAthletes(unsortedAthletesArray, "newest")
	).not.toEqual(athletesSortedByOldest);
});


// Oldest
test('Sort by oldest should return the dates in chronological order', () => {
	const unsortedAthletesArray = [...athletesUnsorted]

	expect(
		sortAthletes(unsortedAthletesArray, "oldest")
	).toEqual(athletesSortedByOldest);
});

test('Sort by oldest should not return unsorted', () => {
	const unsortedAthletesArray = [...athletesUnsorted]

	expect(
		sortAthletes(unsortedAthletesArray, "oldest")
	).not.toEqual(unsortedAthletesArray);
});

test('Sort by oldest should not return dates in reverse chronological order', () => {
	const unsortedAthletesArray = [...athletesUnsorted]

	expect(
		sortAthletes(unsortedAthletesArray, "oldest")
	).not.toEqual(athletesSortedByNewest);
});
