import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  requestLogin,
} from './slice';

export default function Test() {
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