import React, { useEffect, useState } from 'react';
import Payment from './components/payment';
import ItemList from './components/itemList';
import styles from './Cart.module.scss';
import IProduct from '@interfaces/Product';

const Cart = () => {
  const [items, setItems] = useState<IProduct[]>([]);
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    const cart = localStorage.getItem('cart');

    if(cart){
      setItems(JSON.parse(cart));
    } else {
      setItems([]);
    }
  }, []);

  useEffect(() => {
    sumOfItemsOnCart();
  }, [items]);

  function removeItemFromCart(id: string) {
    const newItems = items.filter((item) => item.idProduct !== id);

    setItems(newItems);
    localStorage.setItem('cart', JSON.stringify(newItems));
  }

  function sumOfItemsOnCart() {
    if(!items.length) {
      setSubtotal(0);
      return;
    }
    const sum = items.reduce((acc, item) => {
      return Number(acc + item.unit_price);
    }, 0);

    setSubtotal(sum);
  }

  return (
    <section className={ styles.cart }>
      <ItemList
        items={ items }
        removeItemFromCart={ removeItemFromCart }
      />
      <Payment subtotal={ subtotal } items={ items } />
    </section>
  );
};

export default Cart;
