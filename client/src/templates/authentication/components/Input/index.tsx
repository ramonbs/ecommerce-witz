import React from 'react';

import styles from './Input.module.scss';

interface IInput {
  type: string;
  name: string;
  value: string;
  id: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onEnterKeyPress?: () => void;
}

const Input: React.FC<IInput> = (props) => {
  const { type, name, value, id, placeholder, onChange, onEnterKeyPress } = props;

  const onEnterKeyPressHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && onEnterKeyPress) {
      onEnterKeyPress();
    }
  };

  return (
    <input
      type={ type }
      name={ name }
      value={ value }
      id={ id }
      placeholder={ placeholder }
      className={ styles.input }
      onChange={ onChange }
      onKeyDown={ onEnterKeyPressHandler }
    />
  );
};

export default Input;
