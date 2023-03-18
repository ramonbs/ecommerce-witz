import { useRouter } from 'next/router';
import React from 'react';

import styles from './CarouselCard.module.scss';

interface ICarouselCard {
  id: string;
  name: string;
  image: string;
  width: number;
}

const CarouselCard: React.FC<ICarouselCard> = (props) => {
  const { id, name, image, width } = props;

  const { push } = useRouter();

  return (
    <div
      style={ {width: `${width}px`, height: `${width * 1.5}px`} }
      id={ id.toString() }
      className={ styles.carousel_card }
      onClick={ () => push(`/products/${id}`) }
    >
      <img src={ image } alt={ name } />
      <p>{ name }</p>
    </div>
  );
};

export default CarouselCard;
