import React from 'react';
import { Container, AppBar, Toolbar, Typography } from '@material-ui/core';

import LoginContainer from './LoginContainer';;
import InstrumentsContainer from './InstrumentsContainer';;

export default function HomePage() {
  return (
    <>
      <Container style={{ padding: "30px"}} >
        <AppBar style={{ backgroundColor: '#424242' }}>
          <Toolbar>
            <Typography>HELLO, MARKET</Typography>  
            <LoginContainer />        
          </Toolbar>
        </AppBar>
      </Container>
      
      <InstrumentsContainer />
    </>
  );
}