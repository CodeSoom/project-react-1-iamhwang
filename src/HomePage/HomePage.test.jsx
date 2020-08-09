import React from 'react';
import { useSelector } from 'react-redux';
import { render } from '@testing-library/react';
import HomePage from './HomePage';

jest.mock('react-redux');

describe('HomePage', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      loginFields: {
        email: '',
        password: '',
      },
    }));
  });

  it('renders HomePage', () => {
    const { container } = render(<HomePage />);

    expect(container).toHaveTextContent("Guest");
  });
});
