import React from 'react';

import { render } from '@testing-library/react';

import TestPage from './TestPage';

//import { MemoryRouter } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

jest.mock('react-redux');


test('NotFoundPage', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    loginFields: {
      email: 'tester@example.com',
      password: 'password',
    },
  }));

  const { container } = render((
    //<MemoryRouter>
      <TestPage />
    //</MemoryRouter>
  ));

  expect(container).toHaveTextContent('TEST');
});
