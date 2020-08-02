import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import SearchPage from './SearchPage';

describe('SearchPage', () => {  
  const handleClick = jest.fn();
  const handleChange = jest.fn();
  const value = 'fender';

  function renderSearchPage() {
    return render((
      <SearchPage
        onClick={handleClick}
        onChange={handleChange}
        value={value}
      /> 
    ));
  }

  
  it('Renders SearchPage', () => {
    const { container } = renderSearchPage();

    expect(container).toHaveTextContent('검색');
  });

  it('Clicks "검색" button', () => {
    const { getByText } = renderSearchPage();

    fireEvent.click(getByText('검색'));

    expect(handleClick).toBeCalled();
  });
  
  it('Search Instrument data', () => { 
    const { getByPlaceholderText } = renderSearchPage();
    
    fireEvent.change(getByPlaceholderText('search'), { target: { value } });    

    expect(getByPlaceholderText('search')).toHaveAttribute('value', value);
    //expect(handleChange).toBeCalled();
  });
});
