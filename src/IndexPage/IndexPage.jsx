import React from 'react';
import { Container, Typography, Grid, Box } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles"

import SearchContainer from './SearchContainer';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    background: '#eeeeee'
  },
}))

export default function HomePage() {
  const classes = useStyles()
  
  return (
    <>
      <Container style={{ padding: '60px' }} >
        <Typography component="div" style={{ backgroundColor: '#d27d9c', height: '50vh', verticalAlign: 'middle' }} >
          <SearchContainer />
        </Typography>
      </Container>
      <Typography component="h1" align="center" style={{ padding:"5px", margin:"5px", borderBottom: "2px solid #d27d9c" }} >
        About
      </Typography>
      <Typography align="center" style={{ paddingBottom: "50px"}}>
        This Service is for You. You can compare easily with NAVER CAFE AND MULE without login. Just for free. 
        
      </Typography>
      <Typography component="h1" align="center" style={{ padding:"5px", margin:"5px", borderBottom: "2px solid #d27d9c" }} >
        INSTRUMENT
      </Typography>
      <Grid container spacing={1}>
        {/* <Grid item xs={12}>
          <Paper bgcolor="#424242" style={{ backgroundColor: '#424242', width: '10vh', height: '50vh' }} >
            <p>hi</p>
          </Paper>
        </Grid> */}
        <Grid item xs={12} sm={4}>
          <Box bgcolor="#424242" color="info.contrastText" p={2} >
            NAVER CAFE
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box bgcolor="#424242" color="info.contrastText" p={2}>
            MULE
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box bgcolor="#424242" color="info.contrastText" p={2}>
            OPEN MARKET
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
