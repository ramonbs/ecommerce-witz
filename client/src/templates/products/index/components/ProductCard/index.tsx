import IProduct from '@interfaces/Product';
import { useRouter } from 'next/router';
import React from 'react';
import styles from './ProductCard.module.scss';

interface IProductCard {
  product: IProduct;
}

const ProductCard: React.FC<IProductCard> = (props) => {
  const { product } = props;

  const { push } = useRouter();

  const onClick = () => {
    push(`/products/${product._id}`);
  };

  return (
    <div className={ styles.product_card } onClick={ onClick }>
      <img
        src={ product.thumbnail }
        alt={ product.title }
        className={ styles.image }
      />

      <p className={ styles.price }>R$ { product.unit_price }</p>

      <h1 className={ styles.title }>{ product.title }</h1>

    </div>
  );
};

export default ProductCard;
