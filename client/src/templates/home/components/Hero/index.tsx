import React from 'react';

import styles from './Hero.module.scss';

import image from './assets/hero.jpeg';

const Hero: React.FC = () => {
  return (
    <section className={ styles.hero }>
      <img src={ image.src } alt='alt' />
    </section>
  );
};

export default Hero;
