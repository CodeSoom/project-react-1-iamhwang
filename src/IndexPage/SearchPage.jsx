import React from 'react';
import { Container, Typography, Button } from '@material-ui/core';

export default function SearchPage({ onChange, onClick, value }) {
  function handleChange(event){
    const { target: { value } } = event;
    onChange(value);
  }

  return (
    <Container align="center" style={{ display: 'inline-grid'}} >
      <Typography>마켓</Typography>
      <label htmlFor="search-input">악기</label>
      <input 
        id="search-input"
        name="search"
        value={value}
        placeholder="search"
        onChange={handleChange}
      />
      <Button color="primary" type="button" onClick={onClick}>
        검색
      </Button>
    </Container>
  );
}