import React from 'react';
import { useSelector } from 'react-redux';
import LoginPage from './LoginPage';

export default function LoginContainer() {
  const { loginFields } = useSelector((state) => ({
    loginFields: state.loginFields,
  }));

  return (
    <>
      <LoginPage loginFields={loginFields} />
    </>
  );
}