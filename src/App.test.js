import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Job Logger title in the navbar', () => {
  render(<App />);
  const linkElement = screen.getByText(/job logger/i);
  expect(linkElement).toBeInTheDocument();
});


test('only one button to be in the initial app load', () => {
  render(<App />);
  const buttonElements = screen.queryAllByRole("button");
  expect(buttonElements).toHaveLength(1);
})