import React from 'react';

import {
  Switch,
  Route,
} from 'react-router-dom';

import HomePage from './HomePage/HomePage';
import IndexPage from './IndexPage/IndexPage';


export default function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={IndexPage} />
        <Route path="/home" component={HomePage} />
      </Switch>
    </>
  );
}