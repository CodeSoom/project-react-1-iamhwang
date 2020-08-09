import React from 'react';
import { render } from '@testing-library/react';
import InstrumentPage from './InstrumentsPage';

function renderInstrumentPage(props) {
  return render(<InstrumentPage searchResults={props} />);
};

describe('renders InstrumentPage', () => {
  it('without props', () => {
    const { container } = renderInstrumentPage();

    expect(container).toHaveTextContent('매물')
  });

  it('with searchResults', () => {
    const searchResults = [
      {
        no: '100',
        price: '1,300,000원',
        redgt: '1,294',
        title: 'Martin 000-15M',
        region: '경기',
        view: '12,402',
      },
    ];

    const { container } = renderInstrumentPage(searchResults);

    expect(container).toHaveTextContent('1,300,000원')
  }); 
}); 