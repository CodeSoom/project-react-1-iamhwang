import React from 'react';
import { useSelector } from 'react-redux';
import { render } from '@testing-library/react';

import LoginContainer from './LoginContainer';

jest.mock('react-redux');

describe('LoginContainer', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      loginFields: {
        email: 'tester@example.com',
        password: '',
      },
    }));
  });

  it('renders with login', () => {
    const { container } = render(<LoginContainer />)

    expect(container).toHaveTextContent("tester@example.com");
  });
});
