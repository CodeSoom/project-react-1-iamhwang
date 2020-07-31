import React from 'react';
import { render } from '@testing-library/react';

import TopPage from './TopPage';

describe('TopPage', () => {
  it('renders TopPage', () => {
    const { container } = render(<TopPage />);

    expect(container).toHaveTextContent('반갑습니다');
  });
});