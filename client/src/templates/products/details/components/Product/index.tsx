import React from 'react';
import Details from './components/Details';
import Showcase from './components/Showcase';

import styles from './Product.module.scss';

const Product: React.FC = () => {
  return (
    <section className={ styles.product }>
      <div>
        <Showcase />
        <Details />
      </div>
    </section>
  );
};

export default Product;
