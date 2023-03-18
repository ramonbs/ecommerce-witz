import React, { useEffect } from 'react';
import Container from '@components/container';
import Cart from './components/cart/';
import { Layout } from '@components/layout';


const Checkout: React.FC = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>

      <Container>
        <Cart />
      </Container>

    </Layout>
  );
};

export default Checkout;
