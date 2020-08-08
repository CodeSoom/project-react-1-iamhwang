import React from 'react';

import {
  Switch,
  Route,
} from 'react-router-dom';

import IndexPage from './IndexPage/IndexPage';
import HomePage from './HomePage/HomePage';

export default function App() {
  
  return (
    <>
      <Switch>
        <Route exact path="/" component={IndexPage} />
        <Route exact path="/home" component={HomePage} />
      </Switch>
    </>
  );
}