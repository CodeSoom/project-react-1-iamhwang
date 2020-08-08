import React from 'react';

export default function LoginPage({ loginFields }) {
  const { email } = loginFields;

  if(!email){
    return <p>Guest</p>;
  }

  return (
    <p>{email}</p>
  );
}