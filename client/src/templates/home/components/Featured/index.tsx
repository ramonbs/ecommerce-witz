import React from 'react';

import creditCardIcon from './assets/credit-card_icon.webp';
import deliveryIcon from './assets/delivery_icon.webp';
import locationIcon from './assets/location_icon.webp';
import lockIcon from './assets/lock_icon.webp';

import styles from './Featured.module.scss';

const Featured: React.FC = () => {
  return (
    <section className={ styles.featured }>
      <div className={ styles.delivery }>
        <img src={ deliveryIcon.src } alt='delivery box icon' />

        <div className={ styles.description }>
          <h3>Frete <span>Grátis</span></h3>
          <p>A partir de R$1.000</p>
        </div>
      </div>

      <div className={ styles.payment }>
        <img src={ creditCardIcon.src } alt='credit card icon' />

        <div className={ styles.description }>
          <h3>Até <span>12x</span> sem juros</h3>
          <p>Parcela mínima de R$800</p>
        </div>
      </div>

      <div className={ styles.location }>
        <img src={ locationIcon.src } alt='location icon' />

        <div className={ styles.description }>
          <h3>Atendimento <span>Exclusivo</span></h3>
          <p>Venha nos visitar!</p>
        </div>
      </div>

      <div className={ styles.secure }>
        <img src={ lockIcon.src } alt='lock icon' />

        <div className={ styles.description }>
          <h3>Compra <span>Segura</span></h3>
          <p>Ambiente seguro e protegido</p>
        </div>
      </div>
    </section>
  );
};

export default Featured;
