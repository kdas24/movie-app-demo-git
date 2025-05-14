import { act } from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Search for movies/i);
  expect(linkElement).toBeInTheDocument();
});
