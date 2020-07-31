import React from 'react';
import { render } from '@testing-library/react';

import BottomPage from './BottomPage';

describe('BottomPage', () => {
  it('renders BottomPage', () => {
    const { container } = render(<BottomPage />);

    expect(container).toHaveTextContent('매물');
  });
});