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
      searchResults: [
        {
          no: '100',
          price: '1,300,000원',
          redgt: '1,294',
          title: 'Martin 000-15M',
          region: '경기',
          view: '12,402',
        },
        {
          no: '101',
          price: '780,000원',
          redgt: '1,304',
          title: 'Taylor 114ce',
          region: '서울',
          view: '2,402',
        },
      ]      
    }));
  });

  it('renders HomePage', () => {
    const { container } = render(<HomePage />);

    expect(container).toHaveTextContent("SOUND");
  });
});
