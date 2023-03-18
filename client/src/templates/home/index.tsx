import Container from '@components/container';
import React from 'react';
import About from './components/About';
import Accordion from './components/Accordion';
import Carousel from './components/Carousel';
import Departments from './components/Departments';
import Featured from './components/Featured';
import Hero from './components/Hero';

import { Layout } from '@components/layout';
import IProduct from '@interfaces/Product';
import IUser from '@interfaces/User';
import { getBestSellers, getDiscounts, getReleases } from '@services/helpers/products';

interface Props {
  products: IProduct[];
  users: IUser[];
}

const HomeTemplate: React.FC<Props> = (props) => {
  const { products } = props;

  const bestSellers = getBestSellers(products);
  const releases = getReleases(products);
  const discounts = getDiscounts(products);

  return (
    <Layout>
      <Container>
        <>
          <Hero />
          <Departments />
          <Carousel
            title='Com desconto'
            data={ discounts }
            numberOfCards={ 3 }
          />
          <Featured />
          <Carousel
            title='Lançamentos'
            data={ releases }
            numberOfCards={ 4 }
          />
          <Carousel
            title='Mais vendidos'
            data={ bestSellers }
            numberOfCards={ 4 }
          />
        </>
      </Container>

      <About />

      <Container>
        <Accordion />
      </Container>

    </Layout>
  );
};

export default HomeTemplate;
