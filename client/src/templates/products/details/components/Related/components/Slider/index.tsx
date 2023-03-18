import React, { useRef } from 'react';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import ProductCard from '../ProductCard';

import styles from './Slider.module.scss';

import { IrelatedProducts } from '@app/reducers/relatedProducts';
import { useSelector } from 'react-redux';
import scrollTo from './scrollTo';

const Slider: React.FC = () => {
  const related = useSelector((state: IrelatedProducts) => state.relatedProducts.products);
  const container = useRef<HTMLDivElement>(null);

  return (
    <div className={ styles.slider }>
      <IoChevronBack onClick={ () => scrollTo(container, 'left') } />

      <div ref={ container } className={ styles.container }>
        { related.map((item) => (
          <ProductCard
            key={ item._id }
            id={ item._id }
            image={ item.thumbnail }
            title={ item.title }
            price={ 99.99 }
          />
        )) }
      </div>

      <IoChevronForward onClick={ () => scrollTo(container, 'right') } />
    </div>
  );
};

export default Slider;
