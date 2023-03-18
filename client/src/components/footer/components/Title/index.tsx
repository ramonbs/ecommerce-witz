import React from 'react';

import styles from './Title.module.scss';

const Title: React.FC<{ title: string }> = (props) => {
  const { title } = props;

  return (
    <h3 className={ styles.title }>{ title }</h3>
  );
};

export default Title;
