import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router';
import SearchContainer from './SearchContainer';

jest.mock('react-redux');

const mockPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory() {
    return { push: mockPush };
  },
}));

describe('HomePage', () => {
  const dispatch = jest.fn();

  function renderSearchContainer() {
    return render((
      <MemoryRouter>
        <SearchContainer />
      </MemoryRouter>
    ));
  }
  
  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      searchWord: '',
    }));
  });

  it('Clicks "검색" button', () => {
    const { getByText } = renderSearchContainer();

    fireEvent.click(getByText('검색'));

    expect(mockPush).toBeCalledWith('/TestPage');
  });

  it('Clicks "검색" button', () => {
    const { getByPlaceholderText } = renderSearchContainer();

    fireEvent.change(getByPlaceholderText('search'), {
      target: { 
        value: 'martin' 
      }
    });

    expect(dispatch).toBeCalledWith({
      type: 'application/changeSearchWord',
      payload: 'martin',
    });
  });
});