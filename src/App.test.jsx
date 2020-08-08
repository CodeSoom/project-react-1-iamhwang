  import React from 'react';

import { render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';


import App from './App';
import { MemoryRouter } from 'react-router';

jest.mock('react-redux');  

describe('App', () => {
  const dispatch = jest.fn();
  
  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      
    }));
  });

  it('renders App', () => {
  const { container } = render((
    <MemoryRouter>
      <App />
    </MemoryRouter>
  ));

  expect(container).toHaveTextContent('iamHwang');
  });
});
