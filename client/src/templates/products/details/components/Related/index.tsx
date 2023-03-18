import React from 'react';
import Slider from './components/Slider';

import styles from './Related.module.scss';

const Related: React.FC = () => {
  return (
    <section className={ styles.related }>
      <h3 className={ styles.title }>Produtos relacionados</h3>
      <Slider />
    </section>
  );
};

export default Related;
