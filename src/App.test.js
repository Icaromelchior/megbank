import { render, screen } from '@testing-library/react';
import App from './App';

test('renders megbank header', () => {
  render(<App />);
  const el = screen.getByText(/Megbank/i);
  expect(el).toBeInTheDocument();
});
