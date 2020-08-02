import React from 'react';

import {
  Switch,
  Route,
} from 'react-router-dom';

import HomePage from './HomePage';
import TestPage from './TestPage';


export default function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/TestPage" component={TestPage} />
      </Switch>
    </>
  );
}
