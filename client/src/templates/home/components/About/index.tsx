import Container from '@components/container';
import React from 'react';

import styles from './About.module.scss';

const About: React.FC = () => {
  return (
    <section className={ styles.wrapper }>
      <Container>
        <div className={ styles.about }>
          <img
            src='https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
            alt='store photo'
            className={ styles.image }
            style={ { width: '30rem', height: '30rem' } }
          />

          <div className={ styles.description }>
            <h2>Sobre a Autêntica Store</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore nisi labore obcaecati officiis ut asperiores alias autem illum, et sequi molestias fuga dolor iure pariatur cum voluptates minima a nobis.</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
