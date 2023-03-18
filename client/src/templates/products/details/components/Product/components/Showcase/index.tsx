import React, { useEffect, useState } from 'react';

import data from '@services/promotions';

import { IproductDetails } from '@app/reducers/productDetails';
import { useSelector } from 'react-redux';
import styles from './Showcase.module.scss';

const Showcase: React.FC = () => {
  const product = useSelector((state: IproductDetails) => state.productDetails.product);

  const [activePicture, setActivePicture] = useState('');

  useEffect(() => {
    setActivePicture(product?.thumbnail);
  }, [product]);

  return (
    <div className={ styles.showcase }>
      <div className={ styles.thumbnails }>
        { data.slice(0, 4).map((item, index) => (
          <figure
            key={ index }
            onClick={ () => setActivePicture(item.image) }
            style={ { opacity: item.image === activePicture ? '50%' : '100%'} }
          >
            <img src={ item.image } alt='product image' />
          </figure>
        )) }
      </div>

      <figure className={ styles.active }>
        <img src={ activePicture } alt='text' />
      </figure>
    </div>
  );
};

export default Showcase;
