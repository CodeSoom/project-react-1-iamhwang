import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import {
  changeSearchWord
} from './slice';

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
    //const url = '/ServicePage';
    //history.push(url);
    const url ='https://www.mule.co.kr/bbs/market/sell?page=1&map=list&mode=list&region=&start_price=&end_price=&qf=title&qs='+searchWord;
    location.replace(url);
  }

  return (
    <SearchPage onChange={handleChange} onClick={handleClick} value={searchWord} />
  );
}
