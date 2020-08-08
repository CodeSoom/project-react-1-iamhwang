import React from 'react';
import { useSelector } from 'react-redux'; 

import InstrumentsPage from './InstrumentsPage';

export default function InstrumentsContainer() {
  const { searchResults } = useSelector((state) => ({
    searchResults: state.searchResults,
  }));

  return (
    <InstrumentsPage searchResults={searchResults} />
  );
}