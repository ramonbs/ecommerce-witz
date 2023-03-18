import React from 'react';

import styles from './Button.module.scss';

interface IButton {
  text: string;
  className?: string;
  onClick: () => void;
}

const Button: React.FC<IButton> = (props) => {
  const { text, onClick } = props;

  return (
    <button
      type='button'
      className={ `${styles.button} ${styles.className}` }
      onClick={ onClick }
    >
      { text }
    </button>
  );
};

export default Button;
