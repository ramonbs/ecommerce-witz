import RegisterTemplate from '@templates/authentication/register';
import { NextSeo } from 'next-seo';
import React from 'react';

const Register: React.FC = () => {
  return (
    <>
      <NextSeo
        title='Register | Autêntica Store'
        description='Register page of Autêntica Store'
      />
      <RegisterTemplate />
    </>
  );
};

export default Register;
