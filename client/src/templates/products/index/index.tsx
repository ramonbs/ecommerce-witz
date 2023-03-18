import { IfilteredProducts } from '@app/reducers/filteredProducts';
import Container from '@components/container';
import { Layout } from '@components/layout';
import IProduct from '@interfaces/Product';
import React from 'react';
import { useSelector } from 'react-redux';
import Filter from './components/Filter';
import ProductCard from './components/ProductCard';

import styles from './Products.module.scss';

interface IProductsTemplate {
  products: IProduct[];
}

const ProductsTemplate: React.FC<IProductsTemplate> = (props) => {
  const { products } = props;

  const productList = useSelector((state: IfilteredProducts) => state.filteredProducts.products);

  return (
    <Layout>
      <Container>
        <>
          <Filter products={ products } />

          <section className={ styles.products }>
            {
              productList.map((product) => (
                <ProductCard key={ product._id } product={ product } />
              ))
            }
          </section>
        </>
      </Container>
    </Layout>
  );
};

export default ProductsTemplate;
