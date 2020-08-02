import React from 'react';

export default function SearchPage({ onChange, onClick, value }) {
  function handleChange(event){
    const { target: { value } } = event;
    onChange(value);
  }

  return (
    <>
      <h1>마켓</h1>
      <label htmlFor="search-input">악기</label>
      <input 
        id="search-input"
        name="search"
        value={value}
        placeholder="search"
        onChange={handleChange}
      />
      <button type="button" onClick={onClick}>
        검색
      </button>
    </>
  );
}