import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const capo = '../../images/category/capo.jpg'
const noResults = '../../images/noResult.png'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  noimg: {
    margin: "120px 0px 0px 0px",
    height: 345
  },
});

export default function InstrumentsPage({ searchResults, onClick }) {

  function handleLink(link="https://www.mule.co.kr/bbs/market/sell") {
    var win = window.open(link);
    win.focus();
  }

  const classes = useStyles();
  
  if(!(searchResults || []).length){
    return (
      <>
        <img className={classes.noimg}
          src={noResults}
        />
        <Typography gutterBottom variant="h4" color="textSecondary" component="h1">
          Sorry
        </Typography><Typography gutterBottom variant="h5" color="textSecondary" component="h1">
          No results found
        </Typography>
      </>
    )
  }

  return (
    <>
      <Grid container spacing={2}>
        {searchResults.map((searchResult) => (
          <Grid key={searchResult.no} item xs={12} md={2}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="fail to load image"
                  height="200"
                  image={searchResult.guitarImage}
                  title={searchResult.title}
                />
                <CardContent>
                  <Typography variant="body2" color="textSecondary" component="h3">
                    {searchResult.title}
                  </Typography>
                  <Typography gutterBottom variant="body2" color="textSecondary" component="p">
                    {searchResult.price}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button 
                  color="primary"
                  onClick={() => handleLink(searchResult.link)} >
                  More detail
                </Button>
                <Button color="primary">
                  Add to Cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </> 
  );
}
