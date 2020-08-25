import * as React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';

import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';

import Button from '../components/Button';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';

const backgroundImage = '../../../../images/guitar.jpeg';

const styles = (theme) => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: '#7fc7d9',
    backgroundPosition: 'center',
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
});

function ProductHero(props) {
  const {
    classes, onChange, onClick, value,
  } = props;

  function handleChange(event) {
    const { target: { value } } = event;
    onChange(value);
  }

  return (
    <ProductHeroLayout backgroundClassName={classes.background}>
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        EASY TO COMPARE USED INSTRUMENTS
      </Typography>
      <Input
        style={{
          width: '30%', color: 'white', padding: '30px 0px', fontSize: 'x-large',
        }}
        id="input-with-icon-adornment"
        value={value}
        placeholder="SEARCH YOU WANT"
        onChange={handleChange}
        startAdornment={(
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
          )}
      />
      <Button
        style={{ width: '30%' }}
        color="secondary"
        variant="contained"
        size="large"
        className={classes.button}
        component="a"
        onClick={onClick}
      >
        Search
      </Button>
      <Typography variant="body2" color="inherit" className={classes.more}>
        FIND YOUR SOUND
      </Typography>
    </ProductHeroLayout>
  );
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHero);
