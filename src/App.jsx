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
        <Route path="/index" component={IndexPage} />
        <Route path="/home" component={HomePage} />
        <Route path="/" component={IndexPage} />
      </Switch>
    </>
  );
}