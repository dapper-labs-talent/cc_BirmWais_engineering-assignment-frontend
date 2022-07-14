import React from 'react';
import { getMoreAthletes, loadAthletes } from '../utils/helpers';
import athletesJson from '../utils/athletes.json';

test('Load athletes should get 12 athletes', () => {
	expect(loadAthletes()).toHaveLength(12);
	expect(loadAthletes()).not.toHaveLength(16);
});

test('Load athletes should get the first 12 athletes', () => {
	expect(loadAthletes()).toEqual(athletesJson.slice(0, 12))
});

test('Load more athletes should get 16 athletes', () => {
	expect(getMoreAthletes([...athletesJson])).toHaveLength(16);
	expect(getMoreAthletes([...athletesJson])).not.toHaveLength(12);
});