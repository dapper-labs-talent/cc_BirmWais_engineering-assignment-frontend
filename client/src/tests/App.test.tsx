import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders header', () => {
  render(<App />);

  expect(screen.getByText(/upcoming Drops/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/sort by/i)).toBeInTheDocument();
  expect(screen.getByRole('select')).toBeInTheDocument();
});

test('select should have default value of newest', () => {
  render(<App />);

  expect(screen.getByRole('select')).toHaveValue("newest");
  expect(screen.getByRole('select')).not.toHaveValue("oldest");
})


test('renders footer/load more button', () => {
  render(<App />);

  expect(screen.getByText(/load more athletes/i)).toBeInTheDocument();
  expect(screen.getByText(/load more athletes/i)).toBeInTheDocument();
});