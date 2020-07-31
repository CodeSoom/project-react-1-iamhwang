import React from 'react';
<<<<<<< HEAD


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
=======
import { useDispatch, useSelector } from 'react-redux';

import {
  requestLogin,
} from './slice';

export default function App() {
  const password = 'password';
  const dispatch = useDispatch();

  const { loginFields } = useSelector((state) => ({
    loginFields: state.loginFields,
  }));

  function handleSubmit(password) {
    dispatch(requestLogin(password));
  };

  return (
    <>
      <button 
        type="button"
        onClick={() => handleSubmit(password)}
      >
      TEST
      </button>
      {loginFields.email}
      {loginFields.password}
    </>
  );
}

>>>>>>> setting for develop environment
