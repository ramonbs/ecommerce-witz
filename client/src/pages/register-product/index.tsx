import RegisterProducts from '@templates/registerProduct';
import React from 'react';
import { fetchAllProducts } from '@services/api/products';
import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';

interface Props {
  products: [
    {
      _id: number;
      idProduct: number;
      title: string;
      description: string;
      unit_price: number;
      thumbnail: string;
      stock: number;
      category: string;
      best_seller: boolean;
      discount: boolean;
      release: boolean;
    }
  ];
}

const index: React.FC<Props> = (props) => {
  const { products } = props;
  return (
    <>
      <NextSeo
        title='Cadastrar Produto'
        description='Página para cadastrar um novo produto'
        noindex
        nofollow
      />
      <RegisterProducts  products={ products } />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const products = await fetchAllProducts();

  return {
    props: {
      products: products.data,
    },
    revalidate: 10,
  };
};

// export const getServerSideProps: GetServerSideProps = async () => {
//   const products = await fetchAllProducts();

//   console.log(products);

//   return {
//     props: {
//       products: products.data,
//     },
//   };
// };

export default index;
