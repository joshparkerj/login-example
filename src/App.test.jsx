import React from 'react';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<App />, div);
  expect(screen.getByText(/^login example$/i)).toBeInTheDocument();
});
