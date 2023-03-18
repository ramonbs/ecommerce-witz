import React from 'react';

import styles from './Title.module.scss';

const Title: React.FC<{ text: string }> = (props) => {
  const { text } = props;

  return <h2 className={ styles.title }>{ text }</h2>;
};

export default Title;
