import React from 'react';

import { render } from '@testing-library/react';

import App from './App';

test('NotFoundPage', () => {
  const { container } = render((
    <App />
  ));

  expect(container).toHaveTextContent('App');
});
