import React from 'react';
import { render } from '@testing-library/react';
import Pricing from '../../pages/pricing.jsx';

// You have to write data-testid
const Title = () => <h2 data-testid="hero-title">The right price for you.</h2>;

test('Displays the correct title', () => {
  const { getByTestId } = render(<Title />);
  // Assertion
  expect(getByTestId('hero-title')).toHaveTextContent('The right price for you.');
  // --> Test will pass
});
