import React from 'react';
import { useSelector } from 'react-redux';
import { render } from '@testing-library/react';

import InstrumentsContainer from './InstrumentsContainer';

jest.mock('react-redux');

function renderInstrumentsContainer() {
  return render(<InstrumentsContainer />);
};

describe('renders InstrumentsContanier', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
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
      ],
    }));
  });

  it('with searchResults', () => {
    const { container } = renderInstrumentsContainer();
    
    expect(container).toHaveTextContent('1,300,000원')
  }); 
}); 