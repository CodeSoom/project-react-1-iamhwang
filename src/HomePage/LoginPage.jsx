import React from 'react';
import { Typography } from '@material-ui/core';

export default function LoginPage({ loginFields }) {
  const { email } = loginFields;

  if(!email){
    return <Typography component="div" style={{ backgroundColor: '#424242', verticalAlign: 'middle'  }}>Guest</Typography>;
  }

  return (
    <Typography>{email}</Typography>
  );
}