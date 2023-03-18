import { setProductDetails } from '@app/reducers/productDetails';
import { setRelatedProducts } from '@app/reducers/relatedProducts';
import Container from '@components/container';
import { Layout } from '@components/layout';
import IProduct from '@interfaces/Product';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import About from './components/About';
import Product from './components/Product';
import Related from './components/Related';

import styles from './ProductDetails.module.scss';

interface Props {
  product: IProduct;
  related: IProduct[];
}

const ProductDetailsTemplate: React.FC<Props> = (props) => {
  const { product, related } = props;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setProductDetails(product));
    dispatch(setRelatedProducts(related));
  }, [product]);

  return (
    <Layout>
      <Container>
        <section className={ styles.product_details }>
          <Product />
          <About />
          <Related />
        </section>
      </Container>
    </Layout>

  );
};

export default ProductDetailsTemplate;
