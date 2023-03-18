import LoginTemplate from '@templates/authentication/login';
import { NextSeo } from 'next-seo';
import React from 'react';


const Login: React.FC = () => {
  return (
    <>
      <NextSeo
        title='Login | Autêntica Store'
        description='Login page of Autêntica Store'
      />
      <LoginTemplate />
    </>
  );
};

export default Login;
