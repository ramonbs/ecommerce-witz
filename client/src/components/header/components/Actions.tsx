import React from 'react';
import { IoBagHandleOutline, IoPersonOutline } from 'react-icons/io5';

import styles from '../styles/Actions.module.scss';

const Actions: React.FC = () => {
  return (
    <div className={ styles.actions }>
      <div className={ styles.button }>
        <IoPersonOutline />
      </div>

      <div className={ styles.button }>
        <IoBagHandleOutline />
      </div>
    </div>
  );
};

export default Actions;
