import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {   //a test suite-a collection of tests
  render(<App />); // an individual test
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
