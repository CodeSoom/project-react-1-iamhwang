import React from 'react';
import { render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import IndexPage from './IndexPage';

jest.mock('react-redux');

describe('HomePage', () => {
  const dispatch = jest.fn();
  
  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      
    }));
  });

  it('renders HomePage', () => {
    const { container } = render(<IndexPage />);

    expect(container).toHaveTextContent('마켓');
  });
});