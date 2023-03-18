import React from 'react';
import { TiInputChecked } from 'react-icons/ti';
import styles from './ItemAdded.module.scss';

interface ItemAddedProps {
  remove: () => void;
  style: {
    display: string;
  };
}

const ItemAdded: React.FC<ItemAddedProps> = (props) => {
  const { remove, style } = props;
  return (
    <section
      className={ styles.container }
      style={ style }
    >
      <div className={ styles.icon }>
        <TiInputChecked />
      </div>
      <hr />
      <div>
        <h1>Produto foi adicionado ao seu carrinho</h1>
      </div>
      <div className={ styles.back_link }>
        <p>Continuar comprando</p>
      </div>
      <div>
        <button
          className={ styles.remove_button }
          onClick={ remove }
        >
          X
        </button>
      </div>
    </section>
  );
};

export default ItemAdded;
