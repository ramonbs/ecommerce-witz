import React, { ReactElement } from 'react';

import styles from './Container.module.scss';

const Container: React.FC<{ children: ReactElement }> = (props) => {
  const { children } = props;

  return (
    <div className={ styles.container }>{ children }</div>
  );
};

export default Container;
