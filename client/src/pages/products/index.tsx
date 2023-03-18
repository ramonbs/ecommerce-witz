import IProduct from '@interfaces/Product';
import { fetchAllProducts } from '@services/api/products';
import ProductsTemplate from '@templates/products/index';
import React from 'react';

interface IProducts {
  products: IProduct[];
}

const Products: React.FC<IProducts> = (props) => {
  const { products } = props;

  return <ProductsTemplate products={ products } />;
};

export async function getStaticProps() {
  const products = await fetchAllProducts();

  return {
    props: {
      products: products.data,
    },
  };
}

export default Products;
