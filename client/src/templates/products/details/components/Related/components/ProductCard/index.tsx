import { useRouter } from 'next/router';
import React from 'react';

import styles from './ProductCard.module.scss';

interface IProductCard {
  image: string;
  title: string;
  price: number;
  id: string;
}

const ProductCard: React.FC<IProductCard> = (props) => {
  const { id, image, title, price } = props;

  const { push } = useRouter();

  return (
    <div className={ styles.product_card } onClick={ () => push(`/products/${id}`) }>
      <img src={ image } alt={ title } />

      <p className={ styles.title }>{ title }</p>
      <p className={ styles.price }>R$ { price }</p>
    </div>
  );
};

export default ProductCard;
