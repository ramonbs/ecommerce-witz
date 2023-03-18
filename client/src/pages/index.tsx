import IProduct from '@interfaces/Product';
import IUser from '@interfaces/User';
import { fetchAllProducts } from '@services/api/products';
import { getAllUsers } from '@services/api/user';
import HomeTemplate from '@templates/home';
import { NextSeo } from 'next-seo';
import React from 'react';

interface Props {
  products: IProduct[];
  users: IUser[];
}

const Home: React.FC<Props> = (props) => {
  return (
    <>
      <NextSeo
        title='Home | Autêntica Store'
      />
      <HomeTemplate products={ props.products } users={ props.users } />
    </>
  );
};

export async function getStaticProps() {
  const products = await fetchAllProducts();
  const users = await getAllUsers();

  return {
    props: {
      products: products.data,
      users,
    }
  };
}

export default Home;
