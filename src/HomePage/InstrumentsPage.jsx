import React from 'react';

export default function InstrumentsPage({ searchResults }) {
  if(!searchResults){
    return <p>매물이 없습니다</p>;
  }

  return (
    <>   
      <ul>
      {searchResults.map((searchResult) => (
        <li key={searchResult.no}>
          {searchResult.price}
        </li>
      ))}
      </ul>
    </>
  );
}
