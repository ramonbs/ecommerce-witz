import { GetServerSideProps } from 'next';
import { fetchAllProducts } from '@services/api/products';
import React from 'react';

interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    thumbnail: string;
}

export default function Products ({ products }: { products: Product[] }) {
  return (
    <>
      { products.map((product) => (
        <div key={ product.id }>
          <h1>{ product.name }</h1>
          <p>{ product.description }</p>
          <p>{ product.price }</p>
          <img src={ product.thumbnail } alt={ product.name } />
        </div>
      ))
      }
    </>
  );
}

export const getServersideProps: GetServerSideProps = async () => {
  const products = await fetchAllProducts();

  console.log(products);


  return {
    props: {
      products,
    },
  };
};
