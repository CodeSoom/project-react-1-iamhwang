import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import {
  changeSearchWord,
  findInstrument,
} from '../slice';

import SearchPage from './SearchPage';

export default function SearchContainer() {
  const history = useHistory()

  const dispatch = useDispatch();

  const { searchWord } = useSelector((state) => ({
    searchWord: state.searchWord,
  }));
  
  function handleChange(value) {
    dispatch(changeSearchWord(value));
  }
  
  function handleClick() {
    dispatch(findInstrument(searchWord));
    const url = '/home';
    history.push(url);
  }

  return (
    <SearchPage onChange={handleChange} onClick={handleClick} value={searchWord} />
  );
}
