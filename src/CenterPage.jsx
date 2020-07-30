import React from 'react';

export default function CenterPage({ onChange, onClick, value }) {
  function handleChange(event) {
    const { target: { value } } = event;
    onChange(value);
  }
  
  return (
    <>
      <h2>마켓</h2>
      <input
        type="text"
        id="search"
        name="search"
        placeholder="what do you want?"
        value={value}
        onChange={handleChange}
      />
      <button
        onClick={onClick}
      >
        검색
      </button>
    </>  
  );
}
