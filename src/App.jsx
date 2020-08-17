import React from 'react';

import {
  Switch,
  Route,
} from 'react-router-dom';

import HomePage from './HomePage/HomePage';
import IndexPage from './IndexPage/IndexPage';
// import IndexContentsPage from './IndexPage/IndexContentsPage';

export default function App() {
  return (
    <>
      <Switch>
        <Route path="/index" component={IndexPage} />
        <Route path="/home" component={HomePage} />
        {/* <Route path="/dashBoardTest" component={IndexContentsPage} /> */}
        <Route path="/" component={IndexPage} />
      </Switch>
    </>
  );
}