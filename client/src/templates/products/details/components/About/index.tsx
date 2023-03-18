import React from 'react';
import Menu from './components/Menu';

import styles from './About.module.scss';

const About: React.FC = () => {
  return (
    <section className={ styles.about }>
      <Menu />
    </section>
  );
};

export default About;
