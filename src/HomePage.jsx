import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import styled from '@emotion/styled';

import {
  changeSearchWord
} from './slice';

import TopPage from './TopPage';
import CenterPage from './CenterPage';
import BottomPage from './BottomPage';

export default function HomePage() {
  const dispatch = useDispatch();

  const { searchWord } = useSelector((state) => ({
    searchWord: state.searchWord,
  }));
  
  function handleChange(value) {
    dispatch(changeSearchWord(value));
  }
  
  function handleClick() {
    const url = '/TestPage';
    history.push(url);
  }

  const history = useHistory();

  return (
    <>
      <TopPage />
      <CenterPage onChange={handleChange} onClick={handleClick} value={searchWord} />
      <BottomPage />
    </>
  );
}