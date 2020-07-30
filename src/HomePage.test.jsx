import React from 'react';
import { render } from '@testing-library/react';

import HomePage from './HomePage';

describe('HomePage', () => {
  it('renders HomePage', () => {
    const { container } = render(<HomePage />);

    expect(container).toHaveTextContent('마켓');
  });
});