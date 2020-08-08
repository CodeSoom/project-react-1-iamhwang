import React from 'react';
import { render } from '@testing-library/react';

import LoginPage from './LoginPage';

function renderLoginPage(loginFields) {
  return render(<LoginPage loginFields={loginFields} />)
}
describe('LoginPage', () => {
  it('renders without login', () => {
    const loginFields = {
      email: '',
    };
    const { container } = renderLoginPage(loginFields);

    expect(container).toHaveTextContent("Guest");
  });

  it('renders with login', () => {
    const loginFields = {
      email: 'tester@example.com',
    };
    const { container } = renderLoginPage(loginFields);

    expect(container).toHaveTextContent("tester@example.com");
  });
});
