import React from 'react';
import { render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import HomePage from './HomePage';

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
    const { container } = render(<HomePage />);

    expect(container).toHaveTextContent('반갑습니다');
  });
});