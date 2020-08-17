import React from 'react';
import ProductHero from '../css/modules/views/ProductHero';

import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import {
  changeSearchWord,
  searchData,
} from '../slice';

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
    dispatch(searchData(searchWord));
    const url = '/home';
    history.push(url);
  }

  return (
    <ProductHero onChange={handleChange} onClick={handleClick} value={searchWord} />
  );
}
