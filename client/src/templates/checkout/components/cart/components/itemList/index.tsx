import IProduct from '@interfaces/Product';
import Button from '@templates/authentication/components/Button';
import { useRouter } from 'next/router';
import React from 'react';
import styles from './itemList.module.scss';

interface ItemListProps {
  items: IProduct[],
  removeItemFromCart: (id: string) => void;
}

const ItemList: React.FC<ItemListProps> = (props) => {
  const { items, removeItemFromCart } = props;
  const router = useRouter();

  function reduceItemList() {
    const itemReduced = items.reduce((acc: IProduct[],item) => {
      const index = acc.findIndex((itemAcc) => itemAcc.idProduct === item.idProduct);

      if(index === -1) {
        acc.push({...item, quantity: 1});
      } else {
        acc[index].quantity = (acc[index].quantity || 0) + 1;
      }

      return acc;
    }, []);

    return itemReduced;
  }

  function cartIsEmpty() {
    return (
      <section className={ styles.container }>

        <div className={ styles.description }>
          <p>
            O seu carrinho está vazio.
          </p>
          <p>
            Deseja olhar outros produtos similares?
          </p>
          <Button
            text='Ver produtos'
            onClick={ () => {
              router.push('/');
            } }
          />
        </div>

      </section>
    );
  }

  return (
    items.length > 0 ? (
      <section className={ styles.container }>

        <table className={ styles.table }>
          <thead>
            <tr>
              <th className={ styles.title }></th>
              <th className={ styles.title }>Produto</th>
              <th className={ styles.title }>Preço</th>
              <th className={ styles.title }>Quantidade</th>
              <th className={ styles.title }>Subtotal</th>
              <th className={ styles.title }></th>
            </tr>
          </thead>

          <tbody>
            { reduceItemList().map(item => (
              <tr key={ item.idProduct } className={ styles.tableRow }>
                <td className={ styles.description }><img src={ item.thumbnail }></img></td>
                <td className={ styles.description }>{ item.title }</td>
                <td className={ styles.description }>R${ item.unit_price }</td>
                <td className={ styles.description }>{ item.quantity }</td>
                <td className={ styles.description }>R${ item.quantity
                  ? item.unit_price * item.quantity : item.unit_price }
                </td>
                <td>
                  <button
                    className={ styles.remove_button }
                    onClick={ () => removeItemFromCart(item.idProduct) }
                  >
                    X
                  </button>
                </td>
              </tr>
            ))
            }
          </tbody>
        </table>

        <section className={ styles.container_button_update }>

          <button className={ styles.update_button }>
            Atualizar
          </button>

        </section>
      </section>
    )
      :
      cartIsEmpty()
  );
};

export default ItemList;
